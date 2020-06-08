import React from 'react'
import TextRedactorModal from '../Portals/TextRedactorModal.jsx'
import './styles/news.css'

const NewsPresent = (props) => {
	
	//debugger;
	const news = props.newsPage.allNews.newsArray.map((el,index)=>{
		return <div>
			<button>Изменить</button><button>Удалить</button>
			<div className = "news"><h1>{el.title}</h1>{el.news}<div><img src = {el.img} /></div></div>
			
		</div>
	})
	
	return <div className = "newsWrapper">
				<button onClick = {props.toggleModal}>Добавить</button>
				{news}
				{props.isModalOpen && <TextRedactorModal onClose = {props.toggleModal} save = {props.updateNewsThunk} />}
  	
		   </div>
}

export default NewsPresent