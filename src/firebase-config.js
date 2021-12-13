import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { getFirestore } from "firebase/firestore" 
const firebaseConfig = {
  apiKey: "AIzaSyAcsaGac0Ugq_ELseEySSG-ibAjptikqBU",
  authDomain: "gestor-proyectos-nivelics.firebaseapp.com",
  projectId: "gestor-proyectos-nivelics",
  storageBucket: "gestor-proyectos-nivelics.appspot.com",
  messagingSenderId: "167967778761",
  appId: "1:167967778761:web:69d0674ccbceff3d63ea18",
  measurementId: "G-E1CL1DYCRK",
};

const fire = firebase.initializeApp(firebaseConfig);
const auth = fire.auth();
const db = getFirestore(fire)

export { auth ,db};
