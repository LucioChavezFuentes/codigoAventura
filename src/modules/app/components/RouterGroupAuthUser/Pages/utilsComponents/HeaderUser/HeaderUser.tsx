import React from 'react';
import './HeaderUser.scss';
import Firebase, {withFirebase} from '../../utils/firebaseApp';
import { withRouter, RouteComponentProps} from 'react-router-dom';

//Material-UI Imports
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
      textAlign: 'initial',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.9rem',
      } 
    },
    
    logoutButton: {
      marginRight: theme.spacing(5),
      backgroundColor: '#ff9933',
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.7rem',
        position: 'relative',
        left: '30px',
      }  
    },
    userAvatar: {
        
        position: 'relative',
        width: '3rem',
        height: '3rem',
    }

  }),  
);

interface Props extends RouteComponentProps  {
  Firebase : Firebase | null;
  isCodeLoading: boolean
}


 
const HeaderUserBase : React.FC<Props> = (props: Props) => {

  const classes = useStyles();

  const handleClick = () => {
    
    props.Firebase!.doSignOut()
  }
 
    return (

      <div className={classes.header}>
        <AppBar >  
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Código Aventura
            </Typography>
            
            <Button className={classes.logoutButton} disabled={props.isCodeLoading}  color='secondary' variant='contained' onClick={handleClick}>
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