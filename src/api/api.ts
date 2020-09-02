import axios from 'axios';

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://neko-back.herokuapp.com/2.0',
});

export const mainContent = {
	getPacksOfCards(page:number,row:number) {
		return instance.get(`/cards/pack?page=${page}&pageCount=${row}`);
	},
	getRangedCards(page:number, count:number, min:number, max:number) {
		return instance.get(`/cards/pack?page=${page}&pageCount=${count}&min=${min}&max=${max}`);
	},
	addNewPack(name:string) {
		return instance.post(`/cards/pack`, {
			cardsPack: {
				name: name
			}
		});
	}
};

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
	},
	newPassword(password: string, resetPasswordToken: string) {
		return instance.post(`/auth/set-new-password`, {password, resetPasswordToken});
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
		debugger
		return instance.post(`/auth/register`, {...data});
	}
};

type RegisterDataType = {
	email: string,
	password: string
}