import React from 'react';
import styles from './footer.module.scss';

const Footer = () => (
	<div className={`container-fluid ${styles.footer}`}>
		<div className='row'>
			<div className='col-md-12'>
				<h2>Следите за нами в Instagram</h2>
			</div>
		</div>
	</div>
);

export default Footer;
