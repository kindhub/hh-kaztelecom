import VSwiper from "./modules/VSwiper";
import Video from "./modules/Video";
import Anchor from './modules/Anchor';
import Content from "./modules/Content";
import Nav from "./modules/Nav";
import VacancyBtn from "./modules/VacancyBtn";
/*
	--------------------------------------------
	--------------------------------------------
					SLIDERS
	--------------------------------------------
	--------------------------------------------
 */

	function initGallerySlider() {
		swiper.init('.tmpl-hh__gallery-slider', {
			loop: true,
			effect: "coverflow",
			slidesPerView: 3,
			centeredSlides: true,
			spaceBetween: 40,
      		centeredSlides: true,
      		coverflowEffect: {
        		rotate: 50,
        		stretch: 0,
        		depth: 100,
        		modifier: 1,
        		slideShadows: true,
      		},
			navigation: {
				prevEl: '.tmpl-hh__gallery-slider-arrow-prev',
				nextEl: '.tmpl-hh__gallery-slider-arrow-next',
			},
			breakpoints: {
				1339: {
					spaceBetween: 30
				},
				529: {
					spaceBetween: 15
				}
			},
		})
	}

/*
	--------------------------------------------
	--------------------------------------------
						COMMON
	--------------------------------------------
	--------------------------------------------
 */

	const swiper = new VSwiper();
	new Video();
	new Anchor();
	new Content();
	new Nav();
	new VacancyBtn();
	
	
	initGallerySlider();