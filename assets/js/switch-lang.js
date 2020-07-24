$( ".switch-lang-panel" ) 
	.on( "click", function( e ) { 
		const lang = $( e.target )
			.attr( "data-lang" ); 
		Cookies.set( "lang", lang, { expires: 30 } ); 

		redirectTo( lang );  

	} ); 