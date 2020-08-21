import React from "react";
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={`${s.item}`}>
        <NavLink to={'/profile'} activeClassName={s.activLink}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/login'} activeClassName={s.activLink}>Login TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/register'} activeClassName={s.activLink}>Register TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/passwordRecovery'} activeClassName={s.activLink}>PasswordRecovery TS</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to={'/passwordCreation'} activeClassName={s.activLink}>PasswordCreation TS</NavLink>
      </div>

    </nav>
  )
}

export default Navbar;