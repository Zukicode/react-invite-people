import React from 'react';

//Styles
import styles from './Success.module.scss';

//Icon
import successImage from './../../images/success.svg';
import { useDispatch, useSelector } from 'react-redux';
import { removePeople, sendSuccess } from '../../features/user/userSlice';

export const Success = () => {
	const dispatch = useDispatch();
	const { invited } = useSelector(state => state.users);

	const handleClick = () => {
		dispatch(sendSuccess(false));
		// dispatch(removePeople([]));
	};

	return (
		<div className={styles.success}>
			<img src={successImage} alt='success' width='100px' height='100px' />
			<div className={styles.description}>
				<h1>Успішно!</h1>
				<p>{invited.length} користувачам відправлено запрошення!</p>
			</div>
			<button onClick={handleClick}>Назад</button>
		</div>
	);
};
