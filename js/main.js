var swiper_main = new Swiper('.swiper-container-main', {
	loop: false,
	slidesPerView: 1,
	spaceBetween: 0,
	autoplay: false,
	speed: false,
});
var swiper_mobile = new Swiper('.swiper-container-mobile', {
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	paginationClickable: true,
	spaceBetween: 0,
	centeredSlides: true,
	autoplay: 3500,
	speed: 1000,
	autoplayDisableOnInteraction: false
});
var swiper = new Swiper('.swiper-container-desctop', {
	pagination: '.swiper-pagination',
	nextButton: '.swiper-button-next',
	prevButton: '.swiper-button-prev',
	slidesPerView: 5,
	paginationClickable: true,
	spaceBetween: 0,
	autoplay: 3500,
	speed: 1000,
	autoplayDisableOnInteraction: false
});