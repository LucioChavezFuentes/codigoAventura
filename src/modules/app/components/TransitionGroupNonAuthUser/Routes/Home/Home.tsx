import React from 'react';

import './Home.scss';
import FormLogin from './HomeComponents/FormLogin/FormLogin'
import Header from './HomeComponents/Header/Header'


const Home = () => {

    return (
        <div className='page'>
            <Header inCourse={true} />
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
                
                     <FormLogin /> 
                
                    

                </div>
                
                
            </div>
        </div>

        
    )
}

export default Home;