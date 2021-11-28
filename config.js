  
import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyBdoj7IA_oV68VYAwtFYxxWs5uJEwmNe0w",
  authDomain: "complaint-forum-fc802.firebaseapp.com",
  projectId: "complaint-forum-fc802",
  storageBucket: "complaint-forum-fc802.appspot.com",
  messagingSenderId: "115861585046",
  appId: "1:115861585046:web:9e0865bd4f8b7acf4f56b7",
  measurementId: "G-H2PKMN3GKM"
};
 
  firebase.initializeApp(firebaseConfig);

  export default  firebase.firestore();