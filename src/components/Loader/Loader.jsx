import React from 'react';

//Styles
import styles from './Loader.module.scss';

export const Loader = () => {
	return <div className={styles['lds-dual-ring']}></div>;
};
