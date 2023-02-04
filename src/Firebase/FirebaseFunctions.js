import {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, signInWithEmailAndPassword, set, ref, getAuth, addDoc, collection,
  getFirestore, signOut, getDocs, doc, getDoc, onSnapshot,
} from './FirebaseImport.js';

// FUNCIÓN REGISTRO EN FIREBASE
export const registerFirebase = (auth, email, password) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      sendEmailVerification(auth.currentUser);
      set(ref(database, `users/${user.uid}`), {
        username,
        email,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
};

// FUNCIÓN LOGIN
export const login = async (auth, email, password) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
  return undefined;
};

export const registerGoogle = (auth, provider) => {
  signInWithPopup(auth, provider)
    .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
    // ...
    }).catch((error) => {
    // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    });
};

export const databaseFirestore = (post, db) => {
  addDoc(collection(db, 'users'), { post });
};

export const logOut = (auth) => {
  signOut(auth).then(() => {
  // Sign-out successful.
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  // An error happened.
  });
};

export const getAllPosts = (db) => { console.log(getAllPosts(db))
  getDocs(collection(db, 'users'));
};

export const getPost = (id, db) => getDoc(doc(db, 'users', id));

// export const saveTask = (title, description) =>
//   addDoc(collection(db, "tasks"), { title, description });

export const onGetAllPosts = (callback, db) => onSnapshot(collection(db, 'users'), callback);

// export const deleteTask = (id) => deleteDoc(doc(db, "tasks", id));

export {
  initializeApp, createUserWithEmailAndPassword, sendEmailVerification,
  signInWithPopup, GoogleAuthProvider, getAuth, signInWithEmailAndPassword, getFirestore, getDocs,
};
