import React, {useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import {Button, Grid, Typography} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ModalWindow from '../../../common/Modal';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import TableContainer from '@material-ui/core/TableContainer';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import TableData from '../../../common/Table';
import {getCardsTC} from '../../../redux/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {deletePackTC, updatePackTC} from '../../../redux/packs-reducer';
import {Redirect} from 'react-router';

const theme = createMuiTheme();
theme.spacing(2);

const useStyles = makeStyles({
	padding: {
		padding: 0
	},
	button: {
		width: '250px',
		alignContent: 'center',
	},
	margin: {
		marginLeft: theme.spacing(5),
	}
});

const Cards = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getCardsTC('2'));
	}, []);

	const cards = useSelector<AppRootStateType, any>(state => state.cardsReducer.cards);
	const isAuth = useSelector<AppRootStateType, boolean | any>(state => state.login.isAuth);


	const tableCell = [
		{name: 'Question', align: 'inherit'},
		{name: 'Answer', align: 'center'},
		{name: 'Open', align: 'right'},
		{name: 'Delete', align: 'center'},
		{name: 'Modify', align: 'left'},
		{name: 'Updated', align: 'right'},
	];
	const onDeleteHandler = (id: string) => {
		dispatch(deletePackTC(id));
	};

	const onOpenHandler = (id: string) => {
		console.log(id)
	};

	const onUpdateHandler = (id: string, name: string) => {
		dispatch(updatePackTC(id, name));
	};

	console.log(cards);

	if (isAuth) {
		return (
			<div>
				<TableContainer component={Paper}>
					<Grid
						style={{marginTop: theme.spacing(2)}}
						container
						direction="row"
						justify="space-between"
						alignItems="center"
					>
						<Grid item xs={6}>
							<Typography className={classes.margin} variant="h3">Cards</Typography>
						</Grid>
						<Grid item xs={3}>
							<Button
								onClick={() => {
								}}
								variant="contained"
								color="primary"
								className={classes.button}
								startIcon={<AddBoxIcon/>}
							>
								ADD CARD
							</Button>
							<ModalWindow handleClose={() => {
							}} isOpen={false} title={'Add' +
							' new pack'}>
								<form onSubmit={() => {
								}}>
									<Grid container spacing={2}>
										<InputField value={''}
										            type={'text'} label={'Set new name'}
										            onChange={'setNewName'}/>
										<FormButton name={'Send'}/>
									</Grid>
								</form>
							</ModalWindow>
						</Grid>
					</Grid>
					<TableData data={cards} onDelete={onDeleteHandler}
					           heading={tableCell} onModify={onUpdateHandler}
					           onOpen={onOpenHandler}/>
				</TableContainer>
			</div>

		)
	} 	return <Redirect to={'/login'}/>


		;
};

export default Cards;
