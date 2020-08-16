import React from 'react';
import styles from './pages.module.scss';
import NumberInputGroup from '../components/NumberInputGroup/NumberInputGroup';

export const About = () => {
	const minusClickHandler = () => {
		console.log('minusClickHandler');
	};

	const plusClickHandler = () => {
		console.log('plusClickHandler');
	};

	const saveInputHandler = () => {
		console.log('saveInputHandler');
	};

	return (
		<div className={`container ${styles.about}`}>
			<h1>About page</h1>
			<p>Пока что это страница для тестирования компонентов.</p>
			<h3>NumberInputGroup</h3>
			<NumberInputGroup
				numberValue={30} // значение "сверху"
				minusClickHandler={minusClickHandler}
				plusClickHandler={plusClickHandler}
				saveInputHandler={saveInputHandler}
				max={100}
				multiplicity={1}
			/>
		</div>
	);
}
