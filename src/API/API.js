import * as axios from 'axios'

export const profileAPI = {
	getProfileData : () => {
		return axios.get('https://demo7220548.mockable.io/profileData')
	}
}

export const newsAPI = {
	getNews : () => {
		return axios.get('https://demo7220548.mockable.io/news')
    
 }	
//	updateNews : (text) => {
//		return text
//		return axios.put('https://demo7220548.mockable.io/news',{}, {news:text})
//	}
}

export const authAPI = {
	getAuth: () => {
		return axios.get('https://demo7220548.mockable.io/auth')
	}
}

