import React from 'react';
import Firebase from './firebaseClass';


const FirebaseContext = React.createContext<Firebase | null>(null);

export const withFirebase = <P extends object>(Component: React.ComponentType<P>) => (props : any) => (
    <FirebaseContext.Consumer>
      {firebase => <Component {...props} firebase={firebase} />}
    </FirebaseContext.Consumer>
  );

export default FirebaseContext; 