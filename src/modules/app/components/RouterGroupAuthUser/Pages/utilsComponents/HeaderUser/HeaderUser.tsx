import React from 'react';
import './HeaderUser.scss';
import * as ROUTES from '../../../constants/routes';
import Firebase, {withFirebase} from '../../utils/firebaseApp';
import {Link, withRouter, RouteComponentProps} from 'react-router-dom';

//Material-UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
 

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      
      flexGrow: 4,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 2,
      textAlign: 'initial'
    },
    
    logoutButton: {
      marginRight: theme.spacing(5),
      backgroundColor: '#ff9933'
    },
    userAvatar: {
        
        flexGrow: 1,
        position: 'relative',
        width: '3rem',
        height: '3rem',
    }

  }),  
);

interface Props extends RouteComponentProps  {
  Firebase : Firebase | null;
}


 
const HeaderUserBase : React.FC<Props> = (props: Props) => {

  const classes = useStyles();
  
  const handleClick = () => {
    
    props.Firebase!.doSignOut().then(() => {
 
      props.history.push(ROUTES.SIGN_IN)
    })
  }
 
    return (

      <div className={classes.header}>
        <AppBar >  
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Código Aventura
            </Typography>
            
            <Button className={classes.logoutButton} color='secondary' variant='contained' onClick={handleClick}>
              Cerrar Sesión
            </Button>

            <div className='userAvatarContainer'>
              <img className={classes.userAvatar} src='http://www.agecefrio.com.br/novo-site/app/icones/cadastro-azul.png' alt='myAvatar' />
            </div> 
             
          </Toolbar>  
        </AppBar> 
      </div>
      )
  }


const HeaderUser = withRouter(withFirebase(HeaderUserBase));
export default HeaderUser;