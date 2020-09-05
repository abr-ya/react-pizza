import React from 'react';
import {IFilter} from '../../interfaces';
import styles from './filter.module.scss';
import {mediaShow} from '../../utils';
import Icon from './Icon';

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
							<div
								className={styles.filterItem}
								onClick={() => filterClickHandler(item[0])}
								key={item[0]}							
							>
								<h3 className={`${mediaShow.mdUp} ${item[0] === size ? styles.active : ''}`}>
									{item[1]}
								</h3>
								<span className={`${mediaShow.smDown}`}>
								 	<Icon icon={item[0]} active={item[0] === size} />
								</span>
							</div>
						))}
					</div>		
				</div>
			</div>
		</div>
	);
};

export default Filter;
