import React from 'react';

//Styles
import styles from './Search.module.scss';

//Icon
import { BiSearchAlt } from 'react-icons/bi';

//Redux
import { useDispatch, useSelector } from 'react-redux';
import { changeOnPress } from '../../features/user/userSlice';

export const Search = () => {
	const dispatch = useDispatch();
	const { search } = useSelector(state => state.users);

	const onChangeSearch = event => {
		dispatch(changeOnPress(event.target.value));
	};

	return (
		<div className={styles.search}>
			<BiSearchAlt />
			<input
				type='text'
				value={search}
				onChange={onChangeSearch}
				placeholder='Знайти користувача...'
			/>
		</div>
	);
};
