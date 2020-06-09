import React from 'react'
import TextRedactorModal from '../Portals/TextRedactorModal.jsx'
import DeleteModal from '../Portals/DeleteModal.jsx'
import ChangeModal from '../Portals/ChangeModal.jsx'

import './styles/news.css'

const NewsPresent = (props) => {
	
	const news = props.newsPage.allNews.newsArray.map((el,index)=>{
		return <div>
			<div className = "news"><h1>{el.title}</h1>{el.news}<div><img src = {el.img} /></div></div>
			<button onClick = {()=>{props.toggleModal('CHANGE',index,el.news,el.title)}}>Изменить</button>
			<button onClick = {()=>{props.toggleModal('DELETE',index)}}>Удалить</button>
			
		</div>
	})
	
return <div className = "newsWrapper">
		<button onClick = {()=>{props.toggleModal('ADD')}}>Добавить</button>
			{news}
			{props.openValues[0] && <TextRedactorModal add = {props.addNewsThunk} onClose = {props.onClose}/>}
			{props.openValues[1] && <DeleteModal onClose = {props.onClose} id = {props.id} delete = {props.deleteNewsThunk}/>}
  			{props.openValues[2] && <ChangeModal onClose = {props.onClose} id = {props.id} text = {props.text} update = {props.updateNewsThunk} changeArea = {props.changeArea} currentChanges = {props.currentChanges} />}
	</div>
}

export default NewsPresent