import React from 'react';
import './Header.scss';
import * as ROUTES from '../../../constants/routes';
import Firebase, {withFirebase} from '../../utils/firebaseApp';

import { NavLink } from 'react-router-dom';

interface Props {
  Firebase : Firebase | null
}


class HeaderUserBase extends React.Component<Props> {

  render() {
    return (

      <div className="header">
        <div className="leftSection">
          <NavLink to={ROUTES.HOME}>Código Aventura</NavLink>
          {/* Check these Links for further implementation
          <NavLink to='/about' > About </NavLink>
                <NavLink to='/contact'> Contact </NavLink>*/}

        </div>

        <div className="rightSection">

          <div onClick={this.props.Firebase!.doSignOut}>
            <p>Cerrar Sesión</p>
          </div>

          <div className='userAvatar'>
            <img src='./graphic-3739607_1280.png' />
          </div>

        </div>
      </div>)

  }


}

const HeaderUser = withFirebase(HeaderUserBase);
export default HeaderUser;