import React from 'react'
import ProfileStyles from './styles/styles.module.css'

const ProfilePresent = (props) => {
	let posts = props.profilePage.profilePosts.posts.map(el=>{
			return <div className = {ProfileStyles.post}>{el.post}</div>	
		})
	let info = props.profilePage.profileInfo.info.map(el=>{
			return <div className = {ProfileStyles.info}>
				<div >{el.country}</div>
				<div >{el.city}</div>
				<div >{el.job}</div>
			</div>	
		})
	
	return <div className = {ProfileStyles.profileWrapper}>
			<div><img src = {props.profilePage.avatar} className = {ProfileStyles.profileAvatar}></img></div>
			<div className = {ProfileStyles.statusInfoWrapper}>
				<div className = {ProfileStyles.profileStatus}>{props.profilePage.status}</div>
				<div className = {ProfileStyles.profileInfo}>{info}</div>
			</div>
			<div className = {ProfileStyles.profileFullname}>{props.profilePage.firstName} {props.profilePage.lastName}</div>
			<div className = {ProfileStyles.profilePosts}>{posts}</div>
		</div>
	
}

export default ProfilePresent