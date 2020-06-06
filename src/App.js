import React from 'react';
import './App.css';
import AppBarContainer from './components/AppBar/AppBarContainer.jsx'
import LoginContainer from './components/Login/LoginContainer.jsx'
import NewsContainer from './components/News/NewsContainer.jsx'
import ProfileContainer from './components/Profile/ProfileContainer.jsx'
import MainContainer from './components/Main/MainContainer.jsx'
import {Route, Redirect} from 'react-router-dom'

function App() {
  return <div className = "appWrapper">
  	<AppBarContainer />
		<div><Route path = '/main' render = {()=> <MainContainer />} /></div>
		<div><Route path = '/profile' render = {()=> <ProfileContainer />} /></div>
		<div><Route path = '/news' render = {()=> <NewsContainer />} /></div>
		<div><Route path = '/login' render = {()=> <LoginContainer />} /></div>
		<Redirect from = '/' to = '/main' />
  	</div>
  
    
}

export default App;