//=================== Активация бургер-меню =================

let headerBurger = document.querySelector('.burger');
let navList = document.querySelector('.nav');

headerBurger.addEventListener("click", function (e) {
	headerBurger.classList.toggle('active');
	navList.classList.toggle('active');
});
//===========================================================
//====== Навигация при клике по меню header__nav ======
let navLinks = document.querySelectorAll('.nav__link');
let dataScrolls = document.querySelectorAll('[data-scroll]');

for (let dataScroll of dataScrolls) {
	let dataScrollId = dataScroll.getAttribute("data-scroll");
	let sectionId = document.querySelector(dataScrollId);

	dataScroll.onclick = function (e) {
		e.preventDefault();
		if (!dataScroll.classList.contains('active')) {
			for (let dataScroll of dataScrolls) {
				dataScroll.classList.remove('active');
			};
			
			headerBurger.classList.remove('active');
			navList.classList.remove('active');
			
			dataScroll.classList.add('active');
		}

		sectionId.scrollIntoView({
			behavior: 'smooth', // плавный скрол
		});
	}
}
//document.querySelector('[data-scroll]').click();
//===========================================================
//================= Класс fixed для header ==================

let header = document.querySelector('.header');
let wedo = document.querySelector('.wedo');

//Проверка после загрузки страницы
document.addEventListener("DOMContentLoaded", function () {
	checkScroll();
}); // ИЛИ 
//просто checkScroll();

//проверка при скроле страницы
window.onscroll = function () {
	checkScroll();
}

//Активция
function checkScroll() {
	let scrollPos = window.scrollY + 1;
	let wedoScrollPos = wedo.offsetTop;
	
	if (scrollPos >= wedoScrollPos) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
}
//===========================================================
$(function () {
	// слайдер intro

	$(".slider__pack").slick({
		infinite: false,
		speed: 800
	});

	// слайдер customers

	$(".customers__items").slick({
		dots: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 3000,
		speed: 1500,
		arrows: false
	});

	// появление карточек wedo

	AOS.init();

});
