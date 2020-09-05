import React from 'react';
import styles from './headerRight.module.scss';
import {writeCorrect, mediaShow} from '../../utils';
import MobileMenu from '../MobileMenu/MobileMenu';

interface IHeaderRight {
	inCart: number;
	firstPizza: string;
	isHeaderFixed: boolean;
}

const HeaderRight = ({inCart, firstPizza, isHeaderFixed}: IHeaderRight) => {
	const cartIconClickHandler = () => {
		$('#bsModal1').modal('toggle');
	};

	return (
		<div className={styles.headerRight}>
			<div className={styles.contact}>
				<div className={`${styles.contactIcon} ${isHeaderFixed ? styles.contactIconHF : ''}`}>
					<a href="tel:+79184326587">
						<img src="img/icon-phone.svg" alt="icon-order"/>
					</a>
				</div>
				<div className={`${styles.contactText} ${mediaShow.xl}`}>
					<div>
						<a
							href="tel:+79184326587"
							className={`${styles.big} ${styles.phone} ${isHeaderFixed ? styles.phoneHF : ''}`}
						>
							+7 (918) 432-65-87
						</a>
					</div>
					<div className={styles.small}>
						Ежедневно с 9:00 до 23:00
					</div>
				</div>
			</div>
			<div className={styles.order} onClick={cartIconClickHandler}>
				<div className={`${styles.contactIcon} ${isHeaderFixed ? styles.contactIconHF : ''}`}>
					<div className={styles.contactIconCount}>
						{inCart}
					</div>
					<img src="img/icon-cart.svg" alt="icon-cart"/>
				</div>
				<div className={`${styles.contactText} ${mediaShow.xl}`}>
					<div className={`${styles.big} ${isHeaderFixed ? styles.bigHF : ''}`}>Ваш заказ</div>
					<div className={styles.small}>
						{firstPizza}
						{inCart > 1 &&
							<>{` и ещё ${inCart-1} ${writeCorrect(inCart-1, ['пицца','пиццы','пицц'])}`}</>
						}
					</div>
				</div>
			</div>
			<div className={`${styles.lang} ${isHeaderFixed ? styles.langHF : ''}`}>
				<div className={styles.big} onClick={() => console.log('меню переключения языков')}>
					<span className={mediaShow.xl}>XL</span>
					<span className={mediaShow.lg}>LG</span>
					<span className={mediaShow.md}>MD</span>
					<span className={mediaShow.sm}>SM</span>
					<span className={mediaShow.xs}>XS</span>
				</div>
			</div>
			<div
				className={`${styles.mMenu} ${mediaShow.lgDown} ${isHeaderFixed ? styles.langHF : ''}`}
				onClick={() => console.log('мобильное меню')}
			>
				<MobileMenu />
			</div>	
		</div>
	);
};

export default HeaderRight;
