function getValueOf( cookieName ) {  
	const cookies = document.cookie
		.split( ";" )
		.map( function( cookieString ) {
			const cookiePair = cookieString.trim().split( "=" ); 
			return { 
				"name": cookiePair[ 0 ].trim(), 
				"value": cookiePair[ 1 ].trim() 
			}; 
		} ); 

	for ( const cookie of cookies ) { 
		if ( cookie[ "name" ] === cookieName ) { 
			return cookie[ "value" ]; 
		}
	}

	return undefined; 
} 

function redirectBasedOn( language ) {  
	const customIndex = `/${language}/` + getPageName( window.location.href );  
	window.location.replace( customIndex ); 
} 

function loadCustomIndex() {    
	const language = getValueOf( "language" );  
	if ( language ) { 
		redirectBasedOn( language ); 
	}
} 

function getPageName( url ) { 
	return url.split( "/" ).pop(); 
} 

function setCookie( key, value ) { 
	document.cookie = `${key}=${value};secure`; 
}