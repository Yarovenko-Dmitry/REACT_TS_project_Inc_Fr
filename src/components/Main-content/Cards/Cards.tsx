import React, {useEffect, useState} from 'react';
import Paper from '@material-ui/core/Paper';
import {Button, Grid, Typography} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ModalWindow from '../../../common/Modal';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import TableContainer from '@material-ui/core/TableContainer';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import TableData from '../../../common/Table';
import {CardType, getNewPageTC, addNewCardTC} from '../../../redux/cards-reducer';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Pagination from '../../../common/Pagination';
import { Redirect } from 'react-router-dom';

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
	},
	distance: {
		width: '150px'
	},
});

const Cards = () => {
	const classes = useStyles();
	const dispatch = useDispatch();

	const state = useSelector<AppRootStateType, any>(state => state.cardsReducer);
	const isAuth = useSelector<AppRootStateType, boolean | any>(state => state.login.isAuth);
	const {cards, cardsTotalCount, page, pageCount,id} = state;

	const [localPage, setlocalPage] = useState(1);
	const [localRow, setlocalRow] = useState(4);
	const [question, setQuestion] = useState('');
	const [answer, setAnswer] = useState('');
	const [isOpen, setIsOpen] = useState(false);


	const handleDialogOpen = () => {
		setIsOpen(true);
	};

	const handleDialogClose = () => {
		setIsOpen(false);
	};

	const onAddNewPackHandler = () => {
		dispatch(addNewCardTC(question, answer));
		setIsOpen(false);
	};

	const onChangePage = (newPage: number) => {
		setlocalPage(newPage + 1);
		dispatch(getNewPageTC(newPage + 1, localRow))
	};
	const onChangeRowLength = (row: number) => {
		setlocalRow(row);
		dispatch(getNewPageTC(localPage, row));
	};

	const tableCell = [
		{name: 'Question', align: 'inherit'},
		{name: 'Answer', align: 'center'},
		{name: 'Grade', align: 'center'},
		{name: 'Updated', align: 'right'},
	];

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
								onClick={() => handleDialogOpen()}
								variant="contained"
								color="primary"
								className={classes.button}
								startIcon={<AddBoxIcon/>}
							>
								ADD CARD
							</Button>
						</Grid>
					</Grid>
					<TableData  heading={tableCell}>
						{cards.map((row:CardType) => (
							<TableRow key={row._id}>
								<TableCell className={classes.distance} component="th" scope="row">
									{row.question}
								</TableCell>
								<TableCell align="center">{row.answer}</TableCell>
								<TableCell align="center">{row.grade}</TableCell>
								<TableCell align="right">{row.updated.slice(0, -14)}</TableCell>
							</TableRow>
						))}
					</TableData>
				</TableContainer>
				<Pagination count={cardsTotalCount} page={page - 1}
				            rowsPerPageOptions={[4, 10, 20]} onChangePage={onChangePage}
				            rowsPerPage={pageCount} onChangeRowsPerPage={onChangeRowLength}/>
				<ModalWindow handleClose={() => handleDialogClose()} isOpen={isOpen} title={'Add' +
				' new card'}>
					<form onSubmit={() => onAddNewPackHandler()}>
						<Grid container spacing={2}>
							<InputField value={question}
							            type={'text'} label={'Enter question'}
							            onChange={setQuestion}/>
				            <InputField value={answer}
							            type={'text'} label={'Enter answer'}
							            onChange={setAnswer}/>
							<FormButton name={'Send'}/>
						</Grid>
					</form>
				</ModalWindow>
			</div>

		)
	} 	return <Redirect to={'/login'}/>


		;
};

export default Cards;
