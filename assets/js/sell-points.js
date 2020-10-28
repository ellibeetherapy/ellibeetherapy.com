( function() {
	// Initializes main slider
	// $( '.sell-points .entry-list' ).lightSlider( {  
	// 	mode: 'slide', 
	// 	vertical: true, 
	// 	adaptiveHeight: true,
	// 	pager: true, 
	// 	controls: false, 
	// 	pause: 8000,
	// 	auto: true, 
	// 	// loop: true, 
	// 	item: 1, 
	// 	slideEndAnimation: false,  
	// 	// pauseOnHover: true,   
	// 	keyPress: true 
	// } ); 

	// $('.sell-points').flexslider( { 
	// 	animation: 'slide', 
	// 	direction: 'vertical' 

	// } ); 

	$('.sell-points .entry-list').bxSlider( { 
		mode: 'vertical', 
		adaptiveHeight: true, 
		controls: false, 
		preloadImages: 'all', 
		auto: true, 
		autoStart: true, 	
		autoHover: true, 
		// infiniteLoop: false, 
		pause: 7000, 
		touchEnabled: false 
	} ); 
 
}() ); 