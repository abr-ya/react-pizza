import React, {useEffect, useState} from 'react';
import styles from './header.module.scss';
import Nav from '../Nav/Nav';
import HeaderRight from '../HeaderRight/HeaderRight';

interface IHeader {
	inCart: number;
	firstPizza: string;
}

const Header = ({inCart, firstPizza}: IHeader) => {
	const [isHeaderFixed, setIsHeaderFixed] = useState(false);

	const onScroll = () => {
		setIsHeaderFixed(window.scrollY > 50);
	};

	useEffect(() => {
		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		}
	}, []);

	const links = [
		{link: '/', name: 'Меню', exact: true},
		{link: '/about', name: 'О нас', exact: true},
		{link: '/contact', name: 'Контакты', exact: true},
	];

	return (
		<div className={`${styles.header} ${isHeaderFixed ? styles.headerFixed : styles.headerFull}`}>
			<div className="container">
				<div className='row'>
					<div className='col-md-6'>
						<Nav links={links} isHeaderFixed={isHeaderFixed} />
					</div>
					<div className='col-md-6'>
						<HeaderRight inCart={inCart} firstPizza={firstPizza} isHeaderFixed={isHeaderFixed} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
