import {profileAPI} from '../../API/API.js'

const STATUS = "STATUS"
const GET_PROFILE = "GET_PROFILE"
const LOADED = "LOADED"

const initialState = {
	firstName:null,
	lastName:null,
	status:null,
	avatar:null,
	isLoaded:false,
	profilePosts: {posts:[]},
	profileInfo: {info:[]}
}



export const profileReducer = (state = initialState, action) => {
	switch(action.type){
		case GET_PROFILE: {
			return {...state, ...action.data}
		}
			case LOADED: {
				return {...state, isLoaded:action.booleanValue}
			}
		default:
			return state
	}
}

export let statusAC = (status) => {return {type:STATUS}}
export let getProfileDataAC = (data) => {return {type:GET_PROFILE, data}}
export let loadedAC = (booleanValue) => {return {type:LOADED, booleanValue}}

export const getProfileDataThunkCreator = () => {
return (dispatch) => {
		profileAPI.getProfileData().then(response=>{
			//debugger;
			dispatch(loadedAC(true))
			dispatch(getProfileDataAC(response.data))
  		})
	}	
}