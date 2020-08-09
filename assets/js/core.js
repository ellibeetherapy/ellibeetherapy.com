function loadPage() {    
	const lang = Cookies.get( "lang" );   

	if ( lang === undefined ) { 
		Cookies.set( "lang", "bg", { expires: 30 } ); 
		return; 
	} 

	if ( getPageLang() !== lang ) { 
		redirectTo( lang ); 
	}
} 

function redirectTo( lang ) { 
	window.location.replace( getTargetUrl( lang ) ); 
} 

function getTargetUrl( lang ) { 
	let url = getPageName( window.location.href ); 
	return lang === "bg" 
		? url 
		: url = "/" + lang + url; 
}

function getPageLang() { 
	return document
		.querySelector( "html" )
		.getAttribute( "lang" ); 
}

function getPageName( url ) { 
	return url.substring( url.lastIndexOf( "/" ) ); 
} 

