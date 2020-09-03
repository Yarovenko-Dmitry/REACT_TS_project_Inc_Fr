import React, {useEffect, useState} from 'react';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {
	addNewPackTC,
	deletePackTC,
	getPackOfCardsTC,
	PackType,
	updatePackTC
} from '../../../redux/packs-reducer';
import {Typography, Grid, Button} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import ModalWindow from '../../../common/Modal';
import InputField from '../../../common/InputField';
import FormButton from '../../../common/FormBtn';
import RangeSlider from '../../../common/RangeSlider';
import Pagination from './Pagination';
import TableData from './Table';

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

const Packs = React.memo(function () {
	const classes = useStyles();

	const [localPage, setlocalPage] = useState(1);
	const [localRow, setlocalRow] = useState(4);
	const [newName, setNewName] = useState('');
	const [isOpen, setIsOpen] = useState(false);

	const onChangePage = (newPage: number) => {
		setlocalPage(newPage + 1);
		dispatch(getPackOfCardsTC(newPage + 1, localRow));
	};
	const onChangeRowLength = (row: number) => {
		setlocalRow(row);
		dispatch(getPackOfCardsTC(localPage, row));
	};

	const rows = useSelector<AppRootStateType, PackType[]>(state => state.packsReducer.cardPacks);
	const page = useSelector<AppRootStateType, number>(state => state.packsReducer.page);
	const pageCount = useSelector<AppRootStateType, number>(state => state.packsReducer.pageCount);
	const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packsReducer.cardPacksTotalCount);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPackOfCardsTC(localPage, localRow));
	}, [pageCount, page]);

	const onAddNewPackHandler = () => {
		dispatch(addNewPackTC(newName));
		setIsOpen(false);
	};

	const onDeleteHandler = (id: string) => {
		dispatch(deletePackTC(id));
	};

	const onUpdateHandler = (id: string, name: string) => {
		dispatch(updatePackTC(id, name));
	};

	const handleDialogOpen = () => {
		setIsOpen(true);
	};

	const handleDialogClose = () => {
		setIsOpen(false);
	};

	const tableCell = [
		{name: 'Name', align: 'inherit'},
		{name: 'Card Count', align: 'center'},
		{name: 'Add', align: 'right'},
		{name: 'Delete', align: 'center'},
		{name: 'Modify', align: 'left'},
		{name: 'Updated', align: 'right'},
	];

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
						<Button
							onClick={() => handleDialogOpen()}
							variant="contained"
							color="primary"
							className={classes.button}
							startIcon={<AddBoxIcon/>}
						>
							ADD PACK
						</Button>
						<ModalWindow handleClose={handleDialogClose} isOpen={isOpen} title={'Add' +
						' new pack'}>
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
				<TableData data={rows} onDelete={onDeleteHandler}
				           heading={tableCell} onModify={onUpdateHandler}
				           onAdd={onAddNewPackHandler}/>
			</TableContainer>
			<Pagination count={cardPacksTotalCount} page={page - 1}
			            rowsPerPageOptions={[4, 10, 20]} onChangePage={onChangePage}
			            rowsPerPage={pageCount} onChangeRowsPerPage={onChangeRowLength}/>
		</div>
	);
});
export default Packs;