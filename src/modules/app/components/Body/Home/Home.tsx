import React from 'react';

import './Home.scss';
import FormLogin from '../FormLogin/FormLogin'

const Home = () => {

    return (
        <div className='page'>
            <div className='home-page'> 

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
                    <FormLogin></FormLogin>

                </div>
                
                
            </div>
        </div>

        
    )
}

export default Home;