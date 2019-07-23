import React from 'react';

const AuthUserContext = React.createContext<firebase.User | null | boolean>(null); 

export default AuthUserContext;