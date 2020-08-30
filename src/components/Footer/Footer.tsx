import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
	<div className={`container-fluid ${styles.footerWrapper}`}>
		<div className={`container ${styles.footer}`}>
			<div className='row'>
				<div className='col-md-2'>
				<div className={styles.brand}>
					<a href="/">
						<img className={styles.brandImg} src="img/logo-invert.png" alt="logo"/>
					</a>
				</div>
				</div>
				<div className={`col-md-8 ${styles.contact}`}>
					<div>
						<a
							href="tel:+79184326587"
							className={`${styles.big} ${styles.phone}`}
						>
							+7 (918) 432-65-87
						</a>
					</div>
					<div className={styles.small}>
						Ежедневно с 9:00 до 23:00
					</div>					
				</div>
				<div className={`col-md-2 ${styles.privacy}`}>
					<span>Политика конфиденциальности</span>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;
