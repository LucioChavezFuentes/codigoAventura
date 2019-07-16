import React from 'react';
import './Header.scss'
import * as ROUTES from '../../../constants/routes'

import { NavLink, withRouter } from 'react-router-dom';

interface Props {
  history: any
  location: any
}



const HeaderBase: React.FC<Props> = ({ location}) => {

  if(location.pathname === ROUTES.LANDING) {

    return (

      <div className="header">
        <div className="leftSection"> 
          <NavLink to={ROUTES.LANDING}> Home </NavLink>
    {/* Check these Links for further implementation 
    <NavLink to='/about' > About </NavLink>
          <NavLink to='/contact'> Contact </NavLink>*/}
          
        </div>
  
        <div className="rightSection">
          <NavLink to='/login'> Log in </NavLink>
          
        </div>
      </div>
          
          )
  
  
} else if (location.pathname === ROUTES.SIGN_UP ) {
    
    return(<div className="header">
              <div className="leftSection"> 
                <NavLink to={ROUTES.LANDING}> Home </NavLink>
              </div>

                <div className="rightSection">
                  <NavLink to='/login'> Log in </NavLink>
                </div>
              </div>)
    
  } else  {

    return(<div className="header">
              <div className="leftSection"> 
                <NavLink to={ROUTES.LANDING}> Home </NavLink>
              </div>

                <div className="rightSection">
                <NavLink to='/register' > Sign Up </NavLink>
                </div>
              </div>)
  }
    
 
}

const Header = withRouter(HeaderBase);

export default Header;

