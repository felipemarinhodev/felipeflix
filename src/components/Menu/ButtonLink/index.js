import React from 'react';

import '../Menu.css';

export const ButtonLink = (props) =>  (
	<a className={props.className} href={props.url}>
		{props.children}
	</a>
)