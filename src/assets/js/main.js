/**
 * Pixel2HTML - PaulaOliveira/FrontEndDeveloperTest
 */

var msg = 'Pixel2HTML - PaulaOliveira/FrontEndDeveloperTest';

function printLog(log){
    'use strict';
  return console && console.log(log);
}

printLog(msg);

// A $( document ).ready() block.
$( document ).ready(function() {
    
    // slick carrousel
    $(".slider").slick({

	  // normal options...
	  infinite: false,
	  dots: true,

	  // the magic
	  responsive: [{

	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,
	        infinite: true
	      }

	    }, {

	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        dots: true
	      }

	    }, {

	      breakpoint: 300,
	      settings: "unslick" // destroys slick

	    }]
	});
});