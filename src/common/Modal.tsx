import React from 'react';
import {makeStyles, Theme, createStyles, createMuiTheme} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {Button, DialogActions, Typography} from '@material-ui/core';

const theme = createMuiTheme();

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		modal: {
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'center',
		},
		paper: {
			backgroundColor: theme.palette.background.paper,
			border: '2px solid #000',
			boxShadow: theme.shadows[5],
			padding: theme.spacing(2, 4, 3),
		},
		button: {
			width: '250px',
			alignContent: 'center',

		},
	}),
);

type PropsType = {
	isOpen: boolean
	handleClose: () => void
	title?: string
	children?: any
}

export default function ModalWindow({isOpen,handleClose,title,children}:PropsType) {
	const classes = useStyles();

	function onClose() {
		handleClose()
	}

	return (
		<div>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				className={classes.modal}
				open={isOpen}
				onClose={onClose}
				closeAfterTransition
				BackdropComponent={Backdrop}
				BackdropProps={{
					timeout: 500,
				}}
			>
				<Fade in={isOpen}>
					<div className={classes.paper}>
						<DialogActions>
							<Button onClick={() => onClose()} color='primary'>Close</Button>
						</DialogActions>
						<Typography style={{padding: theme.spacing(2)}} component="h3"
						            variant="h3">
							{title}
						</Typography>
						{children}
					</div>
				</Fade>
			</Modal>
		</div>
	);
}
