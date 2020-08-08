import React from 'react';
import styles from './sales.module.scss';
import img1 from './event-1.jpg';
import img2 from './event-2.jpg';
import img3 from './event-3.jpg';

const Sales = () => (
	<div className={`row ${styles.sales}`}>
		<div className="col-md-4">
			<img src={img1} alt='img1' />
		</div>
		<div className="col-md-4">
			<img src={img2} alt='img2' />
		</div>
		<div className="col-md-4">
			<img src={img3} alt='img3' />
		</div>
	</div>
);

export default Sales;
