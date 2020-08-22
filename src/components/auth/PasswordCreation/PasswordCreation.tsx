import React from 'react';
import {useParams} from 'react-router-dom';
import style from './passwordCreation.module.css'

export const PasswordCreation = () => {

	const {token} = useParams();

	return (
		<div>
			<div className={style.block}>
				Once I'am back from my short vacation, you will see here nice form with ability to
				reset your password :) But, as of now, enjoy that nice pic :P
			</div>
			<div className={style.img}>
				<img src="https://i.imgflip.com/2n7ils.jpg" alt=""/>
			</div>
		</div>
	);
};

