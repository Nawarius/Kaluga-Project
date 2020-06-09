import React from 'react'
import LoginPresent from './LoginPresent'
import {connect} from 'react-redux'
import { reduxForm } from 'redux-form'
import {authThunkCreator} from '../../redux/reducers/LoginReducer.js'
import {useState,useEffect} from 'react'


const access = 'https://s1.iconbird.com/ico/0912/ILikeButtons3A/w512h5121348753316CuteBallGo.png'
const refuse = 'https://www.juliehyde.com.au/wp-content/uploads/2017/01/red-cross.png'
const smallPreloader = 'https://itsin.in/images/preloader.gif'

let input = document.createElement('img')

const LoginContainer = (props) => {
	let [loading,setLoading] = useState(false)
	
	useEffect(()=>{	
		if(props.auth) {input.src = access; document.querySelector('.submit').setAttribute('disabled', 'true')}
		if(props.error && !props.auth)  input.src = refuse
	},[props.error,props.auth,loading])

	const whenSubmit = (data) => {
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