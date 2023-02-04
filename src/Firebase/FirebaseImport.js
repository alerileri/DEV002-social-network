import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js';
import {
  createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js';
import { set, ref } from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js';
import {
  getFirestore, collection, addDoc, getDocs, getDoc, doc, onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js';

export {
  createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup,
  GoogleAuthProvider, getAuth, signInWithEmailAndPassword, set, ref, initializeApp, collection,
  getFirestore, addDoc, signOut, getDocs, getDoc, doc, onSnapshot,
};
