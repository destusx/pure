var slider = tns({
	container: '.carousel__inner',
	items: 1,
	slideBy: 'page',
	controls: false,
	nav: false,
	autoplay: true,
	speed: 1500,
	autoplayTimeout: 5000,
	autoplayButtonOutput: false
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });
});

new WOW().init();

(function($) {
    $(function() {
      
      $('ul.dessert__tabs').on('click', 'li:not(.dessert__tab_active)', function() {
        $(this)
          .addClass('dessert__tab_active').siblings().removeClass('dessert__tab_active')
          .closest('div.container').find('div.dessert__content').removeClass('dessert__content_active').eq($(this).index()).addClass('dessert__content_active');
      });
      
      $('.dessert__link').each(function (i) {
          $(this).on('click', function (e) {
              e.preventDefault();
              $('.dessert__main').eq(i).toggleClass('dessert__main_active');
              $('.dessert__list').eq(i).toggleClass('dessert__list_active');
          });
      });
      $('.dessert__back').each(function (i) {
        $(this).on('click', function (e) {
            e.preventDefault();
            $('.dessert__main').eq(i).toggleClass('dessert__main_active');
            $('.dessert__list').eq(i).toggleClass('dessert__list_active');
        });
    });
    });
    })(jQuery);