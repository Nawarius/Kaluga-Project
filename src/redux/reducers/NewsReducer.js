import {newsAPI} from '../../API/API.js'

const GET_NEWS= "GET_NEWS"
const LOADED = "LOADED"
const PUT_NEWS = "PUT_NEWS"

const initialState = {
	
 
 allNews:{
     newsArray:[]
 },

	isLoaded:false
}



export const newsReducer = (state = initialState, action) => {
	switch(action.type){
			case GET_NEWS: {
				return {...state, ...action.data }
			}
			case LOADED: {
				return {...state, isLoaded:action.booleanValue}
			}
			case PUT_NEWS: {
				let obj = {news:action.element}
				state.allNews.newsArray.unshift(obj)
				return {...state}
			}
		default:
			return state
	}
}
export let putNewsDataAC = (element) => {return {type:PUT_NEWS, element}}
export let getNewsDataAC = (data) => {return {type:GET_NEWS, data}}
export let loadedAC = (booleanValue) => {return {type:LOADED, booleanValue}}

export const getNewsThunkCreator = () => {
return (dispatch) => {
		newsAPI.getNews().then(response=>{
			dispatch(loadedAC(true))
			dispatch(getNewsDataAC(response.data))
		})
			
  		}
	}	

export const updateNewsThunkCreator = (data) => {
return (dispatch) => {
		dispatch(putNewsDataAC(data))
	}	
}