import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {combineReducers} from 'redux'
import {profileReducer} from './reducers/ProfileReducer.js'


const reducers = combineReducers({
 	profilePage:profileReducer
})

let store = createStore(reducers,applyMiddleware(thunk))

export default store