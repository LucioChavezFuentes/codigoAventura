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

const microMobile = 318;

const useStyles = makeStyles((theme:Theme) => 
    createStyles({
        greeting: {
            width: '70%',
            margin: '0 auto',

            [theme.breakpoints.down('xs')]: { 
                width: '90%',
              }
          
        },

        typoH3: {
            marginTop: '2rem',
            marginBottom: '1rem',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1.3rem',
              },

            [theme.breakpoints.only('sm')]: { 
                fontSize: '1.7rem',
              },
            
            [theme.breakpoints.down(microMobile)]: { 
                fontSize: '1.23rem',
              } 
        },

        typoH5: {
            marginTop: '1rem',
            marginBottom: '1.5rem',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '0.7rem',
              },
            [theme.breakpoints.only('sm')]: { 
                fontSize: '1rem',
              } 
        },

        typoLink: {
            marginTop: '1rem',
            marginBottom: '1.5rem',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '0.7rem',
                marginBottom: '10px',
              }  
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
                    !Empieza tu aventura aquí!
                    </Typography>

                    <Typography variant='h5' className={classes.typoH5}>
                        Te espera un viaje que despertará tu potencial. 
                    </Typography>

                    <Typography variant='subtitle1' className={classes.typoLink}>
                        ¿Ya tienes cuenta? Continua <Link className={classes.cardLink} to='/signin'>aquí.</Link> 
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