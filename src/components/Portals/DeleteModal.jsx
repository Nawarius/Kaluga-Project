import React from 'react'
import ReactDOM from 'react-dom'
//import './styles/DeleteModal.css'
import {useState, useEffect} from 'react'

let DeleteModal = (props) => {
		
		let ref = React.createRef()
		
		useEffect (()=>{
			let modal = document.createElement('div')
			document.body.appendChild(modal)
			return ()=> document.body.removeChild(modal)
		},[])
	
        return ReactDOM.createPortal(
            <div className="modal">
                <div class="decor">
				  <div class="form-left-decoration"></div>
				  <div class="form-right-decoration"></div>
				  <div class="circle"></div>
				  <div class="form-inner">
					<h3>Вы уверены, что хотите удалить новость?</h3>
					<button onClick = {()=>{props.delete(props.id,props.onClose)}}>Удалить</button>
             	    <button className="cancelButton" onClick = {props.onClose}>Отмена</button>
				  </div>
				</div>
            </div>,document.querySelector('body'))
        
    }

export default DeleteModal
//<div><textarea ref = {ref}></textarea></div>
//                <div>
//                	<button onClick = {()=>{props.save(ref.current.value)}}>Сохранить</button>
//                	<button className="cancelButton" onClick = {props.onClose}>Отмена</button>
//                </div>