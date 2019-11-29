import React from 'react';
import Header from '../utilsComponents/Header/Header'
import SignUpForm from '../utilsComponents/SignUpForm/SignUpForm'

import './SignUpPage.scss';

//React Router Dom
import {Link} from 'react-router-dom';

//Material Ui Imports
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        greeting: {
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

const SignUpPage = () => {

    const classes = useStyles();

    return (
        <div className='page'>
            <Header />

            <div className='signUp-page'>

            <Paper elevation={10} className={classes.greeting}>
                     
                    <Typography variant='h3' className={classes.typoH3}> 
                    !   Empieza tu aventura aquí!
                    </Typography>

                    <Typography variant='h5' className={classes.typoH5}>
                        Te espera un viaje que despertará tu potencial. 
                    </Typography>

                    <Typography variant='subtitle1' className={classes.typoLink}>
                        ¿Ya tienes cuenta? Inicia continua <Link className={classes.cardLink} to='/signin'>aquí.</Link> 
                    </Typography>
                     
            </Paper>

                <div className='signUp-registration'>
                    <SignUpForm />
                </div>

            </div>
        </div>
    )
}

export default SignUpPage;