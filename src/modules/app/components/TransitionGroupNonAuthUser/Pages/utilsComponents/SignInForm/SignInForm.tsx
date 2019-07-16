import React from 'react';
import { Form, Button, FormControlProps} from 'react-bootstrap'

import './SignInForm.scss'
import Firebase, {withFirebase} from '../../utils/firebaseApp'   
import {withRouter} from 'react-router-dom';


//TODO: make a dir of all interfaces needed in typescript.
interface Props {
    Firebase : Firebase | null
    history : any
}

//cannot setState with dynamic key name, more info: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
interface State {

  [k:string  ]  : string | any
  email: string
  validEmail: boolean
  password: string 
  validForm: boolean  
  

  
  //TODO: investigate the type of error.
  error: any
}

const initialState = {
    
  email: '',
  validEmail: true,
  password: '',
  
  validForm: false,   
  
   
  error: null,
}




class SignInFormBase extends React.Component<Props, State>  {

    state : State = {...initialState}

    isValidFormSubmit = () => {
        const {passwordMatch , validEmail, passwordOne, email} = this.state;
        if(passwordMatch && validEmail) {
            this.setState({ validatedForm: true  })
            this.props.Firebase!.doSingInWithEmailAndPassword(email, passwordOne)
          
           .then((authUser : any)  => {
            this.setState({ ...initialState });
            this.props.history.push('/')
          })
          .catch((error: any) => {
            this.setState({ error });
          });
         
        
        }
    }

    handleSubmit = (event: React.FormEvent<any>) => {
        const form = event.currentTarget;
        const {passwordOne, passwordTwo, email } = this.state;
        
        let doesPasswordMatch : boolean = passwordOne === passwordTwo && (passwordOne.length >= 6) ;
        let isEmailValid : boolean = email.includes("@") &&  email.includes(".com")
    

        
        this.setState({passwordMatch: doesPasswordMatch, validEmail: isEmailValid } , this.isValidFormSubmit ); 
        event.preventDefault();
            
        event.stopPropagation();
        

        if( form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          }
          
          
        

          
      
        

          /*else {
            this.setState({passwordMatch: false, validatedForm: false})
            event.preventDefault();
            event.stopPropagation();
        }*/
    
    } 

    handleClick = () => {

    }
    //TODO: types in reactBootStrap is incomplete, a proper type por event is still missing.; folllow this thread for further information: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
    handleChange = (event : React.FormEvent<FormControlProps>) : void => {
        // Type 'HTMLInputElement' as in event.target; follow this thread for further information: https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript/44321394 
        this.setState({ [(event.target as HTMLInputElement).name ] : (event.target as HTMLInputElement).value }  );  
    };  
 
    //ClassName for Form.Label Component style is 'form-label'
    //You can type 'className' in bootStrap components to style them.
    //Form.Control works as 'input'  you can change to , 'checkbox' , 'textarea' etc, in 'type' property.
    render() {
        const {email,
            validEmail,
        
        password,
        error,
        validForm, 
        
        
    } = this.state;

    const isBlank = email === '' && password === '';
    //The "validated" property in <Form> should only be setted to "true" when all the fields or inputs are valid. 
    //If you set it to true even if the "isInvalid" property in <Form.Control> is true, this will only display the <Form.Control.Feedback type="invalid">
    //but the <Form.Control> will be displayed in greeen. 

    return (
        <div>
            
    <Form onSubmit={this.handleSubmit} noValidate  validated={validForm} className='formComponent'>
        
        <Form.Group controlId="inputEmail">
            <Form.Label className='emailWord'>Email o Correo Electrónico</Form.Label>

            <Form.Control required type="email" size='lg' value={email} name='email' onChange={this.handleChange} isInvalid={!validEmail} />

            

            <Form.Control.Feedback type='invalid'>
                {email === '' ? "Can't be blank" : "Por favor escribe un email válido, uno que tenga '@' y '.com " } 
            </Form.Control.Feedback>
        </Form.Group>



        <Form.Group controlId="inputPassword">
            <Form.Label>Confirma tu contraseña.</Form.Label>
            
            <Form.Control required  type="password"  size='lg' value={password} name='passwordTwo' onChange={this.handleChange} isInvalid={!!error} />

             <Form.Control.Feedback type='invalid'>
                    Contraseña Incorrecta
             </Form.Control.Feedback> 

        </Form.Group>



        <Button className='submit-btn' variant="primary" type='submit' block disabled={isBlank} >
                Submit
        </Button>

        {error && <p className="errorFirebase">{error.message}</p>}

    </Form>


</div>
    )
    
}
}

const SignInForm =  withRouter(withFirebase(SignInFormBase));

export default SignInForm; 