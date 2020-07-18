( function() {
	// Initializes main slider
	$( '.sell-points .entry-list' ).lightSlider( { 
		auto: true, 
		item: 1, 
		pager: true, 
		controls: false 

	} ); 

	// Copies auto generated slider controls to text content wrapper in all slides
	// const controls = $( '.sell-points .bx-controls-direction' ); 
	// $( '.sell-points .text-content' )
	// 	.append( controls ); 
 
}() ); 