// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyATo1PQo-uis7O2H4haqkxDBXo417UirjI",
    authDomain: "discord-clone-dkt-2.firebaseapp.com",
    databaseURL: "https://discord-clone-dkt-2.firebaseio.com",
    projectId: "discord-clone-dkt-2",
    storageBucket: "discord-clone-dkt-2.appspot.com",
    messagingSenderId: "142019218327",
    appId: "1:142019218327:web:931c1d092de1401259d2d2",
    measurementId: "G-LYWDJET55K"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export{auth, provider};
  export default db;