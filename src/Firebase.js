import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAwGurNpKdfxcwymr2qv4uHqDIjh5fWsO0',
  authDomain: 'calendar-1dd82.firebaseapp.com',
  projectId: 'calendar-1dd82',
  storageBucket: 'calendar-1dd82.appspot.com',
  messagingSenderId: '859615943366',
  appId: '1:859615943366:web:2321f0be46307f71ca15c7',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
