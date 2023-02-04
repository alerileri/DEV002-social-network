const main = document.getElementById('main');
const footer = document.getElementById('footer');

export const timeline = () => {
  main.innerHTML = '';
  footer.innerHTML = '';

  const section1 = document.createElement('section');
  const logo = document.createElement('img');
  const holaUsuaria = document.createElement('p');
  const section2 = document.createElement('section');
  const inputPost = document.createElement('textarea');
  const botonPublicar = document.createElement('button');
  const section3 = document.createElement('section');
  const nombrePost = document.createElement('p');
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

  section2.appendChild(inputPost);
  section2.appendChild(botonPublicar);

  section3.id = 'sectionTimeline';
  section3.className = 'section-timeline';
  nombrePost.className = 'autora-post';
  divPosted.className = 'div-posted';
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
};
