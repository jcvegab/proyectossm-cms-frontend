import { initializeApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getStorage, FirebaseStorage } from 'firebase/storage';

import { FIREBASE_CONFIG } from '../variables';

const app = initializeApp(FIREBASE_CONFIG);

class Firebase {
  auth: Auth;
  storage: FirebaseStorage;
  constructor() {
    this.auth = getAuth(app);
    this.storage = getStorage(app);
  }
}

export default Firebase;
