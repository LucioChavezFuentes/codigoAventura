import React from 'react';

import './Home.scss';
import FormLogin from '../../utils/FormLogin/FormLogin'
import Header from '../../utils/Header/Header'
import {FirebaseContext} from '../../../../firebaseApp'

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
                <FirebaseContext.Consumer>
                    {firebase => <FormLogin firebase={firebase} /> }
                </FirebaseContext.Consumer>
                    

                </div>
                
                
            </div>
        </div>

        
    )
}

export default Home;