import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<NavLink to={'/profile'} className={s.btn} activeClassName={s.active}>
				profile
			</NavLink>
			<NavLink to={'/login'} className={s.btn} activeClassName={s.active}>
				login
			</NavLink>
			<NavLink to={'/register'} className={s.btn} activeClassName={s.active}>
				registration
			</NavLink>
			<NavLink to={'/passwordRecovery'} className={s.btn} activeClassName={s.active}>
				recovery
			</NavLink>
			<NavLink to={'/set-new-password'} className={s.btn} activeClassName={s.active}>
				create a new pw
			</NavLink>
		</nav>
	);
};
export default Navbar;

