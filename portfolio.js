$(document).ready(function(e){

  // With the next function the width of the image container in the about secction adjusts itself to devise screen and the images do too in consequence
  if (window.innerWidth < 768) {
    const img_conainer_height = ((window.innerHeight * 2) - parseInt($('.about--text_container').css('height')) - 20) + 'px'
    $('.about--img_container').css({'height': img_conainer_height})
  }

  // This function implements the hamburger icon functionality
  $( "#nav-toggle" ).on( "click", function() {
    $(this).toggleClass( "active-ham" );
    if ($(this).hasClass("active-ham")) {
      $('.nav-bar').css({'height': '25vh'})
      $('.scroll-item').fadeIn(500)
    } else {
      $('.nav-bar').css({'height': '3vh'})
      $('.scroll-item').fadeOut(200)
    }
  });

  // This next block indicates the actions that have to be taken when the user selects one project to see

  $('.project-trigger').click(function() {
    $('.project-trigger').removeClass('active')
    $(this).addClass('active')
    $('.modal').fadeOut(200)
    const data = $(this).data('pro')
    $(`.modal[data-pro = ${data}]`).removeClass('hide').hide().fadeIn(400)
    $('#work .work-msg').fadeOut(300)
    console.log(window.innerWidth);
    if (window.innerWidth < 768) {
      $('#work').css({'height': '115vh'})
      $('.projects-bar').css({'top': '0', 'height': '40%'})
    }
  })

  // Styling of the selected item

  $('.nav-bar a').click(function() {
    $('.nav-bar a').removeClass('active')
    $(this).addClass('active')
  })

  // Close the project-modal of the Work section

  $('.close-modal').click(function(){
    $('.modal').fadeOut(200)
    $('.project-trigger').removeClass('active')
    $('#work .work-msg').fadeIn(300)
  })

  // styling of the work section when other section is touched.(the opened project closes)

  $('#home, #about, #contact').click(function(){
    $('.modal').fadeOut(200)
    $('.project-trigger').removeClass('active')
    $('#work .work-msg').fadeIn(300)
    if (window.innerWidth < 768) {
      $('#work').css({'height': '80vh'})
      $('.projects-bar').css({'top': '25%', 'height': '80%'})
    }
  })

  // Hover styling of the work section

  $('#work').hover(function(){
    $('#work .parallax__layer--base').css({'filter': 'grayscale(1)'})
    $('#work .overlay').css({'opacity': '1'})
  }, function(){
    $('#work .parallax__layer--base').css({'filter': 'grayscale(0)'})
    $('#work .overlay').css({'opacity': '0'})
  })

  // Hover styling of links in contact section

  $('.contact-links a').hover(function(){
    $(this).children('i').css('color', '#999')
  },function() {
    $(this).children('i').css('color', '#fff')
  })

  // Add smooth scrolling to all links
  $("a.scroll-item").on('click', function(event) {

    if (window.innerWidth < 768) {
      $( "#nav-toggle" ).toggleClass( "active-ham" );
      $('.nav-bar').css({'height': '3vh'})
      $('.scroll-item').fadeOut(200)
    }

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('.parallax').animate({
        scrollTop: $(hash).offset().top
      }, 100, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

})
