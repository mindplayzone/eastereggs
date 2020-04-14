import React from 'react';
import { Egg } from '../egg';
import './style.css';

let eggRow = [];
let colors = [ 'red', 'blue', 'green', 'cyan', 'navajowhite', 'gold', 'indigo' ];
for ( let eggs = 0; eggs < colors.length; eggs++ ) {
	eggRow.push( <Egg key={ eggs } color={ colors[ eggs ] } /> );
}

export function Carton() {
	return (
		<div className="carton">
			{ eggRow }
		</div>
	);
};
