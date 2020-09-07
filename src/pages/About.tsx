import React from 'react';
import styles from './pages.module.scss';
import NumberInputGroup from '../components/NumberInputGroup/NumberInputGroup';

interface IAbout {
	showAlert: () => void;
	setAlert: (alert: any) => void;
}

export const About = ({showAlert, setAlert}: IAbout) => {
	const saveInputHandler = (id: string, quantity: number) => {
		console.log('saveInputHandler:', id, quantity);
	};

	const btn1ClickHandler = () => {
		console.log('btn1ClickHandler:');
		setAlert({
			text: 'текст сообщения 2',
			type: 'success',
			show: 2,
			out: 1,
		});
		showAlert();
	};

	// const message = 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque, sequi!';
	// const alertType = 'success';

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

			<h3>BsAlert</h3>
			<button type="button" className={`btn btn-info ${styles.btn}`} onClick={btn1ClickHandler}>
				Кнопка 1
			</button>
		</div>
	);
}
