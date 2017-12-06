$(document).ready(function(e){
  $('.project-trigger, .nav-bar a').click(function() {
    $('.project-trigger').removeClass('active')
    $('.nav-bar a').removeClass('active')
    $(this).addClass('active')
    $('.modal').fadeOut(200)
    const data = $(this).data('pro')
    $(`.modal[data-pro = ${data}]`).removeClass('hide').hide().fadeIn(400)
  })

  $('.close-modal').click(function(){
    $('.modal').fadeOut(200)
    $('.project-trigger').removeClass('active')
  })

  $('#group3').hover(function(){
    console.log('hola')
    $('#group3 .parallax__layer--base').css({'filter': 'grayscale(1)'})
    $('#group3 .overlay').css({'opacity': '1'})
  }, function(){
    $('#group3 .parallax__layer--base').css({'filter': 'grayscale(0)'})
    $('#group3 .overlay').css({'opacity': '0'})
  })

  $('.contact-links a').hover(function(){
    $(this).children('i').css('color', '#999')
  },function() {
    $(this).children('i').css('color', '#fff')
  })

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
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

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
  });

})