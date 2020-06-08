import {authAPI} from '../../API/API.js'

const AUTH = "AUTH"

const initialState = {
	login:null,
	password:null,
	isAuth:false
}



export const loginReducer = (state = initialState, action) => {
	switch(action.type){
			case AUTH: {
				alert("Done")
				return {...state, ...action.data, isAuth:true}
			}
		default:
			return state
	}
}

export let authAC = (data) => {return {type:AUTH, data }}

export const authThunkCreator = (userData) => {
return (dispatch) => {
			authAPI.getAuth().then(response=>{
				if(response.data.login == userData.login && response.data.password == userData.password){
					dispatch(authAC(response.data))
				}
			})
  		}
}	
