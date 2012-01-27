// JavaScript Document

//$(document) we are selecting the document. All our jQuery code goes inside the document ready event. indentation is important becaause there is goign to be a lot of nesting. meaning function inside of functions 

$(document).ready(function () {
	/* 1. we select an element using a css selector
	2. we do something to that element
	we can write any css selector you can think up in the $() function
	
	$('#thing') -> get by ID
	$('.thing') -> get by class
	$('div p') -> get by tagse; all the <p> elements inside <div> element
	$('div p:first child') -> get by the first <p> element inside a <div> element
	etc.
	*/
	
	$('a').on('click', function (ev) {      // we are selecting the link element in our index file
	
	ev.preventDefault ();     // we are stopping the regular functions of the specific event. example in this case we are stopping the link. example for a form it will stop it from submitting
	console.log('Hello');
	
	/*gives us reference to the element this event listener is attached to*/
		console.log($(this).attr('href'));
		
		
		/* with css we can get and set css properties. the css properties name the 1st argument is identical to how you'd write it in css
		apijquery.com*/
		$(this).css('background-color','#f33');
	});
	
	$('form').on('submit', function (ev) {
		ev.preventDefault();
		
		var newLi = $(document.createElement('li'));
		
		if ($('#item').val() != '') {   // only if element is not empty that way it will continue with the next few lines of codes 
			newLi.html($('#item').val());
			$('ul').append(newLi);
			$('#item').val('');    // in first (#item) you are setting the value but the .val will empty it ('') we are set. value. while () means you are getting value
		}
	});
	
	$('ul').on('click', 'li', function (ev) {
		$(this).addClass('done');
	});
});