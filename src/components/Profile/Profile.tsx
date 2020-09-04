import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../redux/redux-store";
import {logoutTC} from "../../redux/login-reducer";
import {Redirect} from "react-router-dom";
import s from "./Profile.module.css";
import {UsersDataType} from '../../api/api';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#e4b61a',
    '&:hover': {
      backgroundColor: '#2c3258'
    }
  },
}));

export const Profile = () => {

  const isAuth = useSelector<AppRootStateType, boolean | undefined>(state => state.login.isAuth);
  const userProfile = useSelector<AppRootStateType, UsersDataType>(state => state.login.userProfile);

  const {email, name, avatar, publicCardPacksCount, created} = userProfile;

  const dispatch = useDispatch()
  const classes = useStyles();

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

          <button type="submit" onClick={logoutHandler} className={classes.submit}>Log out</button>
        </div>
        )
      </div>
    </div>
  )
}