import React from 'react';
import Header from '../utilsComponents/Header/Header'
import SignUpForm from '../utilsComponents/SignUpForm/SignUpForm'

import './SignUpPage.scss';


const SignUpPage = () => {

    return (
        <div className='page'>
            <Header />

            <div className='signUp-page'>


                <div className='greeting'>
                    <div>
                        <p>!Empieza tu aventura aquí!</p>
                    </div>

                    <div>
                        <p>Te espera un viaje que despertará tu potencial.</p>
                    </div>

                </div>

                <div className='signUp-registration'>
                    <SignUpForm />
                </div>


            </div>
        </div>
    )
}

export default SignUpPage;