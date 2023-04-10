import React from 'react';

//Styles
import styles from './Users.module.scss';

//Components
import { Search } from '../Search/Search';
import { ListUser } from '../ListUser/ListUser';
import { Button } from '../Button/Button';
import { Loader } from '../Loader/Loader';

//Redux
import { useSelector } from 'react-redux';

export const Users = () => {
	const { status } = useSelector(state => state.users);

	if (status === 'loading') {
		return (
			<div className={styles.users}>
				<Search />
				<Loader />
				<Button />
			</div>
		);
	}

	return (
		<div className={styles.users}>
			<Search />
			<ListUser />
			<Button />
		</div>
	);
};
