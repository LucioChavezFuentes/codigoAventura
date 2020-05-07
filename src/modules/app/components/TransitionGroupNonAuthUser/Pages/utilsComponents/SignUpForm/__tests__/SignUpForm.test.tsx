//Mocks Firebase Class
jest.mock('../../../../../../../firebaseApp/firebaseClass');

import React from 'react';
import SignUpForm from '../SignUpForm'
import { cleanup, render, fireEvent } from '@testing-library/react';

//React Router Dom
import {BrowserRouter as Router} from 'react-router-dom';

//Firebase mocks imports
import * as mockFirebase from '../../../../../../../firebaseApp/__mocks__/firebaseClass'; 

//Firebase Imports
import {FirebaseContext} from '../../../../../../../firebaseApp';
import * as Firebase from '../../../../../../../firebaseApp/firebaseClass'; 
import firebase from '../../../../../../../firebaseApp/firebaseClass';
const {mockDoCreateUserWithEmailAndPassword} = Firebase as typeof mockFirebase;

beforeEach(() => {
    //@ts-ignore
    firebase.mockClear();
    mockDoCreateUserWithEmailAndPassword.mockClear();
});

afterEach(cleanup);  

const tree = (
    <FirebaseContext.Provider value={new firebase()}>  
       <Router>
           <SignUpForm />
       </Router>
    </FirebaseContext.Provider>
  )

test("The SignUpForm triggers doCreateUserWithEmailAndPassword firebase's function with valid email and password match", () => {
    const {getByText, getByLabelText} = render(tree);
    
    const emailInput = getByLabelText('Email o Correo Electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const confirmPassword = getByLabelText('Confirma tu contraseña');
    const submitButton = getByText('¡A Programar!');
    const leftClick = {button: 0};
    
    fireEvent.change(emailInput, {target: {value: 'chiquillo@kun.com'}});
    fireEvent.change(passwordInput, {target: {value: '123456'}});
    fireEvent.change(confirmPassword, {target: {value: '123456'}}); 
    fireEvent.click(submitButton, leftClick);
 
    expect(emailInput).toBeTruthy();
    expect(mockDoCreateUserWithEmailAndPassword).toBeCalled();
});

test("The SignUpForm refuse to call doCreateUserWithEmailAndPassword firebase's function when user provides invalid email and password", () => {
    const {getByText, getByLabelText} = render(tree);
    
    const emailInput = getByLabelText('Email o Correo Electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const confirmPassword = getByLabelText('Confirma tu contraseña');
    const submitButton = getByText('¡A Programar!');
    const leftClick = {button: 0};
    
    fireEvent.change(emailInput, {target: {value: 'chiquillo'}});
    fireEvent.change(passwordInput, {target: {value: '123457'}});
    fireEvent.change(confirmPassword, {target: {value: '123456'}}); 
    fireEvent.click(submitButton, leftClick);
     
    expect(emailInput).toBeTruthy();
    expect(mockDoCreateUserWithEmailAndPassword).not.toBeCalled();
});

