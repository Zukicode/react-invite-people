import React from 'react';

//Styles
import styles from './ListUser.module.scss';

//Components
import { User } from '../User/User';

//Redux
import { useSelector } from 'react-redux';

export const ListUser = () => {
	const { users, search } = useSelector(state => state.users);

	return (
		<div className={styles.ListUser}>
			{users
				.filter(obj => {
					const fullName = obj.first_name + obj.last_name;

					if (
						fullName.toLowerCase().includes(search) ||
						fullName.includes(search) ||
						obj.email.includes(search)
					) {
						return true;
					}

					return false;
				})
				.map(user => (
					<User key={user.id} {...user} />
				))}
		</div>
	);
};
