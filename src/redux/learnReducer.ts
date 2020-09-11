import {Dispatch} from 'redux';
import {authAPI, UsersDataType} from '../api/api';

type learnReducertype = {

}

let internalState: learnReducertype = {

};

const learnReducer = (state: learnReducertype = internalState, action: ActionTypes): learnReducertype => {

    switch (action.type) {

        default:
            return state;
    }
}

const loginAC = (data: UsersDataType) => ({
    type: 'login/SET_USER_DATA',
    data
} as const);



type ActionTypes =
    | ReturnType<typeof loginAC>


export const setLoginTC = (email: string, password: string, rememberMe: boolean = false) => (dispatch: Dispatch<ActionTypes>) => {
    authAPI.login(email, password, rememberMe)
        .then(res => {
                dispatch(loginAC(res.data))
            }
        )
};


export default learnReducer

