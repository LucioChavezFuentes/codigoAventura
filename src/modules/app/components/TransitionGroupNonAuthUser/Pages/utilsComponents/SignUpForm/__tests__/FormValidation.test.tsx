import React from 'react';

import FormLogin from '../SignUpForm'
import { cleanup, render } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

test('The FormLogin gives proper feedback', () => {
    const {container , getByText} = render(<FormLogin/>)
//TODO: Finish this test implementation for FormLogin
})