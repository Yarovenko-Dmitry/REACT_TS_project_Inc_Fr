import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import s from "./Profile.module.css";
import {Redirect} from "react-router-dom";
import {LoginReducerType, logoutTC} from '../../redux/login-reducer';
import {UsersDataType} from '../../api/api';

export const Profile = () => {

  let internalState: LoginReducerType = {
    isAuth: false,
    userProfile: {
      _id: '',
      email: '',
      name: '',
      avatar: '',
      publicCardPacksCount: 0,
      created: 'YYYY-MM-DD',
      updated: 'YYYY-MM-DD',
      isAdmin: false,
      verified: false,
      rememberMe: false,
      error: '',
    }
  };

  const isAuth = useSelector<AppRootStateType, boolean | undefined>(state => state.login.isAuth);
  const userProfile = useSelector<AppRootStateType, UsersDataType>(state => state.login.userProfile);

  const {email, name, avatar, publicCardPacksCount, created} = userProfile;

  const dispatch = useDispatch()
  if (!isAuth) {
    return <Redirect to={'/login'}/>
  }

  const logoutHandler = () => {
    dispatch(logoutTC())
  }

  return (
    <div className={s.profileBlock}>
      <div className={s.profileHeader}>
        <div className={'container'}>
          <div>Profile {name}</div>
          <div>Profile email {email}</div>
          <div>Profile avatar {avatar}</div>
          <div>Profile publicCardPacksCount {publicCardPacksCount}</div>
          <div>Profile created {created}</div>
          <button type="submit" onClick={logoutHandler}>Log out</button>
        </div>
      </div>
    </div>
  )
}