import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { changeRange } from '../redux/packs-reducer';
import {useDispatch} from 'react-redux';
import FormButton from './FormBtn';
import {Button} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

const useStyles = makeStyles({
	root: {
		width: '80%',
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	button: {
		width: '100px',
		alignContent: 'center',
	},
	slider: {
		marginRight: '30px'
	}
});

type PropsType = {
	minRange: number
	maxRange: number
}

export default function RangeSlider({minRange,maxRange}:PropsType) {
	const classes = useStyles();
	const [value, setValue] = React.useState<number[]>([minRange, maxRange]);

	const dispatch = useDispatch();

	const handleChange = (event: any, newValue: number | number[] | any) => {
		if (newValue) {
			setValue(newValue as number[]);
		}
	};

	const onApplyChangeHandler = () => {
		dispatch(changeRange(value[0],value[1]))
	}

	return (
		<div className={classes.root}>
			<Slider className={classes.slider}
				value={value}
				min={minRange}
				step={5}
				max={maxRange}
				onChange={handleChange}
				aria-labelledby="range-slider"
				valueLabelDisplay="on"
			/>
			<Button
				onClick={onApplyChangeHandler}
				variant="contained"
				color="primary"
				className={classes.button}
			>
				APPLY
			</Button>
		</div>
	);
}