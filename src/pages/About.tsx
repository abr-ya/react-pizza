import React from 'react';
import styles from './pages.module.scss';
import NumberInputGroup from '../components/NumberInputGroup/NumberInputGroup';

export const About = () => {
	const saveInputHandler = (id: string, quantity: number) => {
		console.log('saveInputHandler:', id, quantity);
	};

	return (
		<div className={`container ${styles.about}`}>
			<h1>About page</h1>
			<p>Пока что это страница для тестирования компонентов.</p>
			<h3>NumberInputGroup</h3>
			<NumberInputGroup
				id='M2'
				numberValue={30}
				saveInputHandler={saveInputHandler}
				max={100}
				multiplicity={1}
			/>
		</div>
	);
}
