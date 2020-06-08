import React from 'react';
import ReactDOM from 'react-dom'
import './App.css';
import AppBarContainer from './components/AppBar/AppBarContainer.jsx'
import LoginContainer from './components/Login/LoginContainer.jsx'
import NewsContainer from './components/News/NewsContainer.jsx'
import ProfileContainer from './components/Profile/ProfileContainer.jsx'
import MainContainer from './components/Main/MainContainer.jsx'
import TextRedactorModal from './components/Portals/TextRedactorModal.jsx'
import {Route, Redirect} from 'react-router-dom'


function App() {
	
	
	
	
  return <div>
	  <div className = "appWrapper">
			<AppBarContainer />
			<div><Route path = '/' render = {()=> <MainContainer />} exact/></div>
			<div><Route path = '/profile' render = {()=> <ProfileContainer />} /></div>
			<div><Route path = '/news' render = {()=> <NewsContainer />} /></div>
			<div><Route path = '/login' render = {()=> <LoginContainer />} /></div>
		</div>
  	
  </div>
  
    
}

export default App;