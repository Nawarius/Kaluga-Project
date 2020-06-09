import React from 'react'
import ReactDOM from 'react-dom'
//import './styles/DeleteModal.css'
import {useState, useEffect} from 'react'

let ChangeModal = (props) => {
		let ref = React.createRef()
		let refTitle = React.createRef()
		
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
					<h3>Изменить можно все...</h3>
					
					<textarea value = {props.currentChanges.currentTitle}  onChange = {()=>{props.changeArea(ref.current.value, refTitle.current.value)}} rows="1" ref = {refTitle}></textarea>
					
					<textarea value = {props.currentChanges.currentText} 
						onChange = {()=>{props.changeArea(ref.current.value, refTitle.current.value)}} rows="3" ref = {ref}>
					</textarea>
					
					<button onClick = {()=>{props.update(props.id,props.currentChanges.currentText, props.currentChanges.currentTitle,props.onClose)}}>Изменить</button>
            	    
             	    <button className="cancelButton" onClick = {props.onClose}>Отмена</button>
				  </div>
				</div>
            </div>,document.querySelector('body'))
        
    }

export default ChangeModal
