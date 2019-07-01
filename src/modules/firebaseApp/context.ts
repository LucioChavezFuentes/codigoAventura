import React from 'react';
import firebase from './firebaseClass';



const FirebaseContext = React.createContext<firebase | null>(null);

export default FirebaseContext;