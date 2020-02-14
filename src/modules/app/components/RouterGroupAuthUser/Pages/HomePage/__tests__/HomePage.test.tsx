
//Mocks Firebase Class
jest.mock('../../../../../../firebaseApp/firebaseClass');

import React from 'react';
import HomePage from '../HomePage'
import { cleanup, render, fireEvent } from '@testing-library/react';

//React Router Dom
import {BrowserRouter as Router} from 'react-router-dom';

//Firebase mocks imports
import * as mockFirebase from '../../../../../../firebaseApp/__mocks__/firebaseClass';
import * as firebase from '../../../../../../firebaseApp/firebaseClass'; 
import Firebase from '../../../../../../firebaseApp/firebaseClass';
//import Firebase, { AuthUserContext, FirebaseContext, withAuthentication}  from '../../../utils/firebaseApp';
const {mockUserDatabaseRef} = firebase as typeof mockFirebase ; 

//Firebase Imports
import {FirebaseContext, withAuthentication, AuthUserContext} from '../../../../../../firebaseApp';

let mockUserObject = {
    auth: true,
    uid: 'chiquillo',
    email: 'chiquillo@kun',
    user: {
      uid: 'chiquillo'
    }
  }

beforeEach(() => {
    //@ts-ignore
    Firebase.mockClear();
    mockUserDatabaseRef.mockClear();
});

afterEach(cleanup);


const tree =  (
    //@ts-ignore
        <FirebaseContext.Provider value={new Firebase()}> 
            <AuthUserContext.Provider value={mockUserObject as any}>
                <Router>
                    <HomePage/>
                </Router>
            </AuthUserContext.Provider> 
        </FirebaseContext.Provider>
    )


  test("Home Page triggers user firebase's function on click 'Correr' button", () => {
    const {getByText, getByLabelText} = render(tree);
    
    const submitCodeButton = getByText('Correr');
    const leftClick = {button: 0};
    
    fireEvent.click(submitCodeButton, leftClick);
    
    expect(mockUserDatabaseRef.mock.calls.length).toBe(2);

});