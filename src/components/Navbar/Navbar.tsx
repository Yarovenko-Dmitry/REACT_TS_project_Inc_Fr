import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {
	AppBar,
	Box,
	createStyles,
	Theme,
	Toolbar,
	Typography
} from '@material-ui/core';
import NavbarButton from '../../common/NavbarButton';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		marginAutoItem: {
			margin: 'auto'
		},
		navbar: {
			backgroundColor: '#2c3258'
		},
		btn: {
			margin: theme.spacing(1),
			color: '#e4b61a',
			borderColor: '#e4b61a',
			textDecoration:'none'
		},
	}),
);

const Navbar = () => {
	const classes = useStyles();

	return (
		<AppBar position="static" className={classes.navbar}>
			<Toolbar>
				<Typography variant="h6">
					Cards
				</Typography>
				<Box className={classes.marginAutoItem}>
					<NavbarButton link={'/profile'} name={'Profile'}/>
					<NavbarButton link={'/login'} name={'login'}/>
					<NavbarButton link={'/register'} name={'register'}/>
					<NavbarButton link={'/passwordRecovery'} name={'Recovery'}/>
					<NavbarButton link={'/set-new-password'} name={'New password'}/>
					<NavbarButton link={'/packs'} name={'Packs of cards'}/>
					<NavbarButton link={'/сards'} name={'Сards'}/>
					<NavbarButton link={'/learn'} name={'Learn'}/>
				</Box>
			</Toolbar>
		</AppBar>

	);
};
export default Navbar;

