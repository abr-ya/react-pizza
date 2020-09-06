import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import styles from './mobileMenu.module.scss';
import {ILink} from '../../interfaces';
import {scrollToTop, screen} from '../../utils';

interface IMobileMenu {
	links: ILink[];
}

const MobileMenu = ({links}: IMobileMenu) => {
	const [isMenuHidden, setIsMenuHidden] = useState(true);

	const menuWidth: string = ['sm', 'xs'].includes(''+screen()) ? '100%' : '320px';

	const btnClickHandler = () => {
		setIsMenuHidden((prevState: boolean) => !prevState);
	};

	const BtnIcon = () => (
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="19" viewBox="0 0 24 19">
			<g fillRule="evenodd">
				<rect width="24" height="3" rx="1.5"/>
				<rect width="24" height="3" y="8" rx="1.5"/>
				<rect width="19" height="3" y="16" rx="1.5"/>
			</g>
		</svg>		
	);

	const BtnClose = () => (
		<svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21">
			<g fill="#FFF" fillRule="evenodd">
				<rect width="24" height="3" x="-2" y="9" rx="1.5" transform="rotate(45 10 10.5)"/>
				<rect width="24" height="3" x="-2" y="9" rx="1.5" transform="scale(-1 1) rotate(45 0 -13.642)"/>
			</g>
		</svg>
	);

	let htmlLinks: any[] = [];
	if (Array.isArray(links) && links.length) {
		htmlLinks = links.map((item, index) => (
			<li key={index} onClick={() => {scrollToTop(); btnClickHandler()}}>
				<NavLink exact={item.exact} to={item.link}>{item.name}</NavLink>
			</li>			
		));
	}

	return (
		<>
			<div className={styles.btnMenu} onClick={btnClickHandler}>
				<BtnIcon />
			</div>
			<div
				className={styles.hiddenMenu}
				style={{
					width: menuWidth,
					right: (isMenuHidden ? `-${menuWidth}` : '0px'),
				}}
			>
				<div className={styles.btnClose} onClick={btnClickHandler}>
					<BtnClose />
				</div>
				<ul>{htmlLinks}</ul> 
			</div>
			<div
				className={styles.fog}
				style={{width: (isMenuHidden ? '0' : `calc(100vw - ${menuWidth})`)}}
				onClick={btnClickHandler}
			></div>
		</>
	);
}

export default MobileMenu;
