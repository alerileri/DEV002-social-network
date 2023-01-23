// Este es el punto de entrada de tu aplicacion
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import firebaseConfig from './Firebase/ConfigFirebase.js';
import { register } from './views/register.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { emailAutentication} from './Firebase/FirebaseFunctions.js';
import { inicioDeSesion } from './views/InicioDeSesion.js';
import{route, template, router} from './lib/Router.js'

initializeApp(firebaseConfig);
//register();



template('inicioDeSesion', function () { //Se crea una función anónima
    inicioDeSesion(); // Le asigna a la función anónima la función about()
})
template('register', function () { //Se crea una función anónima
    register(); // Le asigna a la función anónima la función about()
})

route('/', 'inicioDeSesion');
route('/register', 'register');


const submit = document.getElementById('enviar')

const auth = getAuth();


window.addEventListener('load', router); // Con el evento load se ejecuta la función router
console.log('escuchando evento hashchange')
window.addEventListener('hashchange', router); 

submit.addEventListener('click', (e) => {
    e.preventDefault();
    let email = document.getElementById('correo').value
    //let usuaria = document.getElementById('usuaria').value
    let password = document.getElementById('password').value
    console.log(email)
    console.log(password)
    //registerFirebase(auth, email, password)
    emailAutentication(auth, email)
})