import React from 'react';
import styles from './banner.module.scss';

const Banner = () => {
	const btnClickHandler = () => {
		console.log('здесь будет скролл');
	};

	return (
		<div className={`container-fluid ${styles.bg}`}>
			<div className={`container ${styles.banner}`}>
				<div className={`row ${styles.row}`}>
					{/* верхний блок для малых расширений */}
					<div className={`col-sm-12 d-md-none ${styles.bannerTop}`}>
						<img className={styles.imgPizza} src="img/img-pizza.png" alt="pizza"/>
						<img className={styles.imgLeaves} src="img/img-leaves.png" alt="leaves"/>
					</div>
					<div className='col-xl-6 col-md-7 col-sm-12'>
						<h1>Пицца на заказ</h1>
						<p>Бесплатная и быстрая доставка за час
							в любое удобное для вас время
						</p>
						<button
							className={`btn btn-primary ${styles.btn}`}
							onClick={btnClickHandler}
						>
							Выбрать пиццу
						</button>				
					</div>
					<div className={`col-xl-6 col-md-5 d-none d-md-block ${styles.bannerRight}`}>
						<img className={styles.imgPizza} src="img/img-pizza.png" alt="pizza"/>
						<img className={styles.imgLeaves} src="img/img-leaves.png" alt="leaves"/>
					</div>
				</div>
			</div>		
		</div>
	);
};

export default Banner;
