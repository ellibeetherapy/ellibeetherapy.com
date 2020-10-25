( function() {
	// Initializes article images slider
	// $( '.image-entry-list.multiple-images' ).lightSlider( { 
	// 	item: 2, 
	// 	pager: false, 
	// 	controls: true 
	// } ); 

	// $( '.image-entry-list.multiple-images' ).bxSlider( { 
	// 	minSlides: 2, 
	// 	maxSlides: 2, 
	// 	// shrinkItems: true, 
	// 	pager: false, 
	// 	controls: true 
	// } ); 

	$( '.image-entry-list.multiple-images' ).magnificPopup( { 
		delegate: 'a', 
		type: 'image' 

	} ); 
 
}() ); 