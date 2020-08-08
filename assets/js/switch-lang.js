( function() { 
	const switchLangPanel = $( ".switch-lang-panel" ); 
	let panelOpen = false; 

	switchLangPanel 
		.on( "click", function( e ) { 
			const target = $( e.target ); 
			if ( target.is( ".open-switch-lang-panel-button" ) ) { 
				if ( panelOpen === false ) { 
					switchLangPanel.addClass( "panel-open" );
				} else { 
					switchLangPanel.removeClass( "panel-open" ); 
				}
				panelOpen = !panelOpen; 
			} else if ( target.is( ".switch-lang-button" ) ) { 
				const lang = target.attr( "data-lang" ); 
				if ( lang === getPageLang() ) { 
					return; 
				}
				Cookies.set( "lang", lang, { expires: 30 } ); 
				redirectTo( lang );  
			} 

		} ); 
}() );