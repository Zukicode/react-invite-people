import React from 'react';

//Styles
import styles from './Button.module.scss';

//Redux
import { sendSuccess } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export const Button = () => {
	const dispatch = useDispatch();
	const { invited } = useSelector(state => state.users);

	const handleClick = () => {
		if (invited.length) dispatch(sendSuccess(true));
	};

	return (
		<button onClick={handleClick} className={styles.send}>
			Відправити запрошення {invited.length ? `(${invited.length})` : ''}
		</button>
	);
};
