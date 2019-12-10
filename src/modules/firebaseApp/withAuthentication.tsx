import React from 'react';
import authContext from './authContext';
import {withFirebase} from './index';
import Firebase from '../app/components/RouterGroupAuthUser/Pages/utils/firebaseApp';
import {RouteComponentProps} from 'react-router-dom';

interface Props extends RouteComponentProps {
    Firebase : Firebase
    
}

const withAuthentication = (Component: React.ComponentType<any>) => {
class withAuthenticationBase extends React.Component<Props > {

    listener: any;

    state = {
        authUser : null,
        vanish : 'vanish'
    }

    componentDidMount() {
        this.listener = this.props.Firebase.auth.onAuthStateChanged(authUser => {

            if(authUser) {
                this.setState({authUser, vanish: ''})
            } else {
                this.setState({authUser : null, vanish: ''})
                /*if(this.props.location.pathname === '/home') {
                    this.props.history.push('/') 
                }*/ 
            } 
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