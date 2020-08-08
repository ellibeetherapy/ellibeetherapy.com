( function() { 
	$( ".switch-lang-panel" ) 
		.on( "click", function( e ) { 
			const lang = $( e.target )
				.attr( "data-lang" ); 

			if ( lang === getPageLang() ) { 
				return; 
			}

			Cookies.set( "lang", lang, { expires: 30 } ); 

			redirectTo( lang );  

		} ); 
}() );