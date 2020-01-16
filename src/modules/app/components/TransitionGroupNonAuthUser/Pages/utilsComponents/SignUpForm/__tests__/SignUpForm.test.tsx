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
//import Firebase, { AuthUserContext, FirebaseContext, withAuthentication}  from '../../../utils/firebaseApp';
const {mockDoCreateUserWithEmailAndPassword} = Firebase as typeof mockFirebase;



beforeEach(() => {
    //@ts-ignore
    firebase.mockClear();
    mockDoCreateUserWithEmailAndPassword.mockClear();
});

afterEach(cleanup);  


//const doCreateUserWithEmailAndPassword = jest.fn((email:string, password:string) => {auth: true}) 

const tree = (
    <FirebaseContext.Provider value={new firebase()}>  
       <Router>
           <SignUpForm />
       </Router>
    </FirebaseContext.Provider>
  )

test('The FormLogin gives proper feedback', () => {
    expect(firebase).not.toHaveBeenCalled();
    const {container , getByText, getByLabelText, debug} = render(tree);
    
    
    const emailInput = getByLabelText('Email o Correo Electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const confirmPassword = getByLabelText('Confirma tu contraseña');
    const submitButton = getByText('Submit');
    const leftClick = {button: 0};
    
    fireEvent.change(emailInput, {target: {value: 'chiquillo@kun.com'}});
    fireEvent.change(passwordInput, {target: {value: '123456'}});
    fireEvent.change(confirmPassword, {target: {value: '123456'}}); 
    fireEvent.click(submitButton, leftClick);
    //expect(firebase).toHaveBeenCalledTimes(1); 
    expect(emailInput).toBeTruthy();
    //@ts-ignore
    expect(mockDoCreateUserWithEmailAndPassword).toBeCalled();

});

