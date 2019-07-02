import React from 'react';
import { Form} from 'react-bootstrap'

const FormLogin = () => {
    return (
    <Form>
        
        <Form.Group controlId="inputEmail">
            <Form.Label>Email o Correo Electrónico</Form.Label>
            <Form.Control type="email" placeholder="Enter email" size='lg' />

            <Form.Text className="text-muted">
                Jamas compartiríamos tu información con algo o alguién más.
            </Form.Text>

        </Form.Group>
  
        <Form.Group controlId="inputPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Password" size='lg' />
        </Form.Group>
    </Form>
      
    )
    
}

export default FormLogin;
                    