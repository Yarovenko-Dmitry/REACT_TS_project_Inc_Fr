import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { changeRange } from '../redux/packs-reducer';
import {useDispatch} from 'react-redux';

const useStyles = makeStyles({
	root: {
		width: 150,
	},
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
			dispatch(changeRange(newValue[0],newValue[1]))
		}
		console.log(newValue)
		setValue(newValue as number[]);
	};

	return (
		<div className={classes.root}>
			<Typography id="range-slider" gutterBottom>
				Number of cards
			</Typography>
			<Slider
				value={value}
				min={minRange}
				step={5}
				max={maxRange}
				onChange={handleChange}
				aria-labelledby="range-slider"
				valueLabelDisplay="on"
			/>
		</div>
	);
}