import React, {useState} from 'react';
import styles from './mobileMenu.module.scss';

const MobileMenu = () => {
	const [isMenuHidden, setIsMenuHidden] = useState(true);

	const btnClickHandler = () => {
		console.log('btnClickHandler');
		setIsMenuHidden((prevState: boolean) => !prevState);
	};

	return (
		<>
			<label className={styles.btnMenu} htmlFor="hmt" onClick={btnClickHandler}>
				<span className={styles.first}></span>
				<span className={styles.second}></span>
				<span className={styles.third}></span>
			</label>
			<ul
				className={styles.hiddenMenu}
				style={{right: (isMenuHidden ? '-200px' : '0px')}}
			>
				<li><a href="1">Меню</a></li>  
				<li><a href="2">О нас</a></li>
				<li><a href="3">Контакты</a></li>  
			</ul>
			<div
				className={styles.fog}
				style={{width: (isMenuHidden ? '0' : 'calc(100vw - 200px)')}}
				onClick={btnClickHandler}
			></div>
		</>
	);
}

export default MobileMenu;
