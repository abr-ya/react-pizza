import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './nav.module.scss';

interface INav {
	links: ILink[];
}

interface ILink {
	link: string;
	name: string;
	exact: boolean;
}

const Nav = ({links}: INav) => {
	let htmlLinks: any[] = [];
	if (Array.isArray(links) && links.length) {
		htmlLinks = links.map((item, index) => (
			<li className="nav-item" key={index} >
				<NavLink exact={item.exact} to={item.link} className="nav-link">{item.name}</NavLink>
			</li>			
		));
	}

	return (
		<nav className="navbar navbar-expand-lg">
			<div className="navbar-brand">
				<img src="img/logo.png" alt="logo"/>
			</div>
			<ul className={`navbar-nav ${styles.navbarNav}`}>
				{htmlLinks}
			</ul>
		</nav>
	);
}

export default Nav;
