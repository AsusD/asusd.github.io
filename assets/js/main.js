/* ----------------------------------------
		INSTALLING YOUR SCRIPTS
---------------------------------------- */

/* Подключаем прелоадер для сайта через библиотеку "jquery" */

$(window).on('load', function () {
    $preloader = $('.loaderArea'),
      $loader = $preloader.find('.loader');
    $loader.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
  });

/* Связываем скрипт из библиотеки "jquery" для плавного перехода по ссылкам навигации внутри сайта
(для этого всем ссылкам из навигации необходимо так же присвоить класс "scrollto") */

$(document).ready(function() {
$("a.scrollto").click(function () {
var elementClick = $(this).attr("href")
var destination = $(elementClick).offset().top;
jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1200);
return false;
});
});

/* Прописываем скрипт для кнопки меню */

$('.menu-btn').on('click', function(e) {
  e.preventDefault();
  $(this).toggleClass('menu-btn_active');
  $('.menu-nav').toggleClass('menu-nav_active');
});

/* Связываем скрипт из библиотеки "jquery" для кнопки "НАВЕРХ" ("ToTOP") */

$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
}
});
$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},1600);
});
});

/* Подключаем плавную прокрутку страниц из библиотеки "jquery" */

$(function() {  
	// Default
	jQuery.scrollSpeed(100, 800);

	// Custom Easing
	jQuery.scrollSpeed(100, 800, 'easeOutCubic');
});