import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://neko-back.herokuapp.com/2.0',
});

export const passwordRecovery = {
	getToken(email: string) {
		let promise = instance.post(`/auth/forgot/`, {
			email,
			from: 'password-reset-server <noreply@noreply.it>',
			message: `
<div style="background-color: lime; padding: 15px">
password recovery link: 
<a href='http://localhost:3000/#/set-new-password/$token$'>link</a>
</div>
`
		});
		return promise;
	}
};


export const profileAPI = {
	getProfile(userId: string) {
		return instance.get(`profile/` + userId);
	},
	getStatus(userId: string) {
		return instance.get(`profile/status/` + userId);
	},
	updateStatus(status: string) {
		return instance.put(`profile/status`, {status: status});
	}
};

export const authAPI = {
	me() {
		return instance.get(`auth/me`);
	},
	login(email: string, password: string, rememberMe = false) {
		return instance.post(`auth/login`, {email, password, rememberMe});
	},
	logout() {
		return instance.delete(`auth/login`);
	},
	register(data: RegisterDataType) {
		return instance.post(`auth/register`, data);
	}
};

type RegisterDataType = {
	email: string,
	password: string
}