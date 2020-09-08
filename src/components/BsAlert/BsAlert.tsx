import React, {useState, useEffect} from 'react';
import styles from './bsAlert.module.scss';

export interface IAlert {
	show: boolean;
	text: string; // текст сообщения
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'; // bs-класс
	showT?: number; // время до автоскрытия, сек
	outT?: number; // время до скрытия, сек
}

interface IBsAlert {
	alert: IAlert;
	setAlert: (alert: IAlert) => void;
}

const BsAlert = ({alert: {text, type, showT = 60, outT = 5}, setAlert}: IBsAlert) => {
	//console.log(text, type, showT, outT);
	useEffect(() => {
		const TimerId1 = setTimeout(autoClose, (showT || 60) * 1000);
		return () => clearTimeout(TimerId1);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [isAlertOut, setIsAlertOut] = useState(false);
	
	const autoClose = () => {
		setIsAlertOut(true);
		setTimeout(closeAlert, outT * 1000 + 50);
	}

	const closeAlert = () => {
		setAlert({show: false, text: ''});
	};

	return (
		<div
			className={`alert alert-${type || 'secondary'} alert-dismissible ${styles.bsAlert} ${isAlertOut ? styles.bsAlertFog : ''}`}
			style={{transition: `${outT}s all`}}
			role="alert"
		>
			{text}
			<button type="button" className="close" aria-label="Close" onClick={closeAlert}>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
}

export default BsAlert;
