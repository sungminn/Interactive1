$(document).ready(function() {

	setTimeout(function() {
		$('.fly-in-text').removeClass('hidden');
	}, 500);

	(function blink() { 
		$('.blink_me').fadeOut(500).fadeIn(500, blink); 
	});

	$('#email-link').click(function(){
        $('body').addClass('show-email');   
    });

    $('.drag').draggable();
	
	$('#final').click(function(){
        $(this).addClass('zoom');   
    });

    $('button').click(function(){
        alert('Thank you for your bank information :)');
        $('body').addClass('show-final')
    });

    $('#email-link').click(function(){
        $('body').addClass('show-email');   
    });



	$('#finalfinal-link').click(function(){
        $('body').addClass('show-finalfinal');   
    });


	$('#finalfinal-reverse').click(function(){
        $('body').removeClass('show-finalfinal');   
    });


	$('#finalfinal-link-1').click(function(){
        $('body').addClass('show-finalfinal-1');   
    });

    $('#finalfinal-reverse-1').click(function(){
        $('body').removeClass('show-finalfinal-1');   
    });

    $('#finalfinal-link-2').click(function(){
        $('body').addClass('show-finalfinal-2');   
    });

    $('#finalfinal-reverse-2').click(function(){
        $('body').removeClass('show-finalfinal-2');   
    });

	 $('#finalfinal-link-3').click(function(){
        $('body').addClass('show-finalfinal-3');   
    });

    $('#finalfinal-reverse-3').click(function(){
        $('body').removeClass('show-finalfinal-3');   
    });

 	$('#finalfinal-link-4').click(function(){
        $('body').addClass('show-finalfinal-4');   
    });

    $('#finalfinal-reverse-4').click(function(){
        $('body').removeClass('show-finalfinal-4');   
    });

  $('#finalfinal-link-5').click(function(){
        $('body').addClass('show-finalfinal-5');   
    });






// MODAL POP UPS//

// // Get the modal
// var modal = document.getElementById('myModal');

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal 
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }



	// $('body').click(function(){
 //        $(this).toggleClass('swap');   
 //    });

});
