import React from 'react';
import styles from './headerRight.module.scss';
import {writeCorrect} from '../../utils';

interface IHeaderRight {
	inCart: number;
	firstPizza: string;
}

const HeaderRight = ({inCart, firstPizza}: IHeaderRight) => {
	const cartIconClickHandler = () => {
		$('#bsModal1').modal('toggle');
	};

	return (
		<div className={styles.headerRight}>
			<div className={styles.contact}>
				<div className={styles.contactIcon}>
					<img src="img/icon-phone.svg" alt="icon-order"/>
				</div>
				<div className={styles.contactText}>
					<div>
						<a href="tel:+79184326587" className={`${styles.big} ${styles.phone}`}>
							+7 (918) 432-65-87
						</a>
					</div>
					<div className={styles.small}>
						Ежедневно с 9:00 до 23:00
					</div>
				</div>
			</div>
			<div className={styles.order} onClick={cartIconClickHandler}>
				<div className={styles.contactIcon}>
					<div className={styles.contactIconCount}>
						{inCart}
					</div>
					<img src="img/icon-cart.svg" alt="icon-cart"/>
				</div>
				<div className={styles.contactText}>
					<div className={styles.big}>Ваш заказ</div>
					<div className={styles.small}>
						{firstPizza}
						{inCart > 1 &&
							<>{` и ещё ${inCart-1} ${writeCorrect(inCart-1, ['пицца','пиццы','пицц'])}`}</>
						}
					</div>
				</div>
			</div>
			<div className={styles.lang}>
				<div className={styles.big} onClick={() => console.log('меню переключения языков')}>
					EN
				</div>
			</div>
		</div>
	);
};

export default HeaderRight;