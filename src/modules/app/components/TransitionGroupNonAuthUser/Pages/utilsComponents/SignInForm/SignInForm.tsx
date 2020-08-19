import React from 'react';
import { Form, Button, FormControlProps } from 'react-bootstrap'
import * as ROUTES from '../../../constants/routes';
import './SignInForm.scss'
import Firebase, { withFirebase } from '../../utils/firebaseApp'
import { withRouter, RouteComponentProps } from 'react-router-dom';

//TODO: make a dir of all interfaces needed in typescript.
interface Props extends RouteComponentProps {
	Firebase: Firebase | null
}

//cannot setState with dynamic key name, more info: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/26635
interface State {
	[k: string]: string | any
	email: string
	validEmail: boolean
	password: string
	validForm: boolean
	//TODO: investigate the type of error.
	error: any,
	loading: boolean
}

const initialState = {
	email: '',
	validEmail: true,
	password: '',
	validForm: false,
	error: null,
	loading: false
}

class SignInFormBase extends React.Component<Props, State>  {

	state: State = { ...initialState }

	isValidFormSubmit = () => {
		const { validEmail, password, email } = this.state;
		if (validEmail) {
			this.setState({ validatedForm: true })
			this.props.Firebase!.doSignInWithEmailAndPassword(email, password)

				.then((authUser: any) => {
					this.setState({ ...initialState });
					this.props.history.push(ROUTES.HOME) 
				})
				.catch((error: any) => {
					this.setState({ error, loading: false });
				});
		} else {
			this.setState({loading: false})
		}
	}

	handleSubmit = (event: React.FormEvent<any>) => {
		this.setState({loading: true}) 
		const form = event.currentTarget;
		const { email } = this.state;

		//let doesPasswordMatch : boolean = passwordOne === passwordTwo && (passwordOne.length >= 6) ;
		let isEmailValid: boolean = email.includes("@") && email.includes(".com");

		this.setState({ validEmail: isEmailValid }, this.isValidFormSubmit);

		event.preventDefault();
		event.stopPropagation();


		if (form.checkValidity() === false) {
			event.preventDefault();
			event.stopPropagation();
		}
	}

	handleClick = () => {

	}
	//TODO: types in reactBootStrap is incomplete, a proper type por event is still missing.; folllow this thread for further information: https://github.com/DefinitelyTyped/DefinitelyTyped/issues/16208
	handleChange = (event: React.FormEvent<FormControlProps>): void => {
		// Type 'HTMLInputElement' as in event.target; follow this thread for further information: https://stackoverflow.com/questions/44321326/property-value-does-not-exist-on-type-eventtarget-in-typescript/44321394
		this.setState({ [(event.target as HTMLInputElement).name]: (event.target as HTMLInputElement).value });
	};

	//ClassName for Form.Label Component style is 'form-label'
	//You can type 'className' in bootStrap components to style them.
	//Form.Control works as 'input'  you can change to , 'checkbox' , 'textarea' etc, in 'type' property.
	render() {
		const { email,
			validEmail,
			password,
			error,
			validForm,
			loading
		} = this.state;

		//The "validated" property in <Form> should only be setted to "true" when all the fields or inputs are valid.
		//If you set it to true even if the "isInvalid" property in <Form.Control> is true, this will only display the <Form.Control.Feedback type="invalid">
		//but the <Form.Control> will be displayed in greeen.
		let authError = error ? error.code === "auth/user-not-found" : null; 
		let passwordError = error ? error.code === "auth/wrong-password" : null;
		let emailBlank = email === '';

		return (
			<div className='signInFormContainer'>

			<Form onSubmit={this.handleSubmit} noValidate validated={validForm} className='formComponent'>

				<Form.Group controlId="inputEmail">
					<Form.Label className='emailWord'>Email o Correo Electrónico</Form.Label>

					<Form.Control required type="email" size='lg' value={email} name='email' onChange={this.handleChange} isInvalid={!validEmail} />

					<Form.Control.Feedback type='invalid'>
						{emailBlank ? "Can't be blank" : 
							authError ?
							"El usuario no coincide con los registros, por favor revisa e inténtalo de nuevo." :
							"Por favor escribe un email válido, uno que tenga '@' y '.com "}
					</Form.Control.Feedback>
				</Form.Group>

				<Form.Group controlId="inputPassword">
					<Form.Label>Contraseña</Form.Label>

					<Form.Control required type="password" size='lg' value={password} name='password' onChange={this.handleChange} />

				</Form.Group>

				<Button className='submit-btn' variant="primary" type='submit' block disabled={loading} >
					¡A Programar!
				</Button>

				{authError || passwordError ? 
					<p style={{color: 'red', marginTop: '10px'}}>El correo electrónio o la cantreseña no coinciden con nuestros registros, por favor revisa e inténtalo de nuevo.</p> :
						''} 

			</Form>
			</div>
		)
	}
}

const SignInForm = withRouter(withFirebase(SignInFormBase));

export default SignInForm;