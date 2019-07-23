import React from 'react';
import './HeaderUser.scss';
import * as ROUTES from '../../../constants/routes';
import Firebase, {withFirebase} from '../../utils/firebaseApp';

import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps  {
  Firebase : Firebase | null
}


class HeaderUserBase extends React.Component<Props> {
  
  handleClick = () => {
    
    
    this.props.history.push('/')
      

  }

  render() { 
    
    return (

      <div className="header">
        <div className="leftSection">
          <NavLink to={'/'}>Código Aventura</NavLink> 
          {/* Check these Links for further implementation
          <NavLink to='/about' > About </NavLink>
                <NavLink to='/contact'> Contact </NavLink>*/}

        </div>

        <div className="rightSection">

          <div className='signOutButton' >
            <button onClick={this.props.Firebase!.doSignOut}>Cerrar Sesión</button> 
          </div>

          <div className='userAvatar'>
            <img src='./graphic-3739607_1280.png' alt='myAvatar' />
          </div> 
 
        </div>
      </div>)
   
  }


}

const HeaderUser = withRouter(withFirebase(HeaderUserBase));
export default HeaderUser;