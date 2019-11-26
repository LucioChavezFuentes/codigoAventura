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
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme :Theme) => 

createStyles({

     greetings: {
        padding: '2rem',

        '& .greetingsContainer': {
            padding: '2rem'
        },

        '& .greeting-1': {
            margin: '2rem 0'
        },

        '& .greeting-2': {
            margin: '1rem 0'
        },

        '& .greeting-3': {
            margin: '1rem 0'
        }
     },
})
)

const LandingPage = () => {

    const classes = useStyles();

    return (
        
            
        <div className='landing-page'> 
            <Header  />
 
            <div className='landing-content'>

                <Paper>
                    <CardContent className={classes.greetings}>
                        <Typography variant='h3' className='greeting-1'>
                            !Cualquiera puede programar!                      
                        </Typography>

                        <Typography variant='h5' className='greeting-2'>
                            Es más que una carrera... Es una aventura.                      
                        </Typography>

                        <Typography variant='h5' className='greeting-3'>
                            Y aprender aquí está papita.                      
                        </Typography> 
                    </CardContent>

                    <Typography variant='subtitle2' className='greeting-2'>
                        ¿Ya tienes cuenta? Entra <Link to='signin'>aquí</Link>                      
                    </Typography>
                         
                </Paper>

                

                <div className='registration'>
                
                     <SignUpForm />  

                </div>

                </div>
                
            </div>
        
    )
}

export default LandingPage;