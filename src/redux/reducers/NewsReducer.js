import {newsAPI} from '../../API/API.js'

const GET_NEWS= "GET_NEWS"
const LOADED = "LOADED"
const ADD_NEWS = "ADD_NEWS"
const UPDATE_NEWS = "UPDATE_NEWS"
const DELETE_NEWS = "DELETE_NEWS"
const CHANGE_AREA = "CHANGE_AREA"
const initialState = {
	
 
 allNews:{
     newsArray:[]
 },

	isLoaded:false,
	currentText:'',
	currentTitle: ''
}



export const newsReducer = (state = initialState, action) => {
	switch(action.type){
			case GET_NEWS: {
				return {...state, ...action.data }
			}
			case LOADED: {
				return {...state, isLoaded:action.booleanValue}
			}
			case ADD_NEWS: {
				let obj = {news:action.text, title:action.title}
				state.allNews.newsArray.unshift(obj)
				return {...state}
			}
			case DELETE_NEWS:{
				let stateCopy = {...state}
				stateCopy.allNews.newsArray.splice(action.id,action.id+1);
				return stateCopy
			}
			case UPDATE_NEWS:{
				let stateCopy = {...state}
				stateCopy.allNews.newsArray[action.id].news = action.text;
				stateCopy.allNews.newsArray[action.id].title = action.title;
				return stateCopy
			}
			case CHANGE_AREA:{
				let stateCopy = {...state}
				stateCopy.currentText = action.text;
				stateCopy.currentTitle = action.title;
				return stateCopy
			}
		default:
			return state
	}
}
export let addNewsDataAC = (text,title) => {return {type:ADD_NEWS, text,title}}
export let getNewsDataAC = (data) => {return {type:GET_NEWS, data}}
export let updateNewsDataAC = (id,text,title) => {return {type:UPDATE_NEWS, id,text,title}}
export let deleteNewsDataAC = (id) => {return {type:DELETE_NEWS, id}}
export let changeAreaAC = (text,title) => {return {type:CHANGE_AREA, text,title}}
export let loadedAC = (booleanValue) => {return {type:LOADED, booleanValue}}

export const getNewsThunkCreator = () => {
return (dispatch) => {
		newsAPI.getNews().then(response=>{
			dispatch(loadedAC(true))
			dispatch(getNewsDataAC(response.data))
		})
			
  		}
	}	

export const addNewsThunkCreator = (text,title) => {
return (dispatch) => {
		dispatch(addNewsDataAC(text,title))
	}	
}
export const updateNewsThunkCreator = (id,text,title) => {
return (dispatch) => {
		dispatch(updateNewsDataAC(id,text,title))
	}	
}
export const deleteNewsThunkCreator = (id) => {
return (dispatch) => {
		dispatch(deleteNewsDataAC(id))
	}	
}