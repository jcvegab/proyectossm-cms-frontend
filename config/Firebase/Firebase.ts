import { initializeApp } from 'firebase/app'
import { getAuth, Auth } from 'firebase/auth'
import { getStorage, FirebaseStorage } from 'firebase/storage'

import { FIREBASE_CONFIG } from '../variables'

// const firebaseConfig = {
//   apiKey: "AIzaSyB8Oz-KjiyABiw3o9kUr_bliYiKwgHxrXo",
//   authDomain: "proyectos-san-marcos-3dd93.firebaseapp.com",
//   projectId: "proyectos-san-marcos-3dd93",
//   storageBucket: "proyectos-san-marcos-3dd93.appspot.com",
//   messagingSenderId: "1051517706126",
//   appId: "1:1051517706126:web:286cede4ba5bd5caaa8edf",
//   measurementId: "G-QQNBY7WFGP"
// };

const app = initializeApp(FIREBASE_CONFIG)

class Firebase {
  auth: Auth
  storage: FirebaseStorage
  constructor() {
    this.auth = getAuth(app)
    this.storage = getStorage(app)
  }
}

export default Firebase
