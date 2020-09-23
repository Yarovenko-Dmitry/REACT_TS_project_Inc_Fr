import React  from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
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

});

type DataType = {
	name: string
	align: any
}

type PropsType = {
	heading: Array<DataType>
	children?: any
}

const TableData = ({heading,children}: PropsType) => {

	const classes = useStyles();

	return (
		<Table className={classes.table} aria-label="simple table">
			<TableHead>
				<TableRow>
					{heading.map((elem,index) => <TableCell key={index} className={classes.heading}
					                                align={elem.align}>{elem.name}</TableCell>
					)}
				</TableRow>
			</TableHead>
			<TableBody>
				{children}
			</TableBody>
		</Table>
	);
};

export default TableData;

