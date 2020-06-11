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
	
  return <div className = "appWrapper">
			<AppBarContainer />
			<div className="tabcontent">
  				<Route path = '/' render = {()=> <MainContainer />} exact/>
				<Route path = '/profile' render = {()=> <ProfileContainer />} />
 				<Route path = '/news' render = {()=> <NewsContainer />} />
  				<Route path = '/login' render = {()=> <LoginContainer />} />
			</div>

  	
  </div>
  
    
}

export default App;