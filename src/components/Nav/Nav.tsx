import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './nav.module.scss';

interface INav {
	links: ILink[];
	isHeaderFixed: boolean;
}

interface ILink {
	link: string;
	name: string;
	exact: boolean;
}

const Nav = ({links, isHeaderFixed}: INav) => {
	const menuClickHandler = () => {
		window.scrollTo(0,0);
	};

	let htmlLinks: any[] = [];
	if (Array.isArray(links) && links.length) {
		htmlLinks = links.map((item, index) => (
			<li className="nav-item" key={index} onClick={menuClickHandler}>
				<NavLink exact={item.exact} to={item.link} className="nav-link">{item.name}</NavLink>
			</li>			
		));
	}

	return (
		<nav className={`navbar navbar-expand-xl navbar-light ${styles.navbar}`}>
			<div className={`navbar-brand ${isHeaderFixed ? styles.brandHF : styles.brand}`}>
				<a href="/">
					<img className={styles.brandImg} src="img/logo.png" alt="logo"/>
				</a>
			</div>
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarId" aria-controls="navbarId" aria-expanded="false" aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarId">
				<ul className={`navbar-nav ${styles.navbarNav} ${isHeaderFixed ? styles.navbarNavHF : ''}`}>
					{htmlLinks}
				</ul>				
			</div>
		</nav>
	);
}

export default Nav;
