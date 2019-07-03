import React from 'react';
import { Form, Button} from 'react-bootstrap'
import './FormLogin.scss'

const FormLogin = () => {
    //ClassName fot Form.Label Component style is 'form-label'
    //You can type 'className' in bootStrap components to style them.
    return (
        <div>
    <Form>
        
        <Form.Group controlId="inputEmail">

            
            <Form.Label className='emailWord'>Email o Correo Electrónico</Form.Label>

            <Form.Control type="email" placeholder="Enter email" size='lg' />

            <Form.Text className="text-muted">
                Jamas compartiríamos tu información con algo o alguién más.
            </Form.Text>

        </Form.Group>
  
        <Form.Group controlId="inputPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" size='lg' />
        </Form.Group>

        <Button className='submit-btn' variant="primary" type='submit' block >
                Submit
        </Button>

    </Form>


</div>
    )
    
}

export default FormLogin;
                    