import axios from 'axios';

const instance = axios.create({
  withCredentials: true,
  baseURL: 'https://neko-back.herokuapp.com/2.0/',
});

export const mainContent = {
  getPacksOfCards(page: number, count: number, min: number, max: number) {
    return instance.get(`cards/pack?page=${page}&pageCount=${count}&min=${min}&max=${max}`);
  },
  getRangedCards(page: number, count: number, min: number, max: number) {

    return instance.get(`cards/pack?page=${page}&pageCount=${count}&min=${min}&max=${max}`);
  },
  addNewPack(name: string) {
    return instance.post(`cards/pack`, {
      cardsPack: {
        name: name
      }
    });
  },
  deletePack(id: string) {
    return instance.delete(`cards/pack?id=${id}`);
  },
  updatePack(id: string, name: string) {
    return instance.put(
      `cards/pack`,
      {
        cardsPack: {
          _id: id,
          name: name
        }
      });
  },
  getCards(id: string, page: number, row: number) {
    return instance.get(`cards/card?cardsPack_id=${id}&page=${page}&pageCount=${row}`);
  },
  sendCardGrade(cardId: string, grade: number) {
    return instance.put(`cards/grade`, {grade: grade, card_id: cardId});
  },
  addNewCard(id: string, question: string, answer: string) {
    return instance.post(`cards/card`, {
      card: {
        cardsPack_id: id,
        question,
        answer
      }
    });
  },
  deleteCard(id: string) {
    return instance.delete(`cards/card?id=${id}`);
  },
  updateCard(id: string, question: string, answer: string) {
    return instance.put(
      `cards/card`,
      {
        card: {
          _id: id,
          question,
          answer
        }
      });
  },
};

export const passwordRecovery = {
  getToken(email: string) {
    let promise = instance.post(`auth/forgot/`, {
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
    return instance.post(`auth/set-new-password`, {password, resetPasswordToken});
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
      return res.data;
    });
  },
  login(email: string, password: string, rememberMe = false) {
    return instance.post(`auth/login`, {email, password, rememberMe});

  },
  logout() {
    return instance.delete(`auth/me`);
  },
  register(data: RegisterDataType) {

    return instance.post(`auth/register`, {...data});
  }
};

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