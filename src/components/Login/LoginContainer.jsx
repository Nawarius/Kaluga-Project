import React from 'react'
import LoginPresent from './LoginPresent'
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'
import {authThunkCreator} from '../../redux/reducers/LoginReducer.js'
import {useState,useEffect} from 'react'


const access = 'https://media.giphy.com/media/LjzktjnBX95aHUhoG6/giphy.gif'
const refuse = 'https://media0.giphy.com/media/dt6qassLoUgtDCwf3h/source.gif'
const smallPreloader = 'https://itsin.in/images/preloader.gif'

let input = document.createElement('img')

const LoginContainer = (props) => {
	let [loading,setLoading] = useState(false)
	
	useEffect(()=>{	
		if(props.auth) {input.src = access; document.querySelector('.submit').setAttribute('disabled', 'true')}
		if(props.error && !props.auth)  input.src = refuse
	},[props.error,props.auth,loading])

	const whenSubmit = (data) => {
			if(!data.login || !data.password) {alert("Ошибка: одно из полей пустое");return null}
			document.querySelector('.submit').setAttribute('disabled', 'true')
			setLoading(!loading)
			if(!props.auth) {
				document.querySelector('.submitWrapper').appendChild(input)
				input.src = smallPreloader
		}
		
		props.authThunk(data)
	}

	
	return <LoginReduxForm onSubmit = {whenSubmit} />
}

let mapStateToProps = (state) => {
	return {
		auth:state.login.isAuth,
		error:state.login.error,
		loading:state.login.loading,
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		authThunk:(data)=>{
			dispatch(authThunkCreator(data))
		}
	}
}

let LoginReduxForm = reduxForm({
  form: 'login'
})(LoginPresent)

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer)