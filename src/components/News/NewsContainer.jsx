import React from 'react'
import NewsPresent from './NewsPresent'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Preloader from '../Preloader.jsx'
import {getNewsThunkCreator, updateNewsThunkCreator, loadedAC} from '../../redux/reducers/NewsReducer.js'

const NewsContainer = (props) => {
	
	let [isModalOpen, setModalOpen] = useState(false)
		
	const toggleModal = () => setModalOpen(!isModalOpen)
	
	useEffect(()=>{
		props.getNewsThunk()
		return ()=> props.loaded(false)
	},[])
	
	return props.newsPage.isLoaded == false? <Preloader /> : <NewsPresent {...props} toggleModal = {toggleModal} isModalOpen = {isModalOpen} />
}

let mapStateToProps = (state) => {
	return {
		newsPage:state.newsPage
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		getNewsThunk:()=>{
			dispatch(getNewsThunkCreator())
		},
		updateNewsThunk:(text)=>{
			dispatch(updateNewsThunkCreator(text))
		},
		loaded:(bool)=>{
			dispatch(loadedAC(bool))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsContainer)