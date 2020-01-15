import * as app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID
  };

class Firebase {
  auth: app.auth.Auth;
  db : firebase.database.Database;

    constructor() {
        app.initializeApp(firebaseConfig);
        this.auth = app.auth();
        this.db = app.database();
    }

    //Authentication API

    doCreateUserWithEmailAndPassword(email:string, password:string) {
      return this.auth.createUserWithEmailAndPassword(email, password);
    } 
    
    
    doSignInWithEmailAndPassword = (email:string, password:string) => 
      this.auth.signInWithEmailAndPassword(email, password); 
    

    doSignOut = () => this.auth.signOut();

    doPassWordReset = (email:string) => 
      this.auth.sendPasswordResetEmail(email)
    

    doPasswordUpdate = (password:string)  =>   
      this.auth.currentUser!.updatePassword(password);

    //User API
    //Presiona ALT + } para ``
    user = (id:string) => this.db.ref(`users/${id}`);

    users = () => this.db.ref(`users/`);
    
    userCode = (id:string) => this.db.ref(`users/${id}/code`);
}

export default Firebase;

