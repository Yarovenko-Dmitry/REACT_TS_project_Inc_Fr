import React from 'react';
import {Button, createStyles, Theme} from '@material-ui/core';
import {NavLink} from 'react-router-dom';
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		btn: {
			margin: theme.spacing(1),
			color: '#e4b61a',
			borderColor: '#e4b61a',
			textDecoration:'none'
		},
	}),
);

type PropsType = {
	link: string,
	name: string
}

const NavbarButton = ({link,name}:PropsType) => {

	const classes = useStyles();

	return (
		<NavLink to={link} style={{textDecoration: 'none'}}>
			<Button variant='outlined' className={classes.btn}
			        size={'small'}>{name}</Button>
		</NavLink>
	);
};

export default NavbarButton;
