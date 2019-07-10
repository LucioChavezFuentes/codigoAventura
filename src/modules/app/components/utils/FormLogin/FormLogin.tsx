import React from 'react';
import { Form, Button, FormControlProps} from 'react-bootstrap'

import './FormLogin.scss'
import Firebase, {withFirebase} from '../../../../firebaseApp' 


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
  validatedForm: boolean  
  passwordMatch: boolean | undefined

  
  //TODO: investigate the type of error.
  error: any
}

const initialState = {
   
  email: '',
  passwordOne: '',
  passwordTwo: '',
  validatedForm: false,  
  passwordMatch: true,
  
  
  error: null,
}




class FormLogin extends React.Component<Props, State>  {

    state : State = {...initialState}

    handleSubmit = (event: React.FormEvent<any>) => {
        const form = event.currentTarget;
        const {passwordOne, passwordTwo, email} = this.state;

        if( form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();

          } 

          this.props.firebase!.doCreateUserWithEmailAndPassword(email, passwordOne).then((authUser : any)  => {
            this.setState({ ...initialState });
          })
          .catch((error: any) => {
            this.setState({ error });
          });
    
        event.preventDefault();
      ;

        if(passwordOne === passwordTwo) {
            this.setState({passwordMatch: true, validatedForm: true})
            
            event.preventDefault();
            event.stopPropagation();
        } else {
            this.setState({passwordMatch: false, validatedForm: false})
            event.preventDefault();
            event.stopPropagation();
        }

        

          //this.setState({ validatedForm: true });    

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
        error,
        validatedForm, 
        passwordMatch
        
    } = this.state;

    const isBlank = passwordOne === '' || passwordTwo === '' || email === '';
    

    return (
        <div>
    <Form onSubmit={this.handleSubmit} noValidate  validated={validatedForm} className='formComponent'>
        
        <Form.Group controlId="inputEmail">
            <Form.Label className='emailWord'>Email o Correo Electrónico</Form.Label>

            <Form.Control required type="email" size='lg' value={email} name='email' onChange={this.handleChange} />

            

            <Form.Control.Feedback type='invalid'>
                {email === '' ? "Can't be blank" : "Please provide a valid email"} 
            </Form.Control.Feedback>
        </Form.Group>

  
        <Form.Group controlId="inputPasswordOne">
            <Form.Label>Contraseña</Form.Label>
            
            <Form.Control required type="password"  size='lg' value={passwordOne} name='passwordOne' onChange={this.handleChange}   />


        </Form.Group>


        <Form.Group controlId="inputPasswordTwo">
            <Form.Label>Confirma tu contraseña.</Form.Label>
            
            <Form.Control required  type="password"  size='lg' value={passwordTwo} name='passwordTwo' onChange={this.handleChange} isInvalid={!passwordMatch} />

             <Form.Control.Feedback type='invalid'>
                    The password does not match!
             </Form.Control.Feedback> 

        </Form.Group>



        <Button className='submit-btn' variant="primary" type='submit' block disabled={isBlank} >
                Submit
        </Button>

        {error && <p>{error.message}</p>}

    </Form>


</div>
    )
    
}
}

export default FormLogin;
                    