import React from 'react'
import './styles/profile.css'

const ProfilePresent = (props) => {
	let skills = props.profilePage.profileSkills.skills.map(el=>{
			return <div>{el.skill}</div>	
		})
	let info = props.profilePage.profileInfo.info.map(el=>{
			return <div>
				<div >{el.country}</div>
				<div >{el.city}</div>
				<div >{el.job}</div>
			</div>	
		})
	
	return <div className = "cardWrapp">

		<div className="card">
		  <img src= {props.profilePage.avatar} />
		  <h1>{props.profilePage.firstName} {props.profilePage.lastName}</h1>
		  <div className = "title">STATUS:<div><h2>{props.profilePage.status}</h2></div></div>
			<div className = "title">INFO:<h3>{info}</h3></div>
			<div className = "title">SKILLS:<h2>{skills}</h2></div>
		</div>
		</div>
	
}

export default ProfilePresent

//<div >
//			<div><img src = {props.profilePage.avatar} ></img></div>
//			<div className = {ProfileStyles.statusInfoWrapper}>
//				<div >{props.profilePage.status}</div>
//				<div >{info}</div>
//			</div>
//			<div >{props.profilePage.firstName} {props.profilePage.lastName}</div>
//			<div >{posts}</div>
//		</div>