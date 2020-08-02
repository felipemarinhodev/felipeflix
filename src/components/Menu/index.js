import React from 'react';
import Logo from '../../assets/img/logo.png';

import './Menu.css';
import { Button } from '../Button';

export const Menu = () => {
	return (
		<nav className="Menu">
			<a href="/">
				<img className="Logo" src={Logo} alt="FelipeFlix logo" />
			</a>
			<Button as="a" className="ButtonLink" href="/">
				Novo vídeo
			</Button>
		</nav>
	)
}