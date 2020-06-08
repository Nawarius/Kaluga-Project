import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {combineReducers} from 'redux'
import {profileReducer} from './reducers/ProfileReducer.js'
import {newsReducer} from './reducers/NewsReducer.js'
import {loginReducer} from './reducers/LoginReducer.js'

const reducers = combineReducers({
 	profilePage:profileReducer,
	newsPage:newsReducer,
	login:loginReducer,
	form: formReducer
})

let store = createStore(reducers,applyMiddleware(thunk))

export default store