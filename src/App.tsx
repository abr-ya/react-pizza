import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {IApp} from './interfaces';
import Loader from './components/Loader/Loader';
import {Home} from './pages/Home';
import {About} from './pages/About';
import New from './pages/New';
import Contact from './pages/Contact';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import BsModal from './components/BsModal/BsModal';
import Cart from './components/Cart/Cart';
import BsAlert from './components/BsAlert/BsAlert';

// temp - подумать, как лучше?
interface IAlert {
	text: string; // текст сообщения
	type?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark'; // bs-класс
	show?: number; // время до автоскрытия, сек
	out?: number; // время до скрытия, сек
}

const App = ({
	requestProductsSaga,
	loading,
	products, sort, size, cart,
	setSort, setSize, addToCart, delFromCart, updateCart,
}: IApp) => {
	useEffect(() => {
		requestProductsSaga();
	// eslint-disable-next-line
	}, []);

	const [firstPizza, setFirstPizza] = useState('');
	const [isAlertShow, setIsAlertShow] = useState(false);
	const [alert, setAlert] = useState<IAlert>({
		text: 'текст сообщения',
		type: 'primary',
		show: 2,
		out: 1,
	});

	useEffect(() => {
		const firstPizzaText: string = products.length > 0 && Object.keys(cart).length > 0
			? products.find(({id}) => id+'' === Object.keys(cart)[0].slice(1)).title
			: 'пицца не выбрана'
		setFirstPizza(firstPizzaText);
	}, [cart, products]);

	const handleRemoveFromCart = (id: string) => {
		//console.log('handleRemoveFromCart', id);
		delFromCart(id);
	};

	return (
		<BrowserRouter
			basename={process.env.NODE_ENV === 'development' ? '/' : '/demo/pizza/'}
		>
			<Header inCart={Object.keys(cart).length} firstPizza={firstPizza} />
			<div className="header-bg"></div>
			{loading
				? (
					<div className={'container'}>
						<Loader/>
					</div>
				) : (
					<Switch>
						<Route
							path='/'
							exact
							component={() => (
								<Home
									setSort={setSort}
									setSize={setSize}
									addToCart={addToCart}
									delFromCart={delFromCart}
									updateCart={updateCart}
									products={products}
									sort={sort}
									size={size}
									cart={cart}
								/>
							)}
						/>
						<Route path='/about' component={() => <About showAlert={() => setIsAlertShow(true)} setAlert={setAlert} />} />
						<Route path='/new' component={New} />
						<Route path='/contact' component={Contact} />
						<Redirect to='/' />
					</Switch>
				)
			}
			<Footer />
			<BsModal id='bsModal1' title='Ваш заказ'>
				<Cart
					products={products}
					cartItems={cart}
					handleRemoveFromCart={handleRemoveFromCart}
					updateCart={updateCart}
				/>
			</BsModal>
			{isAlertShow &&
				<BsAlert
					text={alert.text}
					type={alert.type}
					show={alert.show}
					out={alert.out}
					hideAlert={() => setIsAlertShow(false)}
				/>
			}
		</BrowserRouter>
	);
};

export default App;
