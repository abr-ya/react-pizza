import React, {useState} from 'react'; //, useEffect
import {IPizza} from '../../interfaces';
import * as utils from '../../utils';
import styles from './pizza.module.scss';
import SizeSetter from '../SizeSetter/SizeSetter';

const Pizza = ({data, handleAddToCart}: IPizza) => {
	const [size, setSize] = useState(data.defaultSize);
	const description = data.description.length <= 80 ? data.description : `${data.description.slice(0,80)}...`
	//console.log(data.description.length);

	// useEffect(() => {
	// 	console.log(data.price2[size]);
	// }, [size]);
	
	return (
		<div className={styles.pizza}>
			<div className={styles.pizzaBlock}>
				<div className={styles.circle1}></div>
				<div className={styles.circle2}></div>
				<div className={styles.circle3}></div>
				<div className={`${styles.pizzaImg} ${styles[`pizzaImg${size}`]}`}>
					<img src={`products/${data.image}`} alt={data.title} />
				</div>
			</div>

			
			<div className={styles.textBlock}>
				<h3>{data.title}</h3>
				<p className={styles.ingredients}>
					{description}
				</p>
				<SizeSetter start={size || 'M'} setter={setSize} />
				<span className={styles.price}>{utils.formatCurrency(data.price2[size])}</span>
				<button
					className={`btn btn-primary ${styles.btn}`}
					onClick={() => handleAddToCart(`${size}${data.id}`)}
				>
					<span>Заказать</span>
				</button>
			</div>
		</div>
	);
};

export default Pizza;
