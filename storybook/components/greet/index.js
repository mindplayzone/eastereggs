import React, { useState } from 'react';
import './style.css';

function Act( { text, onClick } ) {
	return (
		<button className={ 'btn btn-lg btn-red' } onClick={ onClick }>
			{ text }
		</button>
	);
};

export function Greet( ) {
	
	let [ connected, setConnected ] = useState( false );
	
	const options = [ 'Cristos a inviat', 'Adevarat a inviat' ];
	let startActionText = options[ 0 ];
	
	if ( connected ) {
		startActionText = options[ 1 ];
	}

	return (
		<Act text={ startActionText } onClick={ () => setConnected( 1 ) }/>
	);
}
