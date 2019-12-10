import React from 'react';
import SignUpForm from '../SignUpForm'
import { cleanup, render, fireEvent } from '@testing-library/react';

//React Router Dom
import {BrowserRouter as Router} from 'react-router-dom';

//Firebase Imports
import Firebase from '../../../../../../../firebaseApp/firebaseClass';
import { AuthUserContext, FirebaseContext, withAuthentication}  from '../../../utils/firebaseApp';

jest.mock('../../../../../../../firebaseApp/firebaseClass');

beforeEach(() => {
    //@ts-ignore
    Firebase.mockClear();
});

afterEach(cleanup);


const doCreateUserWithEmailAndPassword = jest.fn((email:string, password:string) => {auth: true}) 

const tree = (
    <FirebaseContext.Provider value={new Firebase()}>  
       <Router>
           <SignUpForm />
       </Router>
    </FirebaseContext.Provider>
  )

test('The FormLogin gives proper feedback', () => {
    expect(Firebase).not.toHaveBeenCalled();
    const {container , getByText, getByLabelText} = render(tree);
    
    
    const emailInput = getByLabelText('Email o Correo Electrónico');
    const passwordInput = getByLabelText('Contraseña');
    const confirmPassword = getByLabelText('Confirma tu contraseña');
    const submitButton = getByText('Submit');
    const leftClick = {button: 0};

    fireEvent.change(emailInput, {target: {value: 'chiquillo@kun.com'}});
    fireEvent.change(passwordInput, {target: {value: '123456'}});
    fireEvent.change(confirmPassword, {target: {value: '123456'}});
    fireEvent.click(submitButton, leftClick);
    expect(Firebase).toHaveBeenCalledTimes(1); 
    expect(emailInput).toBeTruthy();
    expect(doCreateUserWithEmailAndPassword.mock.calls.length).toBe(1);

//TODO: Finish this test implementation for FormLogin
})

