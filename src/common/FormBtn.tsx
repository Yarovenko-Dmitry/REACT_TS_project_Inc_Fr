import React from 'react';
import Button from '@material-ui/core/Button';
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


type PropsType = {
	disable?: boolean
	name: string
}

const FormButton = ({disable,name}:PropsType) => {

	const classes = useStyles();

	return (
		<Button
			type="submit"
			fullWidth
			variant="contained"
			color="primary"
			className={classes.submit}
			disabled={disable}
		>
			{name}
		</Button>
	);
};

export default FormButton;
