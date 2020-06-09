import {authAPI} from '../../API/API.js'

const AUTH = "AUTH"
const ERROR = "ERROR"

const initialState = {
	login:null,
	password:null,
	isAuth:false,
	error:false
}



export const loginReducer = (state = initialState, action) => {
	switch(action.type){
			case AUTH: {
				return {...state, ...action.data, isAuth:true}
			}
			case ERROR:{
				return {...state, error:true}
			}
		default:
			return state
	}
}

export let authAC = (data) => {return {type:AUTH, data }}
export let errorAC = () => {return {type:ERROR,  }}
export const authThunkCreator = (userData) => {
return (dispatch) => {
			authAPI.getAuth().then(response=>{
				if(response.data.login == userData.login && response.data.password == userData.password){
					dispatch(authAC(response.data))
				}
				else {
					document.querySelector('.submit').removeAttribute('disabled');
					dispatch(errorAC())
				}
			})
  		}
}	
