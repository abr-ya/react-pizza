import React, {useState, useEffect} from 'react';
import styles from './bsAlert.module.scss';

interface IBsAlert {
	text: string; // текст сообщения
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'; // bs-класс
	show?: number; // время до автоскрытия, сек
	out?: number; // время до скрытия, сек
	hideAlert: () => void;
}

const BsAlert = ({text, type, hideAlert, show = 60, out = 1}: IBsAlert) => {
	useEffect(() => {
		const TimerId1 = setTimeout(autoClose, show * 1000);
		return () => clearTimeout(TimerId1);
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const [isAlertOut, setIsAlertOut] = useState(false);
	
	const autoClose = () => {
		setIsAlertOut(true);
		setTimeout(hideAlert, out * 1000 + 50);
	}

	return (
		<div
			className={`alert alert-${type || 'secondary'} alert-dismissible ${styles.bsAlert} ${isAlertOut ? styles.bsAlertFog : ''}`}
			style={{transition: `${out}s all`}}
			role="alert"
		>
			{text}
			<button type="button" className="close" aria-label="Close" onClick={() => hideAlert()}>
				<span aria-hidden="true">&times;</span>
			</button>
		</div>
	)
}

export default BsAlert;
