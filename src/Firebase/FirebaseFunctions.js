// import { async } from 'regenerator-runtime';
import {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, signInWithEmailAndPassword, getAuth, addDoc, collection,
  getFirestore, signOut, updateProfile, onAuthStateChanged, getDoc, getDocs, onSnapshot,
  db, auth, provider, deleteDoc, updateDoc, doc, Timestamp, arrayRemove, arrayUnion, query, orderBy,
} from './FirebaseImport.js';


//           FUNCIÓN REGISTRO EN FIREBASE
export const registerFirebase = (email, password, name) => { 
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser);
      updateProfile(auth.currentUser, { displayName: name });
      // return userCredential;
      // return user;
    })
    .catch((error) => {
      console.log(error.code);
      console.log(error.message);
    //  alert(errorMessage);
    });
};

//       FUNCIÓN LOGIN CON EMAIL Y CONTRASEÑA

export const login = async (email, password) => {
  const promesaLogin = signInWithEmailAndPassword(auth, email, password);
  console.log(promesaLogin);
  return promesaLogin;
};

//                 OBSERVADOR

//          FUNCIÓN REGISTRO CON GOOGLE
export const registerGoogle = () => {
  signInWithPopup(auth, provider);
};

//          MOSTRAR LOS POSTS

// Para guardar Posts
export const publicaciones = (post) => {
  // const auth = getAuth();
  console.log(auth.currentUser);

  const createdDateTime = Timestamp.fromDate(new Date());
  const date = createdDateTime.toDate();
  const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear().toString().slice(-2)}`;

  addDoc(collection(db, 'users'), {
    post,
    name: auth.currentUser.displayName,
    userID: auth.currentUser.uid,
    likes: [],
    countLikes: 0,
    createdDateTime: Timestamp.fromDate(new Date()),
    formattedDate: formattedDate,
  });
};

// para obtener data de las colecciones
export const getAllPosts = () => getDocs(collection(db, 'users'));

// para actualizar en tiempo real
export const onGetPost = (querySnapshot) => onSnapshot(collection(db, 'users'), querySnapshot);

// para borrar los posts
export const deletePost = (id) => deleteDoc(doc(db, 'users', id));

// para editar posts
export const editPost = (id) => getDoc(doc(db, 'users', id));
export const getPost = (id) => getDoc(doc(db, 'users', id));
export const q = query(collection(db, 'users'), orderBy('createdDateTime', 'desc'));
// actualizar publicaciones
export const updateNotes = (id, newFile) => updateDoc(doc(db, 'users', id), newFile);

// función para obtener un post por su ID
//export const editLike = (id) => getDoc(doc(db, 'users', id));
export const datePost = (querySnapshot) => {
  onSnapshot(q, querySnapshot);
};

//         CERRAR SESIÓN
export const logOut = (auth) => {
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  // An error happened.
  });
};

export {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, getFirestore,
  onAuthStateChanged, doc,
};
