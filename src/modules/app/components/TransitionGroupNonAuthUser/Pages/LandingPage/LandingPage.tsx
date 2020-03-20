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

const useStyles = makeStyles((theme :Theme) => 

createStyles({

    greetings: {
        padding: '2rem',

        [theme.breakpoints.down('sm')]: { 
            padding: '1rem',
        },

        '& .greetingsContainer': {
            padding: '2rem',
        },

        '& .greeting-1': {
            margin: '2rem 0',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1.2rem',
            },

            [theme.breakpoints.up('sm')]: { 
                fontSize: '1.9rem',
            }
        },

        '& .greeting-2': {
            margin: '1rem 0',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1rem',
              },
            [theme.breakpoints.up('sm')]: { 
                fontSize: '1.2rem',
              },
        },

        '& .greeting-25': {
            margin: '1rem 0',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1rem',
              },
            [theme.breakpoints.up('sm')]: { 
                fontSize: '1.2rem',
              },
        },

        '& .greeting-3': {
            margin: '1rem 0',

            [theme.breakpoints.down('xs')]: { 
                fontSize: '1rem',
              },

              [theme.breakpoints.up('sm')]: { 
                fontSize: '1.3rem',
              }
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
 
            <div className='landing-content'>

                <Paper elevation={10} >
                    <CardContent className={classes.greetings}>
                        <Typography variant='h3' className='greeting-1'>
                            !Cualquiera puede programar!                      
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
        </div>
        
    )
}

export default LandingPage;