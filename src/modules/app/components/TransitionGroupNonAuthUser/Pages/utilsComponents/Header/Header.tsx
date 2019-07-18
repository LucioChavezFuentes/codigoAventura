import React from 'react';
import './Header.scss'
import * as ROUTES from '../../../constants/routes'

import { NavLink, withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps  {
  history: any
  location: any
  match: any
  //TODO: Investigate the withRouter Props Types.
}



const HeaderBase: React.FC<Props> = ({ location }) => {

  if (location.pathname === ROUTES.SIGN_IN) {

    return (

      <div className="header">
        <div className="leftSection">
          <NavLink to={ROUTES.LANDING}>Código Aventura</NavLink>
        </div>

        <div className="rightSection">
          <NavLink to={ROUTES.SIGN_UP}>Resgístrate</NavLink>
        </div>
      </div>

    )


  } else if (location.pathname === ROUTES.SIGN_UP) {

    return (<div className="header">
      <div className="leftSection">
        <NavLink to={ROUTES.LANDING}>Código Aventura</NavLink>
      </div>

      <div className="rightSection">
        <NavLink to={ROUTES.SIGN_IN}>Iniciar Sesión</NavLink>
      </div>
    </div>)

  } else {

    return (<div className="header">
      <div className="leftSection">
        <NavLink to={ROUTES.LANDING}>Código Aventura</NavLink>
        {/* Check these Links for further implementation
          <NavLink to='/about' > About </NavLink>
                <NavLink to='/contact'> Contact </NavLink>*/}

      </div>

      <div className="rightSection">
        <NavLink to={ROUTES.SIGN_IN}>Iniciar Sesión</NavLink>
        <NavLink to={ROUTES.SIGN_UP}>Resgístrate</NavLink>

      </div>
    </div>)
  }


}

const Header = withRouter(HeaderBase);

export default Header;

