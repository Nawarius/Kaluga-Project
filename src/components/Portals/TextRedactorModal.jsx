import React from 'react'
import ReactDOM from 'react-dom'
import './styles/TextModal.css'
import {useState, useEffect} from 'react'

let TextRedactorModal = (props) => {
	debugger;
		let ref = React.createRef()
		let titleRef = React.createRef()
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
					<h3>Что нового в мире?</h3>
					<textarea placeholder = "Заголовок" rows="1" ref = {titleRef}></textarea>
					<textarea placeholder="В мире произошло..." rows="3" ref = {ref}></textarea>
					<button onClick = {()=>{props.add(ref.current.value,titleRef.current.value,props.onClose)}}>Сохранить</button>
             	    <button className="cancelButton" onClick = {props.onClose}>Отмена</button>
				  </div>
				</div>
            </div>,document.querySelector('body'))
        
    }

export default TextRedactorModal
//<div><textarea ref = {ref}></textarea></div>
//                <div>
//                	<button onClick = {()=>{props.save(ref.current.value)}}>Сохранить</button>
//                	<button className="cancelButton" onClick = {props.onClose}>Отмена</button>
//                </div>