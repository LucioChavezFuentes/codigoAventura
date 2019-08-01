import React from 'react';

import AuthUserContext from './authContext';

const withAuthUser = <P extends object>(Component: React.ComponentType<P> ) => (props : any) => (
    <AuthUserContext.Consumer>
        {authUser => <Component {...props} authUser={authUser} />}  
    </AuthUserContext.Consumer>
)

export default withAuthUser;