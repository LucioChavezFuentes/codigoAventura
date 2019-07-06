import React from 'react';
import { Form, Button, FormControlProps} from 'react-bootstrap'

import './FormLogin.scss'
import Firebase from '../../../../firebaseApp' 


//TODO: make a dir of all interfaces needed in typescript.
interface Props {
    firebase : Firebase | null
}

//cannot setState with dynamic key name, more info: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
interface State {

  [k:string] : string | any
  email: string
  passwordOne: string 
  passwordTwo: string
  
  //TODO: investigate the type of error.
  error: any
}

const initialState = {

  email: '',
  passwordOne: '',
  passwordTwo: '',
  
  error: null,
}


class FormLogin extends React.Component<Props, State>  {

    state : State = {...initialState}

    handleSubmit = () => {

    } 

    handleClick = () => {

    }
    //TODO: types in reactBootStrap is incomplete, a proper type por event is still missing.; folllow this thread for further information: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
    handleChange = (event : React.FormEvent<FormControlProps>) : void => {
        // Type 'HTMLInputElement' as in event.target; follow this thread for further information: https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript/44321394 
        this.setState({ [(event.target as HTMLInputElement).name ] : (event.target as HTMLInputElement).value });  
    };  
 
    //ClassName for Form.Label Component style is 'form-label'
    //You can type 'className' in bootStrap components to style them.
    //Form.Control works as 'input'  you can change to , 'checkbox' , 'textarea' etc, in 'type' property.
    render() {
        const {email,
        passwordOne,
        passwordTwo,
        error
        
    } = this.state;

    const isInvalid = passwordOne === '' || passwordTwo === '' || email === '';

    return (
        <div>
    <Form onSubmit={this.handleSubmit}>
        
        <Form.Group controlId="inputEmail">
            <Form.Label className='emailWord'>Email o Correo Electrónico</Form.Label>

            <Form.Control required type="email" size='lg' value={email} name='email' onChange={this.handleChange} />

            <Form.Text className="text-muted">
                Jamas compartiríamos tu información con algo o alguién más.
            </Form.Text>

            <Form.Control.Feedback type='invalid'>
                {}
            </Form.Control.Feedback>
        </Form.Group>

  
        <Form.Group controlId="inputPasswordOne">
            <Form.Label>Contraseña</Form.Label>
            
            <Form.Control required type="password"  size='lg' value={passwordOne} name='passwordOne' onChange={this.handleChange} />
        </Form.Group>


        <Form.Group controlId="inputPasswordTwo">
            <Form.Label>Confirma tu contraseña.</Form.Label>
            
            <Form.Control required type="password"  size='lg' value={passwordTwo} name='passwordTwo' onChange={this.handleChange} /> 
        </Form.Group>



        <Button className='submit-btn' variant="primary" type='submit' block disabled={isInvalid} >
                Submit
        </Button>

        {error && <p>{error.message}</p>}

    </Form>


</div>
    )
    
}
}

export default FormLogin;
                    