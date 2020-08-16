import React from 'react';
import styles from './header.module.scss';
import Nav from '../Nav/Nav';
import HeaderRight from '../HeaderRight/HeaderRight';

const Header = () => {
	const links = [
		{link: '/', name: 'Меню', exact: true},
		{link: '/about', name: 'О нас', exact: true},
		{link: '/contact', name: 'Контакты', exact: true},
	];

	return (
		<div className={`container ${styles.header}`}>
			<div className='row'>
				<div className='col-md-6'>
					<Nav links={links} />
				</div>
				<div className='col-md-6'>
					<HeaderRight />
				</div>
			</div>
		</div>
	);
};

export default Header;
