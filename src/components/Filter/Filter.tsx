import React from 'react';
import {IFilter} from '../../interfaces';
import styles from './filter.module.scss';
import {mediaShow} from '../../utils';

const filters: any = [
	['all','Все'],
	['spicy','Острые'],
	['meaty','Мясные'],
	['cheese','Сырные'],
	['vegan','Веганские'],
];

const Filter = ({size, sort, handlers, count}: IFilter) => {
	// count - кол-во продуктов, удовлетворяющих условию
	const filterClickHandler = ((key: string) => {
		handlers.sizeChange(key);
	});

	return (
		<div className='container'>
			<div className={`row ${styles.filter}`}>
				<div className="col-sm-12">
					<h2>Выберите пиццу</h2>
					<div className={styles.wrapper}>
						{filters.map((item: any) => (
							<h3
								className={`${styles.filterItem} ${item[0] === size ? styles.active : ''}`}
								onClick={() => filterClickHandler(item[0])}
								key={item[0]}
							>
								<span className={mediaShow.mdUp}>{item[1]}</span>
								<span className={mediaShow.smDown}>
									<img className={styles.image} src={`img/filter/${item[0]}.svg`} alt={`icon-${item[0]}`}/>
								</span>
							</h3>
						))}
					</div>		
				</div>
			</div>
		</div>
	);
};

export default Filter;
