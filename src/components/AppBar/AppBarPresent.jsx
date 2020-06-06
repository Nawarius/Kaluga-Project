import React from 'react'
import AppStyles from './styles/styles.module.css'
import {NavLink} from 'react-router-dom'

const AppBarPresent = (props) => {
	return <>
		<nav className = {AppStyles.wrapper}>
			<span><NavLink to = '/main'  className = {AppStyles.item}> Главная </NavLink></span>
			<span><NavLink to = '/news'  className = {AppStyles.item}> Новости </NavLink></span>
			<span><NavLink to = '/profile'  className = {AppStyles.item}> Профиль </NavLink></span>
			<span><NavLink to = '/login'  className = {AppStyles.item}> Логин </NavLink></span>
	
		</nav>
		</>
}

export default AppBarPresent