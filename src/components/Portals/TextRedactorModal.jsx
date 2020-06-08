import React from 'react'
import ReactDOM from 'react-dom'
import './styles/Modal.css'
import {useState, useEffect} from 'react'

let TextRedactorModal = (props) => {
		
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
					<h3>Что нового у вас произошло?</h3>
					<textarea placeholder="Со мною приключилось..." rows="3" ref = {ref}></textarea>
					<button onClick = {()=>{props.save(ref.current.value)}}>Сохранить</button>
             	    <button className="cancelButton" onClick = {props.onClose}>Отмена</button>
				  </div>
				</div>
            </div>,document.getElementById('modal'))
        
    }

export default TextRedactorModal
//<div><textarea ref = {ref}></textarea></div>
//                <div>
//                	<button onClick = {()=>{props.save(ref.current.value)}}>Сохранить</button>
//                	<button className="cancelButton" onClick = {props.onClose}>Отмена</button>
//                </div>