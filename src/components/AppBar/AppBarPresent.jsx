import React from 'react'
import AppStyles from './styles/AppBar.css'
import {NavLink} from 'react-router-dom'
//import {openPage} from './script.js'

const AppBarPresent = (props) => {
	return <>
		<nav className = "appBarWrapper">
			<NavLink to = '/'><button className="tablink" >Главная</button></NavLink>
			<NavLink to = '/news'  ><button className="tablink" >Новости</button></NavLink>
			<NavLink to = '/profile'  ><button className="tablink" >Профиль</button></NavLink>
			<NavLink to = '/login'  ><button className="tablink" >Логин</button></NavLink>
		</nav>
		</>
}

export default AppBarPresent

//<div><NavLink to = '/'  ><button> Главная </button></NavLink></div>
//			<div><NavLink to = '/news'  ><button> Новости </button></NavLink></div>
//			<div><NavLink to = '/profile'  ><button> Профиль </button></NavLink></div>
//			<div><NavLink to = '/login'  ><button> Логин </button></NavLink></div>