import React from 'react';
import './LandingPage.scss';
import SignUpForm from '../utilsComponents/SignUpForm/SignUpForm';
import Header from '../utilsComponents/Header/Header';

//Material Ui Imports
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';




const LandingPage = () => {

    return (
        
            
        <div className='landing-page'> 
            <Header  />

            <div className='landing-content'>


                <div className='greeting'>
                    <Card>
                        <Typography>
                            !Cualquiera puede programar!                      
                        </Typography>

                        <Typography>
                            Es más que una carrera... Es una aventura.                      
                        </Typography>

                        <Typography>
                            Y aprender aquí está papita.                      
                        </Typography>
                    </Card>
                    
                    <div>
                        <p>!Cualquiera puede programar!</p>
                        <p>Es más que una carrera... Es una aventura.</p>
                    </div>

                    <div>
                    
                        <p>Y aprender aquí está papita.</p>
                    </div>

                </div>

                <div className='registration'>
                
                     <SignUpForm />  
                
                    

                </div>

                </div>
                
                
            </div>
        

        
    )
}

export default LandingPage;