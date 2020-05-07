import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import SignInPage from '../components/TransitionGroupNonAuthUser/Pages/SignInPage/SignInPage';
import SignUpPage from '../components/TransitionGroupNonAuthUser/Pages/SignUpPage/SignUpPage';
import HomePage from '../components/RouterGroupAuthUser/Pages/HomePage/HomePage';

//React Testing Library
import { render, fireEvent, cleanup, waitForElement, waitForDomChange, wait } from '@testing-library/react'

//Firebase Context Imports, always import from index,not from firebase class in tests, otherwise the mock import will disable de context functionality.
//Firebase Non-Mocking Imports
import { AuthUserContext, FirebaseContext, withAuthentication}  from '../../firebaseApp';

//Firebase the mocking class imports
import * as mockFirebase from '../../firebaseApp/__mocks__/firebaseClass'; 

//Firebase Imports as object to make a explicit type in Typescript and import the mock functions from mockFirebase Class.
//Firebase Imports to mock.
import * as  firebase from '../../firebaseApp/firebaseClass';
import Firebase from '../../firebaseApp/firebaseClass';

//import Firebase, { AuthUserContext, FirebaseContext, withAuthentication}  from '../../../utils/firebaseApp';
const {mockDoCreateUserWithEmailAndPassword, mockOnAuthStateChanged } = firebase as typeof mockFirebase;

beforeEach(() => {
  //@ts-ignore
  Firebase.mockClear();
  //TODO: Wrap mockDoCreateUserWithEmailAndPassword in a jest.fn() in .../__mocks__/firebaseClass.tsx in line 67.
  mockDoCreateUserWithEmailAndPassword.mockClear();
  mockOnAuthStateChanged.mockClear();
});

//clean React trees that were mounted with render everytime a test finish.
afterEach(cleanup)

//Mocks Firebase Class
jest.mock('../../firebaseApp/firebaseClass');


const AppHomeSignInPage =  withAuthentication((props) => {  
    
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
    <AppHomeSignInPage/>
  </FirebaseContext.Provider>
)

test('Redirect to /home when a user is authenticated from Login Page', async () => { 
  const { getByText, getByLabelText, debug } = render(tree)
  expect(getByText('!Continua tu aventura!')).toBeTruthy()

  const leftClick= {button: 0}
  const submitButton = getByText('¡A Programar!');
  const usernameInput =  getByLabelText('Email o Correo Electrónico');
  const passwordInput = getByLabelText('Contraseña');

  fireEvent.change(usernameInput, {target: {value: 'chiquillo@kun.com'}});
  fireEvent.change(passwordInput, {target: {value: '123456'}});
  fireEvent.click(submitButton, leftClick);
  
  //expect(mockOnAuthStateChanged.mock.calls.length).toBe(2); 
  
  await waitForElement(() => getByText('Prográmale aquí chavo con email chiquillo@kun.com'));
  expect(getByText('Prográmale aquí chavo con email chiquillo@kun.com')).toBeTruthy();
  /*
  await waitForElementToBeRemoved(() => 
  queryByText('!Continua tu aventura!') 
)*/
  
  
  const logoutButton = getByText('Cerrar Sesión');
  
  fireEvent.click(logoutButton, leftClick); 
    

  await waitForElement(() => getByText('!Continua tu aventura!'));    
  expect(getByText('!Continua tu aventura!')).toBeTruthy(); 
});


const AppHomeSignUpPage =  withAuthentication((props) => {  
    
  return (
    <Router>
      <AuthUserContext.Consumer>
        {authUser => authUser ? <HomePage/> : <SignUpPage />}
       </AuthUserContext.Consumer>
    </Router> 
    );
})

const treeSignUp = (
  <FirebaseContext.Provider value={new Firebase()}>
    <AppHomeSignUpPage/>
  </FirebaseContext.Provider>
)



test('Redirect to /home when a user is authenticated from SignUp Page', async () => {
  const { getByText, getByLabelText, debug } = render(treeSignUp)

  expect(getByText('!Empieza tu aventura aquí!')).toBeTruthy()

  const leftClick= {button: 0}
  const submitButton = getByText('¡A Programar!');
  const usernameInput =  getByLabelText('Email o Correo Electrónico');
  const passwordInput = getByLabelText('Contraseña');
  const confirmPasswordInput = getByLabelText('Confirma tu contraseña');

  fireEvent.change(usernameInput, {target: {value: 'chiquillo@kun.com'}}); 
  fireEvent.change(passwordInput, {target: {value: '123456'}});
  fireEvent.change(confirmPasswordInput, {target: {value: '123456'}});
  fireEvent.click(submitButton, leftClick);
  
  //expect(mockOnAuthStateChanged.mock.calls.length).toBe(2); 
  
  await waitForElement(() => getByText('Prográmale aquí chavo con email chiquillo@kun.com'));
  expect(getByText('Prográmale aquí chavo con email chiquillo@kun.com')).toBeTruthy();
  /*
  await waitForElementToBeRemoved(() => 
  queryByText('!Continua tu aventura!') 
)*/
  
  
  const logoutButton = getByText('Cerrar Sesión');
  
  fireEvent.click(logoutButton, leftClick); 
    

  await waitForElement(() => getByText('!Empieza tu aventura aquí!'));    
  expect(getByText('!Empieza tu aventura aquí!')).toBeTruthy();
})