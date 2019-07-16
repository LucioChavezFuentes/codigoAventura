import React from 'react';

import './Landing.scss';
import SignUpForm from '../utilsComponents/SignUpForm/SignUpForm'
import Header from '../utilsComponents/Header/Header'


const LandingPage = () => {

    return (
        <div className='page'>
            <Header  />
            <div className='landing-page'> 
            

                <div className='greeting'>
                    <div>
                        <p>!Cualquiera puede programar! </p>
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