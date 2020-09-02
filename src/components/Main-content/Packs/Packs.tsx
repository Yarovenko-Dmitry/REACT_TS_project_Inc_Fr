import React, {forwardRef, useEffect} from 'react';
import MaterialTable, {Column, Icons} from 'material-table';
import AddBox from '@material-ui/icons/AddBox';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import {ArrowUpward} from '@material-ui/icons';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from '../../../redux/redux-store';
import {getPackOfCardsTC, PackType} from '../../../redux/packs-reducer';

const tableIcons: Icons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref}/>),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref}/>),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref}/>),
	DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref}/>),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref}/>),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref}/>),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref}/>),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref}/>),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref}/>),
	PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref}/>),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref}/>),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref}/>),
	SortArrow: forwardRef((props, ref) => <ArrowUpward {...props} ref={ref}/>),
	ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref}/>),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref}/>)
};

interface Row {
	name: string;
	surname: string;
	birthYear: number;
	birthCity: number;
}

interface TableState {
	columns: any;
}

export default function MaterialTableDemo() {
	const [state, setState] = React.useState<TableState>({
		columns: [
			{title: 'Name', field: 'name'},
			{title: 'Updated', field: 'updated'},
			{title: 'Cards count', field: 'cardsCount', type: 'numeric'},
		],
	});

	const rows = useSelector<AppRootStateType, PackType[]>(state => state.packsReducer.cardPacks);
	const page = useSelector<AppRootStateType, number>(state => state.packsReducer.page);
	const pageCount = useSelector<AppRootStateType, number>(state => state.packsReducer.pageCount);
	const cardPacksTotalCount = useSelector<AppRootStateType, number>(state => state.packsReducer.cardPacksTotalCount);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPackOfCardsTC());
	}, []);

	console.log(rows, page, pageCount);

	return (
		<MaterialTable
			icons={tableIcons}
			title="Pack of cards"
			columns={state.columns}
			data={rows}
			page={page}
			options={{
				pageSize: 4
			}}
			totalCount={cardPacksTotalCount}
			// editable={{
			// 	onRowAdd: (newData:any) =>
			// 		new Promise((resolve) => {
			// 			setTimeout(() => {
			// 				resolve();
			// 				setState((prevState) => {
			// 					const data = [...prevState.data];
			// 					data.push(newData);
			// 					return { ...prevState, data };
			// 				});
			// 			}, 600);
			// 		}),
			// 	onRowUpdate: (newData:any, oldData:any) =>
			// 		new Promise((resolve) => {
			// 			setTimeout(() => {
			// 				resolve();
			// 				if (oldData) {
			// 					setState((prevState) => {
			// 						const data = [...prevState.data];
			// 						data[data.indexOf(oldData)] = newData;
			// 						return { ...prevState, data };
			// 					});
			// 				}
			// 			}, 600);
			// 		}),
			// 	onRowDelete: (oldData:any) =>
			// 		new Promise((resolve) => {
			// 			setTimeout(() => {
			// 				resolve();
			// 				setState((prevState) => {
			// 					const data = [...prevState.data];
			// 					data.splice(data.indexOf(oldData), 1);
			// 					return { ...prevState, data };
			// 				});
			// 			}, 600);
			// 		}),
			// }}
		/>
	);
}