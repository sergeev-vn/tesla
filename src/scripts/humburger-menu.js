$(function() {
  $('.humburger-btn').on('click', () => {
    
    $('.humburger-btn').hasClass('active')
      ? (
        $('.header__wrapper').css('z-index', ''),
        $('.header__menu').hide(),
        $('.humburger-btn').removeClass('active'),
        $('body').css('overflow', '')
      )
      : (
        $('.header__wrapper').css('z-index', 'initial'),
        $('.header__menu').show(300),
        $('.humburger-btn').addClass('active'),
        $('body').css('overflow', 'hidden')
      )
  });
});