import React from 'react';
import { Form, Button} from 'react-bootstrap'

import './FormLogin.scss'
import Firebase from '../../../../firebaseApp' 

//TODO: make a dir of all interfaces needed in typescript.
interface Props {
    firebase : Firebase | null
}

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
    //types in reactBootStrap is incomplete, a proper type por event is still missing.
    handleChange = (event : React.FormEvent<any>) : void => {
        this.setState({ [event.currentTarget.name] : event.currentTarget.value });  
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
            
            <Form.Control required type="password"  size='lg' value={passwordOne} name='passwordOne' />
        </Form.Group>


        <Form.Group controlId="inputPasswordTwo">
            <Form.Label>Confirma tu contraseña.</Form.Label>
            
            <Form.Control required type="password"  size='lg' value={passwordTwo} name='passwordTwo' />
        </Form.Group>



        <Button className='submit-btn' variant="primary" type='submit' block >
                Submit
        </Button>

        {error && <p>{error.message}</p>}

    </Form>


</div>
    )
    
}
}

export default FormLogin;
                    