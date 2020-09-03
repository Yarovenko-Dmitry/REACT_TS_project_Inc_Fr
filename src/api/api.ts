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
    },
    newPassword(password: string, resetPasswordToken: string) {
        return instance.post(`/auth/set-new-password`, {password, resetPasswordToken})
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

        return instance.post<UsersDataType>(`auth/me`).then((res) => {
            return res.data
        })
    },
    login(email: string, password: string, rememberMe = false) {
        return instance.post(`auth/login`, {email, password, rememberMe});
    },
    logout() {
        return instance.delete(`auth/login`);
    },
    register(data: RegisterDataType) {

        return instance.post(`/auth/register`, {...data});
    }
}
export const cardsAPI = {
    getCards() {
        return instance.get<CardDataType>(`cards/card?cardsPack_id=5f21d2768c14693614f843d0`)
    }
}
type RegisterDataType = {
    email: string,
    password: string
}
export type UsersDataType = {
    _id: string;
    email: string | undefined;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод

    created: any;
    updated: any;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;

    error: string;
}
export type CardDataType = {
    cards: Array<CardsType>,
    cardsTotalCount?: number,
    maxGrade?: number,
    minGrade?: number,
    page?: number,
    pageCount?: number
}
export type CardsType = {
    answer: string,
    question: string,
    cardsPack_id: string,
    grade: number,
    rating: number,
    shots: number,
    type: string,
    created: string,
    updated: string,
    __v: number,
    _id: string,
}