$(document).ready(function(e){
  $('.project-trigger').click(function() {
    $('.project-trigger').removeClass('active')
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
})
