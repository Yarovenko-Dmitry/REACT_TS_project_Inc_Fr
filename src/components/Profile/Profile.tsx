import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import loginReducer, {authMeTC, LoginReducerType} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";
import s from "./Profile.module.css";


export const Profile = () => {

    const dispatch = useDispatch();
    const authState = useSelector<AppRootStateType, LoginReducerType>(state => state.login);
    const {isAuth, userProfile} = authState;


    useEffect(() => {
        dispatch(authMeTC());
    }, [dispatch])

    // if (!isAuth) {
    //     return <Redirect to={'/login'}/>
    // }


    return (
        <div className={s.profileBlock}>
            <div className={s.profileHeader}>
                <div className={'container'}>
                    <div className={s.profileHeader__title}>Profile</div>
                    <div className={s.profileHeader__link} >Logout</div>
                </div>
            </div>

            <div className={'container'}>
                <div className={s.profileContent}>

                </div>
            </div>
        </div>
    )
}