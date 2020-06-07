import React, {useEffect} from 'react'
import ProfilePresent from './ProfilePresent'
import Preloader from '../Preloader.jsx'
import {connect} from 'react-redux'
import {statusAC,getProfileDataThunkCreator} from '../../redux/reducers/ProfileReducer.js'

let mapStateToProps = (state) => {
	return {
		profilePage:state.profilePage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		changeStatus(status){
			dispatch(statusAC(status))
		},
		getProfileThunk(){
			dispatch(getProfileDataThunkCreator())
		}
	}
}

const ProfileContainer = (props) => {
	useEffect(()=>{
		props.getProfileThunk();
	},[])
	
	return props.profilePage.isLoaded == false? <Preloader /> : <ProfilePresent {...props}/>
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)