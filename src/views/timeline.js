// import { template } from '../lib/Router.js';
import {
  logOut, publicaciones, onGetPost, deletePost, editPost, getPost, datePost,
  updateNotes,
}
  from '../Firebase/FirebaseFunctions.js';
import { auth, doc, onAuthStateChanged } from '../Firebase/FirebaseImport.js';
import { inicioDeSesion } from './InicioDeSesion.js';
// onGetPost, deletePost, getPost, publicaciones

const main = document.getElementById('main');
const footer = document.getElementById('footer');

export const timeline = () => {
  main.innerHTML = '';
  footer.innerHTML = '';

  const section1 = document.createElement('section');
  const logo = document.createElement('img');
  const holaUsuaria = document.createElement('p');
  const section2 = document.createElement('form');
  const inputPost = document.createElement('textarea');
  const botonPublicar = document.createElement('button');
  const section3 = document.createElement('section');
  const nombrePost = document.createElement('p');

  const formPost = document.createElement('form');
  const divPosted = document.createElement('div');
  const eliminar = document.createElement('i');
  const editar = document.createElement('i');
  const fecha = document.createElement('p');
  const signOut = document.createElement('i');
  const buttonOut = document.createElement('button');

  section1.className = 'section-head';
  logo.className = 'logo-timeline';
  logo.src = './img/logo-big.png';
  logo.alt = 'logo-powerL';
  holaUsuaria.className = 'hola-Usuaria';
  holaUsuaria.id = 'usuariaHola';
  eliminar.className = 'fa-solid fa-trash-can';
  editar.className = 'fa-regular fa-pen-to-square';
  signOut.className = 'fa-solid fa-arrow-right-from-bracket signOut-icon';
  section1.appendChild(logo);
  section1.appendChild(holaUsuaria);

  section2.className = 'section-posting';
  inputPost.className = 'input-post';
  inputPost.id = 'postear';
  inputPost.placeholder = '¡Hola mundo!';
  inputPost.cols = '50';
  inputPost.rows = '4';
  inputPost.resize = 'none';
  botonPublicar.className = 'boton-enviar';
  botonPublicar.id = 'publicar';
  botonPublicar.innerText = 'Publicar';
  botonPublicar.type = 'submit';
  formPost.id = 'formPost';
  formPost.appendChild(inputPost);
  formPost.appendChild(botonPublicar);
  section2.appendChild(formPost);

  section3.className = 'section-timeline';
  nombrePost.className = 'autora-post';
  divPosted.className = 'div-posted';
  divPosted.id = 'divPosted';
  eliminar.className = 'boton-eliminar';
  editar.className = 'boton-editar';
  fecha.className = 'fecha-post';
  section3.appendChild(nombrePost);
  section3.appendChild(divPosted);
  section3.appendChild(fecha);
  fecha.appendChild(eliminar);
  fecha.appendChild(editar);

  main.appendChild(section1);
  main.appendChild(section2);
  main.appendChild(section3);
  buttonOut.id = 'userSignOut';
  buttonOut.className = 'signOut-button';
  footer.appendChild(buttonOut);
  buttonOut.appendChild(signOut);

  const postedDiv = document.getElementById('divPosted');

  let arrayPost = [];
  const postear = document.getElementById('postear');
  const publicar = document.getElementById('publicar');
  const userLogout = document.getElementById('userSignOut');
  const formulario = document.getElementById('formPost');
  let editStatus = false;
  let id = '';
  //const usuariaHola = document.getElementById('usuariaHola');

  //           ELIMINAR, EDITAR, LIKES

  // Aquí inicia el observador - condicional - botones
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const userID = user.uid;
      datePost((querySnapshot) => {
        let html = '';
        let optionsUser = '';
        let saludoUsuaria= '';
        querySnapshot.forEach((doc) => {
          const postData = doc.data();
          if (userID === postData.userID) {
            optionsUser = `
         <div class = 'post-options'>
         <button class='btn-delete' data-id='${doc.id}'>
         Eliminar
         </button>
         <button class='btn-edit' data-id='${doc.id}'>
         Editar
         </button>
            </div>
       `;
          } else {
            optionsUser = '';
          }
          saludoUsuaria = `<div>
          Hola,
          ${auth.currentUser.displayName}
          </div>`;
          html
          += ` <div class = 'post-foreach'>
          <div class = 'post-nameDate'>
          <p>${postData.name}</p>
          <p>${postData.formattedDate}</p>
          </div>
          <p>${postData.post}</p>
          ${optionsUser}
          <div class = 'post-like'>
          <button class='btn-like active normal' data-id='${doc.id}'>❤</button>
          <p class='counter'>${postData.countLikes}</p>
          </div>
          </div>`;
        });
        holaUsuaria.innerHTML = saludoUsuaria;
        postedDiv.innerHTML = html;
        //             ELIMINAR
        const btnsDelete = postedDiv.querySelectorAll('.btn-delete');
        btnsDelete.forEach((btn) => {
          btn.addEventListener('click', ({ target: { dataset } }) => {
            if (confirm('¿Segura que deseas eliminar el post?')) { /* eslint-disable-line */
              deletePost(dataset.id);
            }
          });
        });

        //              EDITAR
        const btnsEdit = postedDiv.querySelectorAll('.btn-edit');
        console.log(btnsEdit);
        btnsEdit.forEach((btn) => {
          btn.addEventListener('click', async (e) => {
            const doc = await getPost(e.target.dataset.id);
            const postData = doc.data();
            formulario.postear.value = postData.post;

            editStatus = true;
            id = doc.id;

            formulario.publicar.innerText = 'Update';
          });
        });

        //                LIKES
        const btnsLike = postedDiv.querySelectorAll('.btn-like');
        btnsLike.forEach((btn) => {
          btn.addEventListener('click', async ({ target: { dataset } }) => {
            const doc = await getPost(dataset.id);

            const postData = doc.data();
            id = doc.id;
            console.log(doc);
            const userIDlikes = user.uid;
            // catch
            arrayPost = postData.likes;
            if (!arrayPost.includes(userIDlikes)) {
              arrayPost.push(userIDlikes);
            } else {
              console.log('El usuario ya había dado like, no es necesario hacer nada');
              // En este else, la variable index que
              const index = arrayPost.indexOf(userIDlikes);
              // Agregar un if de "verificación" para saber si el usuario está
              // en el array; recordar que el índice mínimo de un array es 0,
              // por eso se pone -1
              if (index > -1) {
                // el splice, para eliminar ese índice 1 del array
                // (sacar el id de usuario del array)
                arrayPost.splice(index, 1);
              }
            }
            const likesCount = arrayPost.length;
            updateNotes(id, { likes: arrayPost, countLikes: likesCount });
          });// la del click
        });
      });
    } else {
      console.log('usuaria no logueada');
    }
  });

  //                  TEMPLATE TIMELINE
  publicar.addEventListener('click', async (e) => {
    e.preventDefault();
    const postDescription = formulario.postear;
    // await postPublisher();

    if (!editStatus) {
      await publicaciones(postDescription.value);
    } else {
      await updateNotes(id, { post: postDescription.value });
      //  console.log('updating');

      editStatus = false;
    }
    formulario.reset();
  });

  //       FUNCIÓN LOGOUT
  console.log('Función Logout');
  userLogout.addEventListener('click', (e) => {
    e.preventDefault();
    logOut(auth);
    return window.location = 'http://localhost:3000/#';
  });
};
