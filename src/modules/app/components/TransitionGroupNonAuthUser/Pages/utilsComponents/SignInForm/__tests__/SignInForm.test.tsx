//Mocks Firebase Class
jest.mock('../../../../../../../firebaseApp/firebaseClass');

import React from 'react';
import SignInForm from '../SignInForm'
import { cleanup, render, fireEvent } from '@testing-library/react';

//React Router Dom
import {BrowserRouter as Router} from 'react-router-dom';

//Firebase mocks imports
import * as mockFirebase from '../../../../../../../firebaseApp/__mocks__/firebaseClass'; 

//Firebase Imports
import {FirebaseContext} from '../../../../../../../firebaseApp';
import * as Firebase from '../../../../../../../firebaseApp/firebaseClass'; 
import firebase from '../../../../../../../firebaseApp/firebaseClass';
//import Firebase, { AuthUserContext, FirebaseContext, withAuthentication}  from '../../../utils/firebaseApp';
const {mockDoSignInWithEmailAndPassword} = Firebase as typeof mockFirebase;

beforeEach(() => {
    //@ts-ignore
    firebase.mockClear();
    mockDoSignInWithEmailAndPassword.mockClear();
});

afterEach(cleanup);  


//const doCreateUserWithEmailAndPassword = jest.fn((email:string, password:string) => {auth: true}) 

const tree = (
    <FirebaseContext.Provider value={new firebase()}>  
       <Router>
           <SignInForm />
       </Router>
    </FirebaseContext.Provider>
  )

test("SignInForm triggers doSignInWithEmailAndPassword firebase's function with valid email and password match", () => {
    const {getByText, getByLabelText} = render(tree);
    
    const emailInput = getByLabelText('Email o Correo Electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const submitButton = getByText('Submit');
    const leftClick = {button: 0};
    
    fireEvent.change(emailInput, {target: {value: 'chiquillo@kun.com'}});
    fireEvent.change(passwordInput, {target: {value: '123456'}});
    fireEvent.click(submitButton, leftClick);
    //expect(firebase).toHaveBeenCalledTimes(1); 
    expect(emailInput).toBeTruthy();
    //@ts-ignore
    expect(mockDoSignInWithEmailAndPassword).toBeCalled();

});

test("SignInForm refuse to call doSignInWithEmailAndPassword firebase's function when user provides invalid email", () => {
    const {getByText, getByLabelText} = render(tree);
    
    const emailInput = getByLabelText('Email o Correo Electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const submitButton = getByText('Submit');
    const leftClick = {button: 0};
    
    fireEvent.change(emailInput, {target: {value: 'chiquillo'}});
    fireEvent.change(passwordInput, {target: {value: '123457'}});
    fireEvent.click(submitButton, leftClick);
    expect(emailInput).toBeTruthy();
    
    expect(mockDoSignInWithEmailAndPassword.mock.calls.length).toBe(0);
});