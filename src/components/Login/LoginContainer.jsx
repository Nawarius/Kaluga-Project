import React from 'react'
import LoginPresent from './LoginPresent'
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'
import {authThunkCreator} from '../../redux/reducers/LoginReducer.js'

const LoginContainer = (props) => {
	
	const whenSubmit = (data) => {
		props.auth(data)
	}
	return <LoginReduxForm onSubmit = {whenSubmit} />
}

let mapStateToProps = (state) => {
	return {
		auth:state.login.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		auth:(data)=>{
			dispatch(authThunkCreator(data))
		}
	}
}

let LoginReduxForm = reduxForm({
  form: 'login'
})(LoginPresent)

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)