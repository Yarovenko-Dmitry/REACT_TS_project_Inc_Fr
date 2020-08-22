import React from 'react';
import style from './recoveryPage.module.css';

export const PasswordRecovery = () => {
	return (
		<section>
			<div className={style.container}>
				<div className={style.wrapper}>
					<div className={style.form}>
						<h1>Forgot password?</h1>
						<form>
							<input type="email" required placeholder="Enter your email"/>
							<button className={style.btn}>Send</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

