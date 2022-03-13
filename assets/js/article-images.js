( function() {
	// Initializes article images slider
	// $( '.image-entry-list.multiple-images' ).lightSlider( { 
	// 	item: 2, 
	// 	pager: false, 
	// 	controls: true 
	// } ); 

	// $( '.image-entry-list.multiple-images' ).bxSlider( { 
	//	auto: true, 
	//	pause: 6000, 
	//	infiniteLoop: false, 
	// 	minSlides: 2, 
	// 	maxSlides: 2, 
	//	preloadImages: 'all', 
	//	stopAutoOnClick: true, 
	// 	// shrinkItems: true, 
	// 	pager: false, 
	// 	controls: true 
	// } ); 

	$( '.image-entry-list' ).magnificPopup( { 
		delegate: 'a', 
		type: 'image', 
		zoom: { 
			enabled: true 

		}

	} ); 
 
}() ); 