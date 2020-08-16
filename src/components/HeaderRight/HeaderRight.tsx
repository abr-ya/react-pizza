import React from 'react';
import styles from './headerRight.module.scss';

const HeaderRight = () => {
	const cartIconClickHandler = () => {
		$('#bsModal1').modal('toggle');
	};

	return (
		<div className={styles.headerRight}>
			<div className="contact">
				Контакты
			</div>
			<div className="order">
				<span onClick={cartIconClickHandler}>
					Корзина
				</span>
			</div>
			<div className="lang">
				<span className={styles.big}>EN</span>
			</div>
		</div>
	);
};

export default HeaderRight;
