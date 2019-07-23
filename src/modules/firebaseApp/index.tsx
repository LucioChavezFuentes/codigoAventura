import FirebaseContext, {withFirebase} from './context';
import Firebase from './firebaseClass';
import AuthUserContext from './authContext'
import withAuthentication from './withAuthentication'

export default Firebase;

export { FirebaseContext, withFirebase, AuthUserContext, withAuthentication };