import React, {useCallback, useEffect, useState} from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {addNewPackTC, getPackOfCardsTC, PackType} from '../../../redux/packs-reducer';
import TablePagination from '@material-ui/core/TablePagination';
import {IconButton, Typography, Grid} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import ModalWindow from '../../../common/Modal';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import RangeSlider from '../../../common/RangeSlider';

const theme = createMuiTheme();

theme.spacing(2); // = 8 * 2

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	heading: {
		fontWeight: 'bold'
	},
	pagination: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '20px'
	},
	distance: {
		width: '150px'
	},
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

const Packs = React.memo(function () {
	const classes = useStyles();

	const [localPage, setlocalPage] = useState(1);
	const [localRow, setlocalRow] = useState(4);
	const [newName, setNewName] = useState('');

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number) => {
		setlocalPage(newPage);
		dispatch(getPackOfCardsTC(newPage, localRow));
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setlocalRow(+event.target.value);
		dispatch(getPackOfCardsTC(localPage, +event.target.value));
	};

	const rows = useSelector<AppRootStateType, PackType[]>(state => state.packsReducer.cardPacks);
	const page = useSelector<AppRootStateType, number>(state => state.packsReducer.page);
	const pageCount = useSelector<AppRootStateType, number>(state => state.packsReducer.pageCount);
	const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packsReducer.cardPacksTotalCount);
	const minRange = useSelector<AppRootStateType, number>(state => state.packsReducer.minCardsCount);
	const maxRange = useSelector<AppRootStateType, number>(state => state.packsReducer.maxCardsCount);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPackOfCardsTC(localPage, localRow));
	}, [pageCount, page]);

	const randomColor = useCallback(() => {
		let color = 'rgb(' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
		return color
	},[]);


	const onAddNewPackHandler = () => {
		dispatch(addNewPackTC(newName));
	};

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
						<Typography className={classes.margin} variant="h3">Packs</Typography>
					</Grid>
					<Grid item xs={3}>
						<RangeSlider maxRange={20} minRange={0}/>
					</Grid>
					<Grid item xs={3}>
						<ModalWindow>
							<Typography style={{padding: theme.spacing(2)}} component="h3"
							            variant="h3">
								Add new pack
							</Typography>
							<form onSubmit={onAddNewPackHandler}>
								<Grid container spacing={2}>
									<InputField value={newName}
									            type={'text'} label={'Set new name'}
									            onChange={setNewName}/>
									<FormButton name={'Send'}/>
								</Grid>
							</form>
						</ModalWindow>
					</Grid>
				</Grid>
				<Table className={classes.table} aria-label="simple table">
					<TableHead>
						<TableRow>
							<TableCell className={classes.heading}>Name</TableCell>
							<TableCell className={classes.heading} align="center">Cards
								Count</TableCell>
							<TableCell className={classes.heading} align="right">Add</TableCell>
							<TableCell className={classes.heading} align="center">Delete</TableCell>
							<TableCell className={classes.heading} align="left">Modify</TableCell>
							<TableCell className={classes.heading} align="right">Updated</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{rows.map((row) => (
							<TableRow key={row._id}>
								<TableCell className={classes.distance} component="th" scope="row">
									{row.name}
								</TableCell>
								<TableCell align="center">{row.cardsCount}</TableCell>
								<TableCell align="right">
									<IconButton style={{color: randomColor()}}
									            className={classes.padding} aria-label="add">
										<AddBoxIcon fontSize="small"/>
									</IconButton>
								</TableCell>
								<TableCell align="center">
									<IconButton style={{color: randomColor()}}
									            className={classes.padding} aria-label="delete">
										<DeleteIcon fontSize="small"/>
									</IconButton>
								</TableCell>
								<TableCell align="left">
									<IconButton style={{color: randomColor()}}
									            className={classes.padding} aria-label="modify">
										<AutorenewIcon fontSize="small"/>
									</IconButton>
								</TableCell>
								<TableCell align="right">{row.updated.slice(0, -14)}</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
			<TablePagination
				className={classes.pagination}
				component="div"
				count={cardPacksTotalCount}
				page={page}
				rowsPerPageOptions={[4, 10, 20]}
				onChangePage={handleChangePage}
				rowsPerPage={pageCount}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
});
export default Packs;