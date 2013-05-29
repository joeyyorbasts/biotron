$(document).ready(function() {
	createHomeSlideshow();
	createCompany();
	
});

function createHomeSlideshow() {
	// start home slideshow 
    $('.home-slideshow')
	.after('<div id="star-nav">')
	.cycle({ 
        fx: 'scrollHorz', // 'scrollHoriz' for bi-directional sliding
		speed: 600,
		timeout: 7500,
		prev: '.slideshow-left-button',
		next: '.slideshow-right-button',
		pager:  '#star-nav' 
    });

	$('.slideshow-left-button,.slideshow-right-button').fadeTo(0, .8);
	
	$('.slideshow-left-button,.slideshow-right-button').bind("mouseenter", function(e){
	        $(this).fadeTo(100, 1);
	    });
	
	$('.slideshow-left-button,.slideshow-right-button').bind("mouseleave", function(e){
	        $(this).fadeTo(100, .8);
	    });
	    
	    $('.home-slideshow').bind("mouseenter", function(e){
	        $('.home-slideshow').cycle('pause');
	    });
	    
	    $('.home-slideshow').bind("mouseleave", function(e){
	    	 event.preventDefault();
	        $('.home-slideshow').cycle('resume');
	    });

	   
}


// COMPANYFEED//////////////////////////////////////////////////


function createCompany() {

	//When page loads...
	$("#history").hide(); //Hide all content
	$("#about-nav").addClass("active").show(); //Activate first tab
	$("#about").show(); //Show first tab content

	//On Click Event
	$("#about-nav").click(function() {

		$("#history-nav").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$("#history").hide(); //Hide all tab content
		$("#about").fadeIn('slow'); //Fade in the active ID content
		return false;
	});
	
	
	//On Click Event
	$("#history-nav").click(function() {

		$("#about-nav").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$("#about").hide(); //Hide all tab content
		$("#history").fadeIn('slow'); //Fade in the active ID content
		return false;
	});

}

// FAQ//////////////////////////////////////////////////

$(document).ready(function() {
	
	
	 
	//ACCORDION BUTTON ACTION (ON CLICK DO THE FOLLOWING)
	$('.accordionButton').click(function() {

		//REMOVE THE ON CLASS FROM ALL BUTTONS
		$('.accordionButton').removeClass('on');
		  
		//NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
	 	$('.accordionContent').slideUp('normal');
   
		//IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
		if($(this).next().is(':hidden') == true) {
			
			//ADD THE ON CLASS TO THE BUTTON
			$(this).addClass('on');
			  
			//OPEN THE SLIDE
			$(this).next().slideDown('normal');
		 } 
		  
	 });
	  
	
	/*** REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	//ADDS THE .OVER CLASS FROM THE STYLESHEET ON MOUSEOVER 
	$('.accordionButton h4').mouseover(function() {
		$(this).addClass('over');
		
	//ON MOUSEOUT REMOVE THE OVER CLASS
	}).mouseout(function() {
		$(this).removeClass('over');										
	});
	
	/*** END REMOVE IF MOUSEOVER IS NOT REQUIRED ***/
	
	
	$('.accordionContent').hide();
	$('.accordionContent:first').show();
	$('.accordionButton:first').addClass('on');

});





// FORM--------------------------------------------------------------------//

function validate(f){
		var errors = '';
		if(f.name.value == ''){ errors = errors + 'Name.\n'}
		if(f.phone.value == ''){ errors = errors + 'Phone Number.\n'}
		if(f.email.value.indexOf('@') == -1){ errors = errors + 'Email.\n'}
		//if(f.answer.value != '4'){ errors = errors + 'You must not be good at math.\n'}
		if(errors != ''){
			alert('Please enter: \n\n' + errors);
			return false;
        } else {
        				return true;
        }
	}
	
// NEWS FEED--------------------------------------------------------------------//

$(document).ready(function() { 
$('#feed').gFeed({ 
url: 'http://www.biotronlabs.com/news/feed/', 
max: 1
//title: 'A List of W3c Gallery Blog' 
}); 
})