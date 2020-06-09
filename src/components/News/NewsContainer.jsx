import React from 'react'
import NewsPresent from './NewsPresent'
import {useState, useEffect} from 'react'
import {connect} from 'react-redux'
import Preloader from '../Preloader.jsx'
import {getNewsThunkCreator, addNewsThunkCreator,deleteNewsThunkCreator, updateNewsThunkCreator, loadedAC, changeAreaAC} from '../../redux/reducers/NewsReducer.js'

let currentId = 0;

const NewsContainer = (props) => {
	
	
	
	let [isAddModalOpen, setAddModalOpen] = useState(false)
	let [isDeleteModalOpen, setDeleteModalOpen] = useState(false)	
	let [isChangeModalOpen, setChangeModalOpen] = useState(false)	
	
	const toggleModal = (modalCase, index, text, title) => {
		switch (modalCase) {
			case 'ADD':{
				setAddModalOpen(!isAddModalOpen);
				if(document.body.style.overflow == '') document.body.style.overflow = 'hidden'
				else document.body.style.overflow = ''
				break
			}
			case "DELETE":{
				currentId = index;
				setDeleteModalOpen(!isDeleteModalOpen);
				if(document.body.style.overflow == '') document.body.style.overflow = 'hidden'
				else document.body.style.overflow = ''
				break
			}
			case "CHANGE":{
				currentId = index;
				props.changeArea(text,title);
				setChangeModalOpen(!isChangeModalOpen);
				if(document.body.style.overflow == '') document.body.style.overflow = 'hidden'
				else document.body.style.overflow = ''	
				break
			}
			default:
				return null
		}
		
	}
	const cancelModal = () => {
		setAddModalOpen(false); setDeleteModalOpen(false); setChangeModalOpen(false);
		if(document.body.style.overflow == '') document.body.style.overflow = 'hidden'
		else document.body.style.overflow = ''
	}
	
	useEffect(()=>{
		props.getNewsThunk()
		return ()=> props.loaded(false)
	},[])
	
	return props.newsPage.isLoaded == false? <Preloader /> : <NewsPresent {...props} openValues = {[ isAddModalOpen, isDeleteModalOpen, isChangeModalOpen]} toggleModal = {toggleModal} onClose = {cancelModal} id = {currentId} changeArea = {props.changeArea}/>
}

let mapStateToProps = (state) => {
	return {
		newsPage:state.newsPage,
		currentChanges: {
			currentText:state.newsPage.currentText,
			currentTitle:state.newsPage.currentTitle
		}
	}
}

let mapDispatchToProps = (dispatch) => {
	return {
		getNewsThunk:()=>{
			dispatch(getNewsThunkCreator())
		},
		addNewsThunk:(text,title,cancelModal)=>{
			cancelModal();
			document.body.style.overflow = '';
			dispatch(addNewsThunkCreator(text,title))
		},
		deleteNewsThunk:(id,cancelModal)=>{
			cancelModal();
			document.body.style.overflow = '';
			dispatch(deleteNewsThunkCreator(id))
		},
		updateNewsThunk:(id,text,title,cancelModal)=>{
			cancelModal();
			document.body.style.overflow = '';
			dispatch(updateNewsThunkCreator(id,text,title))
		},
		loaded:(bool)=>{
			dispatch(loadedAC(bool))
		},
		changeArea:(text,title)=>{
			dispatch(changeAreaAC(text,title))
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(NewsContainer)