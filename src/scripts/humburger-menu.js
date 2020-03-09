$(function() {
  $('.humburger-btn').on('click', () => {
    $('.header__menu').show();
    $('.humburger-btn').addClass('active');
    $('.header__wrapper').css('z-index', 'initial');
  });

});