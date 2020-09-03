import React from 'react';
import styles from './banner.module.scss';

const Banner = () => (
	<div className={`container-fluid ${styles.bg}`}>
		<div className={`container ${styles.banner}`}>
			<div className={`row ${styles.row}`}>
				<div className='col-xl-6 col-lg-7 col-md-12'>
					<h1>Пицца на заказ</h1>
					<p>Бесплатная и быстрая доставка за час
						<br/>в любое удобное для вас время
					</p>				
				</div>
				<div className={`col-xl-6 col-lg-5 d-none d-lg-block ${styles.bannerRight}`}>
					<img className={styles.imgPizza} src="img/img-pizza.png" alt="pizza"/>
					<img className={styles.imgLeaves} src="img/img-leaves.png" alt="leaves"/>
				</div>
			</div>
		</div>		
	</div>
);

export default Banner;
