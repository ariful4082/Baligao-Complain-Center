/*Home Page Slider*/
$('.slider-area').owlCarousel({
	items: 1,
	dots: false,
	loop: true,
	autoplay: true
});

/*Tee Slider for Teem Page*/

$('.teem-member-slider').owlCarousel({
	loop: true,
	margin: 10,
	autoplay: true,
	responsiveClass: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,

		},
		1000: {
			items: 4,
			loop: true
		}
	}
});
/*Google Maps*/
var map;
    $(document).ready(function(){
      map = new GMaps({
        el: '#map',
        lat: 23.500112,
        lng: 90.415676,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
      });
    });
// responsive menu
$(document).ready(function(){
	$('.responsive-menu').click(function(){
		$('nav').toggleClass('menuList');
	})
})