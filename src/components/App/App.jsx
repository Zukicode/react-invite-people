import { useEffect } from 'react';

//Styles
import styles from './App.module.scss';

//Components
import { Users } from '../Users/Users';
import { Success } from '../Success/Success';

//Redux
import { getUsers } from '../../features/user/userSlice';
import { useDispatch, useSelector } from 'react-redux';

function App() {
	const dispatch = useDispatch();
	const { isSuccess } = useSelector(state => state.users);

	useEffect(() => {
		dispatch(getUsers());
	}, [dispatch]);

	return (
		<div className={styles.App}>{isSuccess ? <Success /> : <Users />}</div>
	);
}

export default App;
