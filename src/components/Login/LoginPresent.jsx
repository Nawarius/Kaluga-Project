import React from 'react'
import { Field } from 'redux-form'
import './styles/login.css'
//import 'materialize-css/dist/css/materialize.min.css'

const LoginPresent = (props) => {
	return <div className = "loginWrapper">
 		<form onSubmit = {props.handleSubmit} className = 'form'>
			<div><Field placeholder = "Enter your login" component = "input" name = "login" /></div>
		   <div> <Field placeholder = "Enter your password" component = "input" name = "password" /></div>
		   <button className = 'submit' >Submit</button>
		</form>
        
	</div>
}

export default LoginPresent
