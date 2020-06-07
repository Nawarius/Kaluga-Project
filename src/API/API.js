import * as axios from 'axios'

export const profileAPI = {
	getProfileData : () => {
		return axios.get('http://demo7220548.mockable.io/profileData')
	}
}

