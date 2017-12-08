$(document).ready(function(e){

  if (window.innerWidth < 992) {
    const img_conainer_height = ((window.innerHeight * 1.4) - parseInt($('.about--text_container').css('height')) - 20) + 'px'
    $('.about--img_container').css({'height': img_conainer_height})
  }

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

  $('.project-trigger').click(function() {
    $('.project-trigger').removeClass('active')
    $(this).addClass('active')
    $('.modal').fadeOut(200)
    const data = $(this).data('pro')
    $(`.modal[data-pro = ${data}]`).removeClass('hide').hide().fadeIn(400)
    $('#group3 .work-msg').fadeOut(300)
    console.log(window.innerWidth);
    if (window.innerWidth < 992) {
      $('#group3').css({'height': '115vh'})
      $('.projects-bar').css({'top': '0', 'height': '40%'})
    }
  })

  $('.nav-bar a').click(function() {
    $('.nav-bar a').removeClass('active')
    $(this).addClass('active')
  })

  $('.close-modal').click(function(){
    $('.modal').fadeOut(200)
    $('.project-trigger').removeClass('active')
    $('#group3 .work-msg').fadeIn(300)
  })

  $('#group1, #group2, #group4').click(function(){
    if (window.innerWidth < 992) {
      $('.modal').fadeOut(200)
      $('.project-trigger').removeClass('active')
      $('#group3 .work-msg').fadeIn(300)
      $('#group3').css({'height': '80vh'})
      $('.projects-bar').css({'top': '25%', 'height': '80%'})
    }
  })

  $('#group3').hover(function(){
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
  $("a.scroll-item").on('click', function(event) {

    if (window.innerWidth < 992) {
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

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    console.log(scroll);
  });

})
