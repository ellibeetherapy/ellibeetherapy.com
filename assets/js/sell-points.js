( function() {
	// Initializes main slider
	$( '.sell-points .entry-list' ).lightSlider( {  
		mode: 'slide', 
		vertical: true, 
		adaptiveHeight: true,
		pager: true, 
		controls: false, 
		pause: 7000,
		auto: true, 
		// loop: true, 
		item: 1, 
		slideEndAnimation: false,  
		// pauseOnHover: true,   
		keyPress: true 
	} ); 
 
}() ); 