import React from 'react';
import {IFilter} from '../../interfaces';
import styles from './filter.module.scss';

const Filter = ({size, sort, handlers, count}: IFilter) => (
	// count - кол-во продуктов, удовлетворяющих условие
	<div className={`row ${styles.filter}`}>
		<h2>Выберите пиццу</h2>
		Все
		Острые
		Мясные
		Сырные
		Веганские
		{/* <div className='col-md-4'>
			{count} products found
		</div>
		<div className='col-md-4'>
			<label>Order by
				<select
					className='form-control'
					value={sort}
					onChange={e => handlers.sortChange(e.target.value)}
					multiple={false}
				>
					<option value=''>Select</option>
					<option value='lowestprice'>Price lowest to highest</option>
					<option value='highestprice'>Price highest to lowest</option>
				</select>
			</label>
		</div>
		<div className='col-md-4'>
			<label > Filter Size
				<select className='form-control' value={size} onChange={e => handlers.sizeChange(e.target.value)}>
					<option value=''>ALL</option>
					<option value='XS'>XS</option>
					<option value='S'>S</option>
					<option value='M'>M</option>
					<option value='L'>L</option>
					<option value='XL'>XL</option>
					<option value='XXL'>XXL</option>
				</select>
			</label>
		</div> */}
	</div>
);

export default Filter;
