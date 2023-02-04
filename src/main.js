// Este es el punto de entrada de tu aplicacion

import firebaseConfig from './Firebase/ConfigFirebase.js';
import { register } from './views/register.js';
import { timeline } from './views/timeline.js';
import { inicioDeSesion } from './views/InicioDeSesion.js';
import { route, template, router } from './lib/Router.js';
import {
  registerFirebase, registerGoogle, getAuth, GoogleAuthProvider, initializeApp, login,
  databaseFirestore, getFirestore, logOut, onGetAllPosts,
} from './Firebase/FirebaseFunctions.js';

initializeApp(firebaseConfig);
export const auth = getAuth();
const db = getFirestore();
const provider = new GoogleAuthProvider();
// function login(email, password) {
//   if (email === '' || password === '') {
//     alert('Completa los datos requeridos');
//   } else {
//     return window.location = 'http://localhost:3000/#/timeline';
//   }
// }

template('inicioDeSesion', () => { // Se crea una función anónima
  inicioDeSesion(); // Le asigna a la función anónima la función about()
  const signIn = document.getElementById('enviar');
  signIn.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('correo').value;
    const password = document.getElementById('password').value;
    if (login(auth, email, password) === auth.currentUser) {
      return window.location = 'http://localhost:3000/#/timeline';
    }
    return inicioDeSesion();
  });
  const google = document.getElementById('google');
  google.addEventListener('click', (e) => {
    e.preventDefault();
    registerGoogle(auth, provider);
  });
});

template('register', () => { // Se crea una función anónima
  register(); // Le asigna a la función anónima la función about()
  const submit = document.getElementById('enviar');
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.getElementById('correo').value;
    // let usuaria = document.getElementById('usuaria').value
    const password = document.getElementById('password').value;
    registerFirebase(auth, email, password);
    // emailAutentication(auth, email)
    if (email === '' || password === '') {
      alert('Completa los datos requeridos');
    } else {
      alert('El correo de verificación ha sido enviado a su bandeja de entrada');
    }
  });
});

template('timeline', () => {
  timeline();
  const inputPost = document.getElementById('postear');
  const postsContainer = document.getElementById('sectionTimeline');
 // const editStatus = false;
 // const id = '';

  window.addEventListener('DOMContentLoaded', () => {
    onGetAllPosts((querySnapshot) => {
      postsContainer.innerHTML = '';

      querySnapshot.forEach((doc) => {
        const postData = doc.data();

        //     <div class="card card-body mt-2 border-primary">
        postsContainer.innerHTML += `
    
          <div>
       <p>${postData.post}</p>
      // <div>
    //     <button class="btn btn-primary btn-delete" data-id="${doc.id}">
    //       🗑 Delete
    //     </button>
    //     <button class="btn btn-secondary btn-edit" data-id="${doc.id}">
    //       🖉 Edit
    //     </button>
     // </div>
    </div>`;
      });
    });

    const publicar = document.getElementById('publicar').value;
    const userLogout = document.getElementById('userSignOut');
    publicar.addEventListener('click', (e) => {
      e.preventDefault();
      const inputPost = document.getElementById('postear');
      databaseFirestore(post, db);
    });
    userLogout.addEventListener('click', (e) => {
      e.preventDefault();
      logOut(auth);
      return inicioDeSesion();
    });
  });
});

route('/', 'inicioDeSesion');
route('/register', 'register');
route('/timeline', 'timeline');

window.addEventListener('load', router); // Con el evento load se ejecuta la función router
window.addEventListener('hashchange', router);

// export { login }
