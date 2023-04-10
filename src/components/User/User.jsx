import React from 'react';

//Styles
import styles from './User.module.scss';

//Icons
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { invitePeople, removePeople } from '../../features/user/userSlice';
import { isInvited } from '../../utils/utils';

export const User = ({ first_name, last_name, id, avatar, email }) => {
	const dispatch = useDispatch();
	const { users, invited } = useSelector(state => state.users);

	const addToInvited = () => {
		if (users.find(item => item.id === id)) {
			dispatch(
				invitePeople({
					first_name,
					last_name,
					id,
					avatar,
					email,
				})
			);
		}
	};

	const removeFromInvited = () => {
		dispatch(removePeople(invited.filter(item => item.id !== id)));
	};

	return (
		<div className={styles.user}>
			<div className={styles.about}>
				<img src={avatar} alt='profile' width='50px' height='50px' />
				<div className={styles.description}>
					<h1>
						{first_name} {last_name}
					</h1>
					<p>{email}</p>
				</div>
			</div>
			<button>
				{isInvited(invited, id) ? (
					<AiOutlineMinus onClick={removeFromInvited} />
				) : (
					<AiOutlinePlus onClick={addToInvited} />
				)}
			</button>
		</div>
	);
};
