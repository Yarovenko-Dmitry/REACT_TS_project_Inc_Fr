import React from 'react';
import TablePagination from '@material-ui/core/TablePagination';
import {createMuiTheme, makeStyles} from '@material-ui/core/styles';

const theme = createMuiTheme();
theme.spacing(2);
const useStyles = makeStyles({
	pagination: {
		display: 'flex',
		justifyContent: 'center',
		marginTop: '20px'
	}
});

type PropsType = {
	count: number
	page: number
	rowsPerPageOptions: Array<number>
	onChangePage: (value: number) => void
	onChangeRowsPerPage: (value:number) => void
	rowsPerPage: number
}

const Pagination = ({
	count,
	page,
	rowsPerPageOptions,
	onChangePage,
	rowsPerPage,
	onChangeRowsPerPage
}: PropsType) => {

	const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null,
		newPage: number) => {
		onChangePage(newPage)
	};

	const handleChangeRowsPerPage = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		onChangeRowsPerPage(+event.target.value);
	};

	const classes = useStyles();

	return (
		<div>
			<TablePagination
				className={classes.pagination}
				component="div"
				count={count}
				page={page}
				rowsPerPageOptions={rowsPerPageOptions}
				onChangePage={handleChangePage}
				rowsPerPage={rowsPerPage}
				onChangeRowsPerPage={handleChangeRowsPerPage}
			/>
		</div>
	);
};

export default Pagination;
