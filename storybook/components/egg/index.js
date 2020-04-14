import React from 'react';
import './style.css';

export function Egg({ color='red'}) {

	const gradient = 'radial-gradient(75.71% 75.71% at 64.89% 75.71%, lightyellow 0%, $color 100%)';
	const background = gradient.replace( '$color', color );
	const eggStyle = {
		background
	}

	return (
		<div className='egg' style={ eggStyle }/>
	);
};
