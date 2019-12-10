import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignInPage from '../components/TransitionGroupNonAuthUser/Pages/SignInPage/SignInPage';
import HomePage from '../components/RouterGroupAuthUser/Pages/HomePage/HomePage';

//React Testing Library
import { render, fireEvent, cleanup, waitForElement, waitForDomChange } from '@testing-library/react'

//Firebase Imports
import Firebase, { AuthUserContext, FirebaseContext, withAuthentication}  from '../../firebaseApp';

//clean React trees that were mounted with render everytime a test finish.
afterEach(cleanup)


const AppHomeLandingPage =  withAuthentication((props) => {  
    
  return (
    <Router>
      <AuthUserContext.Consumer>
        {authUser => authUser ? <HomePage/> : <SignInPage />}
       </AuthUserContext.Consumer>
    </Router> 
    );
})

const tree = (
  <FirebaseContext.Provider value={new Firebase()}> 
    <AppHomeLandingPage/> 
  </FirebaseContext.Provider>
)

test('Redirect to /home when a user is authenticated from Login Page', async () => {
  const { getByText, getByLabelText } = render(tree)
  expect(getByText('!Continua tu aventura!')).toBeTruthy()

  const leftClick= {button: 0}
  const submitButton = getByText('Submit');
  const usernameInput =  getByLabelText('Email o Correo Electrónico') 
  const passwordInput = getByLabelText('Confirma tu contraseña') 

  fireEvent.change(usernameInput, {target: {value: 'chiquillo@kun.com'}}); 
  fireEvent.change(passwordInput, {target: {value: '123456'}});
  fireEvent.click(submitButton, leftClick);
  
  //getByText('Prográmale aquí chavo con email chiquillo@k
  await waitForElement(() => getByText('Prográmale aquí chavo con email chiquillo@kun.com')); 

  /*
  await waitForElementToBeRemoved(() => 
  queryByText('!Continua tu aventura!') 
)*/
  
  const logoutButton = getByText('Cerrar Sesión');
  
  await waitForDomChange()
    .then(() => {
      fireEvent.click(logoutButton, leftClick); 
    })

  await waitForElement(() => getByText('!Continua tu aventura!'));    
  expect(getByText('!Continua tu aventura!')).toBeTruthy(); 
})  