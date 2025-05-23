import Firebase from 'firebase';
import 'firebase/storage';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAX5nwEKFOnvleDCJzMCrDUUnDau3BcQRM",
  authDomain: "skyla-app-4bbb7.firebaseapp.com",
  projectId: "skyla-app-4bbb7",
  storageBucket: "skyla-app-4bbb7.appspot.com",
  messagingSenderId: "1092196798496",
  appId: "1:1092196798496:web:f2b0aa3a77d68417376c45"
}

if (!Firebase.apps.length) {
  Firebase.initializeApp(firebaseConfig);
}

const auth = Firebase.auth();
const conexao = Firebase.firestore();
const storage = Firebase.storage();

export { auth, conexao, storage };
export default Firebase;