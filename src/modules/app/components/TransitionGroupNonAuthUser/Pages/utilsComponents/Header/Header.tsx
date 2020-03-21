
import React from 'react';
import './Header.scss';
import * as ROUTES from '../../../constants/routes';

//Material-UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MUILink from '@material-ui/core/Link' 
import { purple } from '@material-ui/core/colors';

//React Router Dom
import {Link, withRouter, RouteComponentProps } from 'react-router-dom';

interface Props extends RouteComponentProps  {
  history: any
  location: any
  match: any
  //TODO: Investigate the withRouter Props Types.
}

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    header: {
      height: '2rem',
      flexGrow: 1,
       
    },

    titleContainer: { 
      flexGrow: 1,
      textAlign: 'start',

    },

    titleLandingPage: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('xs')]: { 
        fontSize: '0.6rem',
      },

      [theme.breakpoints.down(330)]: { 
        fontSize: '0.4rem',
      },
    },
 
    signUpButtonLandingPage: {
      textAlign: 'end',
      textDecoration: 'none',
      [theme.breakpoints.down('xs')]: { 
        fontSize: '0.5rem',
      },

      [theme.breakpoints.down(330)]: { 
        fontSize: '0.4rem',
      } 
      
    },

    signUpButton: {
      textAlign: 'end',
      textDecoration: 'none',
      [theme.breakpoints.down('xs')]: { 
        fontSize: '0.6rem',
      },
    },
    

    loginButton: {
      [theme.breakpoints.down('xs')]: { 
        fontSize: '0.6rem',
      },

      '&:hover': {
        color: 'black' 
      }
    },

    title: {
      [theme.breakpoints.down('xs')]: { 
        fontSize: '0.7rem',
      },

    },

    loginButtonLandingPage: {
      marginRight: theme.spacing(2),
      '&:hover': {
        color: 'black' 
      },
      [theme.breakpoints.down('xs')]: { 
        fontSize: '0.5rem',
      },

      [theme.breakpoints.down(330)]: { 
        fontSize: '0.4rem',
      } 
    }
  })
)

const HeaderBase: React.FC<Props> = ({ location }) => {

  const classes = useStyles(); 

  if (location.pathname === ROUTES.SIGN_IN) {

    return (

      <div className={classes.header}>

        <AppBar>  
          <Toolbar>

            <div className={classes.titleContainer}>
              <Button className={classes.title} component={Link} to={ROUTES.LANDING} color='inherit'>
                Código Aventura  
              </Button>
            </div>
      
            <Button className={classes.signUpButton} component={Link} to={ROUTES.SIGN_UP} color='secondary' variant='contained'>
              Regístrate  
            </Button>
          
          </Toolbar>  
        </AppBar> 
       
      </div>

    )


  } else if (location.pathname === ROUTES.SIGN_UP) {

    return (
    <div className={classes.header}> 

      <AppBar  >  
        <Toolbar>
      
          <div className={classes.titleContainer}>
              <Button className={classes.title} component={Link} to={ROUTES.LANDING} color='inherit'>
                Código Aventura  
              </Button>
            </div>
            
            <Button className={classes.loginButton} component={Link} to={ROUTES.SIGN_IN} color='default' variant='contained'>   
              Iniciar Sesión
            </Button> 
              
          </Toolbar>  
      </AppBar>
    </div>  
  ) 

  } else {

    return (

    <div className={classes.header}> 

      <AppBar  >  
        <Toolbar>
      
          <div className={classes.titleContainer}>
              <Button className={classes.titleLandingPage} component={Link} to={ROUTES.LANDING} color='inherit'>
                Código Aventura  
              </Button>
            </div>
            
            <Button className={classes.loginButtonLandingPage} component={Link} to={ROUTES.SIGN_IN} color='default' variant='contained'>   
              Iniciar Sesión
            </Button> 

            <Button className={classes.signUpButtonLandingPage} component={Link} to={ROUTES.SIGN_UP} color='secondary' variant='contained'>   
              Regístrate 
            </Button> 
              
          </Toolbar>  
      </AppBar>
    </div>  
    )
  }
}

const Header = withRouter(HeaderBase);

export default Header;

