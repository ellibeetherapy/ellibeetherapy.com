// function getCookieValue( name ) {   
// 	const cookies = parseCookies(); 
// 	return Object.keys( cookies ).includes( name ) 
// 		? cookies[ name ] 
// 		: undefined; 
// } 

// function parseCookies() { 
// 	const cookies = {}; 
// 	document.cookie
// 		.split( ";" ) 
// 		.forEach( function( pairString ) { 
// 			const pair = pairString
// 				.split( "=" )
// 				.map( function( m ) { 
// 					return m.trim(); 
// 				} ); 
// 			cookies[ pair[ 0 ] ] = cookies[ pair[ 1 ] ]; 
// 		} ); 
// 	return cookies; 
// }

function redirectTo( lang ) {  
	const page = `/${lang}/` + getPageName( window.location.href );  
	window.location.replace( page ); 
} 

function loadPage() {    
	const lang = Cookies.get( "lang" );   

	if ( lang !== undefined && lang !== "bg" ) { 
		redirectTo( lang ); 
	} else { 
		redirectTo( "bg" ); 
	}
} 

function getPageName( url ) { 
	return url.split( "/" ).pop(); 
} 

// function setCookie( name, value ) { 
// 	document.cookie = `${name}=${value};path=/ ;secure`; 
// } 

// function deleteCookie( name ) { 
// 	document.cookie = name + "=; max-age=0; expires=Thu, 01 Jan 1970 00:00:01 GMT;"; 
// }