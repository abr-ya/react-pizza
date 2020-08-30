import React from 'react';
import styles from './inst.module.scss';

const Inst = () => {
	const img: string[] = ['01', '02', '03', '04', '06', '07', '08', '09'];

	return (
		<div className={`container-fluid ${styles.inst}`}>
			<div className={`row ${styles.instRow}`}>
				<div className={`col-md-12 ${styles.instCol}`}>
					<h2>Следите за нами в Instagram</h2>
					<span className={styles.pizzamenu}>@pizzamenu</span>
				</div>
				<div className={`col-md-12 ${styles.instCol}`}>
					{img.map((item: string, index) => (
						<div className={styles.imgWrapper} key={index}>
							<img src={`img/inst-${item}.jpg`} alt={`inst-${item}`}/>
							
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Inst;
