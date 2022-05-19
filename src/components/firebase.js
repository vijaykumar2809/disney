const firebaseConfig = {
  apiKey: "AIzaSyBmmgG-n2l27YHDdF2aDh6dHSsyR_Zm0NA",
  authDomain: "disneyhotstar-clone-22955.firebaseapp.com",
  projectId: "disneyhotstar-clone-22955",
  storageBucket: "disneyhotstar-clone-22955.appspot.com",
  messagingSenderId: "316686656384",
  appId: "1:316686656384:web:571aa5c3b04cba7a6dd765",
  measurementId: "G-QKV4RY6K7K",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
