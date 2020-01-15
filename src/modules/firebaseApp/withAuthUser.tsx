import React from 'react';

import AuthUserContext from './authUserContext';

const withAuthUser = <P extends object>(Component: React.ComponentType<P> ) => (props : any) => (
    <AuthUserContext.Consumer>
        {authUser => <Component {...props} authUser={authUser} />}  
    </AuthUserContext.Consumer>
)

export default withAuthUser;