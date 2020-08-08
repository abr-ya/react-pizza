import {IData} from './interfaces';

const data: IData = {
	'pizza' : [
		{
			'id': 1,
			'title': 'Итальянская',
			'image': 'pizza-01.png',
			'description': 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
			'category': ['meaty', 'cheese'],
			'price': 699,
			'sku': '18644119330491312'
		},
		{
			'id': 2,
			'title': 'Маргарита',
			'image': 'pizza-02.png',
			'description': 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
			'category': ['meaty', 'cheese', 'spicy'],
			'price': 699,
			'sku': '18644119330491312'
		},
		{
			'id': 3,
			'title': 'Барбекю',
			'image': 'pizza-03.png',
			'description': 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
			'category': ['meaty', 'cheese', 'spicy'],
			'price': 699,
			'sku': '18644119330491312'
		},
		{
			'id': 4,
			'title': 'Вегетарианская',
			'image': 'pizza-04.png',
			'description': 'Томат, шампиньон, сыр, оливки, чили, соус, тесто, базилик',
			'category': ['cheese', 'vegan'],
			'price': 699,
			'sku': '18644119330491312'
		}
	],
	'sales' : [
		{
			'id': 1,
			'title': 'Закажи 2 пиццы - 3-я в подарок',
			'image': 'event-1.jpg',
			'text': 'При заказе 2-х больших пицц - средняя пицца в подарок',			
		},
		{
			'id': 2,
			'title': 'Напиток в подарок',
			'image': 'event-2.jpg',
			'text': 'Скидка на заказ от 3000 рублей + напиток в подарок',			
		},
		{
			'id': 3,
			'title': '25% при первом заказе',
			'image': 'event-3.jpg',
			'text': 'Скидка новым клиентам!',			
		},
	],
};

export default data;
