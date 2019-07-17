import React from 'react';
import Header from '../utilsComponents/Header/Header';
import SignInForm from '../utilsComponents/SignInForm/SignInForm';

import './SignInPage.scss';

const SignInPage = () => {
    return(
        <div className='page'>
            <Header/>
            <div className='signIn-page'> 
            

                <div className='welcome-back'>
                    <div>
                        <p>!Continua tu aventura! </p>
                        
                    </div>

                    <div>
                        <p>Sólo tú puedes cambiar tu mundo.</p>
                    </div>

                </div>

                <div className='signIn-registration'>
                
                     <SignInForm />  
                
                    

                </div>
                
                
            </div>


        </div>
    ) 
}

export default SignInPage;
