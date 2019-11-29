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


const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        welcomeBack: {
            width: '50%',
            margin: '0 auto'
          
        },

        typoH3: {
            marginTop: '2rem',
            marginBottom: '1rem' 
        },

        typoH5: {
            marginTop: '1rem',
            marginBottom: '1.5rem' 
        },

        typoLink: {
            marginTop: '1rem',
            marginBottom: '1.5rem' 
        },
        
        cardLink: {
            '&:hover': {
                color: 'black'
            } 
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

                <div className='signIn-registration'>
                
                     <SignInForm />  
            
                </div>
            </div>
        </div>
    ) 
}

export default SignInPage;
