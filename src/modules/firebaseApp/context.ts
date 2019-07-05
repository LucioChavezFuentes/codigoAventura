import React from 'react';
import Firebase from './firebaseClass';



const FirebaseContext = React.createContext<Firebase | null>(null);

export default FirebaseContext;