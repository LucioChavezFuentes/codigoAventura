import React from 'react';
import './LandingPage.scss';
import SignUpForm from '../utilsComponents/SignUpForm/SignUpForm';
import Header from '../utilsComponents/Header/Header';

//React Router Dom
import {Link} from 'react-router-dom';

//Material Ui Imports
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const microMobile = 318;

const useStyles = makeStyles((theme :Theme) => 

createStyles({

    landingContent: {

        position: 'relative',
        top: '5rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        //margin: '0 10rem',
        padding: '0 2rem',
        alignItems: 'flex-start',

        [theme.breakpoints.down('sm')]: { 
            padding: '0 1rem'
        },

    },

    landingPaper: {

        [theme.breakpoints.down('xs')]: { 
            width: '100%',
        },

    },

    greetings: {
        padding: '2rem',

        [theme.breakpoints.down('sm')]: { 
            padding: '1rem',
        },

        [theme.breakpoints.down(330)]: { 
            padding: '0.5rem',
        },

        '& .greeting-1': {
            margin: '2rem 0',

            [theme.breakpoints.only('sm')]: { 
                fontSize: '1.9rem',
            },

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1.27rem',
            },

            [theme.breakpoints.down(microMobile)]: { 
                fontSize: '1rem',
            },

            

        },

        '& .cualquiera' : {
            color: '#0099ff'
        },

        '& .greeting-2': {
            margin: '1rem 0',

            [theme.breakpoints.only('sm')]: { 
                fontSize: '1.2rem',
              },
            
            [theme.breakpoints.down('xs')]: { 
                fontSize: '1rem',
              },
            
            [theme.breakpoints.down(microMobile)]: { 
                fontSize: '0.9rem',
            },

        },

        '& .greeting-25': {
            margin: '1rem 0',

            
            [theme.breakpoints.only('sm')]: { 
                fontSize: '1.4rem',
              },

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1.2rem',
              },

            [theme.breakpoints.down(microMobile)]: { 
                fontSize: '1rem',
            },
        },

        '& .greeting-3': {
            margin: '1rem 0',

            [theme.breakpoints.only('sm')]: { 
                fontSize: '1.3rem',
              },
            
            [theme.breakpoints.down('xs')]: { 
                fontSize: '1.1rem',
              },

            [theme.breakpoints.down(microMobile)]: { 
                fontSize: '0.9rem',
            },
        },

        '& .greeting-4': {
            margin: '1rem 0',
            
            [theme.breakpoints.down('xs')]: { 
                position: 'relative',
                bottom: '1rem',
                
              }  
        } 
    },

    greetingFour : { 
        margin: '1rem 0',
        [theme.breakpoints.down('xs')]: { 
            fontSize: '0.7rem'
          } 
    },

    cardLink: {
        '&:hover': {
            color: 'black'
        }
    },

    registration: {
        fontSize: '1.1rem',

        [theme.breakpoints.down('xs')]: {
            position: 'relative',
            top: '2rem',
          },

        [theme.breakpoints.down('sm')]: {
            position: 'relative',
            top: '2rem',
          },

        [theme.breakpoints.down('md')]: {
            position: 'relative',
            top: '2rem', 
          } 
    }
})
)

const LandingPage = () => {

    const classes = useStyles();

    return (
        
        <div className='landing-page'> 
            <Header  />
 
            <div className={classes.landingContent}>

                <Paper elevation={10} className={classes.landingPaper}>
                    <CardContent className={classes.greetings}>
                        <Typography variant='h3' className='greeting-1'>
                            Aprende a programar con Código Aventura
                                                 
                        </Typography >
                            
                        <Typography variant='h3'>
                            ¡<span className='cualquiera'>Cualquiera</span> puede programar! 
                        </Typography>

                        <Typography variant='h5' className='greeting-2'>
                            Es más que una carrera...                      
                        </Typography>

                        <Typography variant='h5' className='greeting-25'>
                            !Es una aventura¡                      
                        </Typography>

                        <Typography variant='h5' className='greeting-3'>
                            Y aprender aquí está papita.                      
                        </Typography> 
                    </CardContent>

                    <Typography variant='subtitle2' className={classes.greetingFour}>
                        ¿Ya tienes cuenta? Entra <Link className={classes.cardLink} to='signin'>aquí.</Link>                       
                    </Typography>
                          
                </Paper>

                <div className={classes.registration}> 
                
                     <SignUpForm />  

                </div>
            </div>

            <div>
               
            </div>
        </div>
    )
}

export default LandingPage;