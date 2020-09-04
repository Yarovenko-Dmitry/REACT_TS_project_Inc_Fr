import React, {useCallback} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {IconButton} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';

const theme = createMuiTheme();
theme.spacing(2);

const useStyles = makeStyles({
	table: {
		minWidth: 650,
	},
	heading: {
		fontWeight: 'bold'
	},
	distance: {
		width: '150px'
	},
	padding: {
		padding: 0
	},
	margin: {
		marginLeft: theme.spacing(5),
	}
});

type DataType = {
	name: string
	align: any
}

type PropsType = {
	data: Array<any>
	heading: Array<DataType>
	onDelete: (id: string) => void
	onModify: (id: string, name: string) => void
	onOpen: (id: string) => void
}

const TableData = ({data, onDelete, onModify, onOpen, heading}: PropsType) => {

	const classes = useStyles();

	const randomColor = useCallback(() => {
		let color = 'rgb(' + Math.round(Math.random() * 255)
			+ ',' + Math.round(Math.random() * 255) + ',' + Math.round(Math.random() * 255) + ')';
		return color;
	}, []);

	const onDeleteHandler = (id: string) => {
		onDelete(id);
	};
	const onModifyHandler = (id: string) => {
		onModify(id, 'asd');
	};
	const onOpenHandler = (id: string) => {
		onOpen(id);
	};

	return (
		<Table className={classes.table} aria-label="simple table">
			<TableHead>
				<TableRow>
					{heading.map(elem => <TableCell className={classes.heading}
					                                align={elem.align}>{elem.name}</TableCell>
					)}
				</TableRow>
			</TableHead>
			<TableBody>
				{data.map((row) => (
					<TableRow key={row._id}>
						<TableCell className={classes.distance} component="th" scope="row">
							{row.name}
						</TableCell>
						<TableCell align="center">{row.cardsCount}</TableCell>
						<TableCell align="right">
							<IconButton style={{color: randomColor()}}
							            onClick={() => onOpenHandler(row._id)}
							            className={classes.padding} aria-label="add">
								<AddBoxIcon fontSize="small"/>
							</IconButton>
						</TableCell>
						<TableCell align="center">
							<IconButton style={{color: randomColor()}}
							            className={classes.padding} aria-label="delete"
							            onClick={() => onDeleteHandler(row._id)}>
								<DeleteIcon fontSize="small"/>
							</IconButton>
						</TableCell>
						<TableCell align="left">
							<IconButton style={{color: randomColor()}}
							            onClick={() => onModifyHandler(row._id)}
							            className={classes.padding} aria-label="modify">
								<AutorenewIcon fontSize="small"/>
							</IconButton>
						</TableCell>
						<TableCell align="right">{row.updated.slice(0, -14)}</TableCell>
					</TableRow>
				))}
			</TableBody>
		</Table>
	);
};

export default TableData;

