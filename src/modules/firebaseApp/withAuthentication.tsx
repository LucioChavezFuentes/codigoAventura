import React from 'react';
import authContext from './authContext';
import {withFirebase} from './index';
import Firebase from '../app/components/RouterGroupAuthUser/Pages/utils/firebaseApp';



interface Props {
    Firebase : Firebase
    
}

const withAuthentication = (Component: React.ComponentType) => {
class withAuthenticationBase extends React.Component<Props> {

    listener: any;

    state = {
        authUser : null
    }

    componentDidMount() {
        this.listener = this.props.Firebase.auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({authUser}) : this.setState({authUser : null})
        })
    }

    componentWillUnmount() {
        this.listener();
    }

    render() {

        return(
            <authContext.Provider value={this.state.authUser} >
                <Component {...this.props}  />
            </authContext.Provider>
        )
    }
}

return withFirebase(withAuthenticationBase);
} 

export default withAuthentication;