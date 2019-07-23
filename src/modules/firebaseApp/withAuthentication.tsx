import React from 'react';
import authContext from './authContext';
import {withFirebase} from './index';
import Firebase from '../app/components/RouterGroupAuthUser/Pages/utils/firebaseApp';



interface Props {
    Firebase : Firebase
    
}

const withAuthentication = (Component: React.ComponentType<any>) => {
class withAuthenticationBase extends React.Component<Props> {

    listener: any;

    state = {
        authUser : null,
        vanish : 'vanish'
    }

    componentDidMount() {
        this.listener = this.props.Firebase.auth.onAuthStateChanged(authUser => {
            authUser ? this.setState({authUser, vanish: ''}) : this.setState({authUser : null, vanish: ''}) 
        })
    }

    componentWillUnmount() { 
        this.listener();
    }

    render() {

        return(
            <authContext.Provider value={this.state.authUser} >
                <Component {...this.props}  vanish={this.state.vanish}  />
            </authContext.Provider>
        )
    }
}

return withFirebase(withAuthenticationBase);
} 

export default withAuthentication;