import React from 'react';
import styles from './banner.module.scss';

const Banner = () => (
	<div className={`container-fluid ${styles.bg}`}>
		<div className={`container ${styles.banner}`}>
			<div className='row'>
				<div className='col-md-6'>
					<h1>Пицца на заказ</h1>
					<p>Бесплатная и быстрая доставка за час
						<br/>в любое удобное для вас время
					</p>				
				</div>
				<div className={`col-md-6 ${styles.bannerRight}`}>
					<img className={styles.imgPizza} src="img/img-pizza.png" alt="pizza"/>
					<img className={styles.imgLeaves} src="img/img-leaves.png" alt="leaves"/>
				</div>
			</div>
		</div>		
	</div>
);

export default Banner;
