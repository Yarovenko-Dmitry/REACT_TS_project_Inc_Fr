import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<NavLink to={'/profile'} className={s.btn} activeClassName={s.activLink}>
				profile
			</NavLink>
			<NavLink to={'/login'} className={s.btn} activeClassName={s.activLink}>
				login
			</NavLink>
			<NavLink to={'/register'} className={s.btn} activeClassName={s.activLink}>
				registration
			</NavLink>
			<NavLink to={'/passwordRecovery'} className={s.btn} activeClassName={s.activLink}>
				recovery
			</NavLink>
			<NavLink to={'/passwordCreation'} className={s.btn} activeClassName={s.activLink}>
				create a new pw
			</NavLink>
		</nav>
	);
};
export default Navbar;

