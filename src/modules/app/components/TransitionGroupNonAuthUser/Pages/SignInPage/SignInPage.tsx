import React from 'react';
import Header from '../utilsComponents/Header/Header';
import SignInForm from '../utilsComponents/SignInForm/SignInForm';
import './SignInPage.scss';

//React Router Dom
import {Link} from 'react-router-dom';

//Material Ui Imports
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const microMobile = 318;

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        welcomeBack: {
            width: '70%',
            margin: '0 auto',

            [theme.breakpoints.down('xs')]: { 
                width: '80%',
              }
          
        },

        typoH3: {
            marginTop: '2rem',
            marginBottom: '1rem',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1.5rem',
              },
            
              [theme.breakpoints.down(microMobile)]: { 
                fontSize: '1.3rem',
            },
        },

        typoH5: {
            marginTop: '1rem',
            marginBottom: '1.5rem',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1rem',
              },
            
            [theme.breakpoints.down(microMobile)]: { 
                fontSize: '0.8rem',
            },
        },

        typoLink: {
            marginTop: '1rem',
            marginBottom: '1.5rem',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '0.7rem',
                marginBottom: '10px'
              },
            
            [theme.breakpoints.down(microMobile)]: { 
                fontSize: '0.6rem',
            },
        },
        
        cardLink: {
            '&:hover': {
                color: 'black'
            } 
        },

        signInForm: {
            position: 'relative',
            top: '3rem',
        }
    })   
)



const SignInPage = () => {

    const classes = useStyles();

    return(
        <div className='page'>
            <Header/>
            <div className='signIn-page'> 
            
                <Paper elevation={10} className={classes.welcomeBack}>
                     
                    <Typography variant='h3' className={classes.typoH3}> 
                        !Continua tu aventura!
                    </Typography>

                    <Typography variant='h5' className={classes.typoH5}>
                        Sólo tú puedes cambiar tu mundo. 
                    </Typography>

                    <Typography variant='subtitle1' className={classes.typoLink}>
                        ¿No tienes cuenta? Crea una cuenta <Link className={classes.cardLink} to='/signup'>aquí.</Link> 
                    </Typography>
                     
                </Paper>

                <div className={classes.signInForm}>
                
                     <SignInForm />  
            
                </div>
            </div>
        </div>
    ) 
}

export default SignInPage;
