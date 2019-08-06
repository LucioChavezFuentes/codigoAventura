import React from 'react';
import './HeaderUser.scss';
import * as ROUTES from '../../../constants/routes';
import Firebase, {withFirebase} from '../../utils/firebaseApp';
import {Button} from 'react-bootstrap';

import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps  {
  Firebase : Firebase | null
}


class HeaderUserBase extends React.Component<Props> {
  
  handleClick = () => {
    
    
    
    this.props.Firebase!.doSignOut().then(() => {
 
      this.props.history.push(ROUTES.SIGN_IN)
    })

  }

  render() { 
    
    return (

      <div className="header">
        <div className="leftSection">
          <NavLink to={ROUTES.HOME}>
            <Button variant='info'>Código Aventura</Button> 
          </NavLink> 
          {/* Check these Links for further implementation
          <NavLink to='/about' > About </NavLink>
                <NavLink to='/contact'> Contact </NavLink>*/}

        </div>

        <div className="rightSection">

          <div className='signOutButton' >
            <Button variant='outline-danger' onClick={this.handleClick}>Cerrar Sesión</Button>  
          </div> 

          <div className='userAvatarContainer'>
            <img className='userAvatar' src='http://www.agecefrio.com.br/novo-site/app/icones/cadastro-azul.png' alt='myAvatar' />
          </div> 
 
        </div>
      </div>)
   
  }


}

const HeaderUser = withRouter(withFirebase(HeaderUserBase));
export default HeaderUser;