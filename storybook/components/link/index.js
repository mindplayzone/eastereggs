import React from 'react';
import './style.css';

const generateUUID = () => {
	return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
		var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
		return v.toString(16);
	});
}

function setClipboardText(){
	let id = "shareLinkText";
	let existsTextarea = document.getElementById(id);
	
	if( ! existsTextarea ) {
		let textarea = document.createElement("textarea");
		textarea.id = id;
		textarea.style.position = 'fixed';
		textarea.style.top = 0;
		textarea.style.left = 0;
		textarea.style.width = '1px';
		textarea.style.height = '1px';
		textarea.style.padding = 0;
		textarea.style.border = 'none';
		textarea.style.outline = 'none';
		textarea.style.boxShadow = 'none';
		textarea.style.background = 'transparent';

		document.querySelector("body").appendChild(textarea);
		console.log("The textarea now exists :)");
		existsTextarea = document.getElementById(id);

	}
	
	existsTextarea.value = generateUUID();
	existsTextarea.select();
	
	try {
		let status = document.execCommand('copy');
		if( !status ){
			console.error("Cannot copy text");
		} else {
			alert( "The text is now on the clipboard" );
		}
	} catch ( err ) {
		console.log('Unable to copy.');
	}
}

export function Link() {

	const copyLink = () => {
		let copied = false;
		try {
			copied = document.execCommand("copy");
		} catch(e) {
			copied = false;
		}
		if ( copied ) {
			
		}
	}

	return (
		<button className={ 'btn btn-lg btn-green' } onClick={ setClipboardText }>
			{ 'Copiaza link' }
		</button>
	);
};
