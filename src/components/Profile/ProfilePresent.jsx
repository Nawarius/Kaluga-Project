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
	
	return <div >
			<div><img src = {props.profilePage.avatar} ></img></div>
			<div className = {ProfileStyles.statusInfoWrapper}>
				<div >{props.profilePage.status}</div>
				<div >{info}</div>
			</div>
			<div >{props.profilePage.firstName} {props.profilePage.lastName}</div>
			<div >{posts}</div>
		</div>
	
}

export default ProfilePresent