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
			<div id="Home" className="tabcontent">
  				<Route path = '/' render = {()=> <MainContainer />} exact/>
			</div>
			<div id="News" className="tabcontent">
				<Route path = '/profile' render = {()=> <ProfileContainer />} />
			</div>
			<div id="Contact" className="tabcontent">
 				<Route path = '/news' render = {()=> <NewsContainer />} />
			</div>
			<div id="About" className="tabcontent">
  				<Route path = '/login' render = {()=> <LoginContainer />} />
			</div>
			




		</div>
  	
  </div>
  
    
}

export default App;