$( ".switch-lang" ) 
	.on( "click", function( e ) { 
		const language = $( e.target )
			.attr( "data-lang" ); 
		setCookie( "language", language ); 

		loadCustomIndex(); 

	} ); 