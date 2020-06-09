import React, {useEffect} from 'react'
import ProfilePresent from './ProfilePresent'
import Preloader from '../Preloader.jsx'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {statusAC,getProfileDataThunkCreator,loadedAC} from '../../redux/reducers/ProfileReducer.js'



const ProfileContainer = (props) => {
	
	useEffect(()=>{
		props.getProfileThunk();
		return ()=>props.loaded(false)
	},[])
	
	if(!props.auth) return <Redirect to = "/login" />
	return props.profilePage.isLoaded == false? <Preloader /> : <ProfilePresent {...props}/>
}

let mapStateToProps = (state) => {
	return {
		profilePage:state.profilePage,
		auth:state.login.isAuth
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		changeStatus(status){
			dispatch(statusAC(status))
		},
		getProfileThunk(){
			dispatch(getProfileDataThunkCreator())
		},
		loaded:(bool)=>{
			dispatch(loadedAC(bool))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)