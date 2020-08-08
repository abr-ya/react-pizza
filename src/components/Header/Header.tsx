import React from 'react';
import styles from './header.module.scss';

const Header = () => (
	<div className={styles.header}>
		<h1>Пицца на заказ</h1>
		<p>Бесплатная и быстрая доставка за час
			<br/>в любое удобное для вас время
		</p>
	</div>
);

export default Header;
