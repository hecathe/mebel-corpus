const activeClass = "active";

document.querySelectorAll('input[type="tel"]').forEach((elem) => {
	const phoneMask = IMask(elem, {
		mask: '+{7} (000) 000-00-00'
	});
})

document.querySelectorAll('[data-thousands-separator]').forEach((input) => {
	input.addEventListener('change', function() {
		const thousandMask = IMask(input, {
			mask: Number,
			min: 0,
			max: 999999,
			thousandsSeparator: ' ',
			normalizeZeros: true,
		});
	})
})

// Переключение табов
// demo
// button(data-tab-id="tabId1", data-tab-control="tab1") 1
// button(data-tab-id="tabId1", data-tab-control="tab2") 2
// .tab-block(data-tab-id="tabId1", data-tab-block="tab1") 1
// .tab-block(data-tab-id="tabId1", data-tab-block="tab2") 2
const tabIdList = document.querySelectorAll("[data-tab-id]");
if (tabIdList) {
	let tabGroupList = new Set();
	for (const tabId of tabIdList) {
		tabGroupList.add(tabId.dataset.tabId);
	}

	function tabSwith(name, tab, tabGroup) {
		for (const control of tab.controlList) control.classList.remove(activeClass);
		for (const block of tab.blockList) block.style.display = "none";
		document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-control="${name}"]`).classList.add(activeClass);
		document.querySelector(`[data-tab-id="${tabGroup}"][data-tab-block="${name}"]`).style.display = "";
	}

	for (const tabGroup of tabGroupList) {
		const tab = {
			controlList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-control]`),
			blockList: document.querySelectorAll(`[data-tab-id="${tabGroup}"][data-tab-block]`),
		};
		// console.log(tab);
		tabSwith(tab.controlList[0].dataset.tabControl, tab, tabGroup);

		for (const control of tab.controlList) {
			control.addEventListener("click", () => {
				tabSwith(control.dataset.tabControl, tab, tabGroup);
			});
		}
	}
}

//sliders
const swiper = new Swiper('.swiper-oneslide', {
	// Optional parameters
	loop: true,
	speed: 500,

	// If we need pagination
	pagination: {
		el: '.swiper-pagination',
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
})

const cardsSwiper = new Swiper('.cards__slider .swiper-fourslide', {
	// Optional parameters
	loop: false,
	speed: 500,
	slidesPerView: 1,
	spaceBetween: 20,

	breakpoints: {
		500: {
			slidesPerView: 2,
		},
		700: {
			slidesPerView: 3,
		},
		1024: {
			slidesPerView: 4,
		}
	},

	// Navigation arrows
	navigation: {
		nextEl: '.cards__slider .swiper-button-next',
		prevEl: '.cards__slider .swiper-button-prev',
	},
})

const swiperWithoutPag = new Swiper('.slider-withone .swiper-container', {
	// Optional parameters
	loop: true,
	speed: 500,

	// Navigation arrows
	navigation: {
		nextEl: '.slider-withone .swiper-button-next',
		prevEl: '.slider-withone .swiper-button-prev',
	},
})

const thumbsSwiper = new Swiper('.swiper-thumbs', {
	// Optional parameters
	speed: 500,
	spaceBetween: 20,
	slidesPerView: 4,
})
const sliderWithThumbs = new Swiper('.swiper-with-thumbs', {
	// Optional parameters
	speed: 500,
    watchSlidesProgress: true,

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-with-thumbs .swiper-button-next',
		prevEl: '.swiper-with-thumbs .swiper-button-prev',
	},
	thumbs: {
		swiper: thumbsSwiper,
	}
})

const toggleFullMenu = document.querySelector('[data-catalog-toggle]');
const fullMenu = document.querySelector('[data-full-menu]');
const closeBtn = document.querySelector('[data-close]');
const searchBtn = document.querySelector('.search-form__btn');
const burgerBtn = document.querySelector('[data-burger]')
const moreBtn = document.querySelector('[data-more-text]');
const overlayForClose = document.querySelector('.overlay')
const body = document.body;

window.onclick = (event) => {
	//header
	if (event.target == toggleFullMenu) {
		fullMenu.classList.add('show')
		body.classList.add('scroll-hidden')
	}

	if (event.target == closeBtn) {
		fullMenu.classList.remove('show')
		body.classList.remove('scroll-hidden')
	}

	const handler = (e) => {
		if (e.keyCode === 13) {
			e.target.closest('.search-form').submit();
		}
	}

	if (event.target == searchBtn || event.target == document.querySelector('.search-form__mobile-btn') || event.target == document.querySelector('.search-form__input')) {
		if (window.screen.width <= 975) {
			event.preventDefault();
		}
		searchBtn.nextElementSibling.classList.add('show');
		document.querySelector('.search-form__input').addEventListener("keyup", handler);
		document.querySelector('.search-form__input').focus();
	} else if (event.target !== searchBtn.nextElementSibling.childNodes[1]) {
		searchBtn.nextElementSibling.classList.remove('show');
		document.querySelector('.search-form__input').removeEventListener('keyup', handler);
	}

	if (event.target == burgerBtn) {
		const header = document.querySelector('.header')
		header.classList.toggle('active')

		if (header.classList.contains('active')) {
			body.classList.add('scroll-hidden')
		} else {
			body.classList.remove('scroll-hidden')
		}
	}

	//about block
	if (event.target == moreBtn) {
		moreBtn.previousElementSibling.classList.toggle('isOpen');

		if (moreBtn.previousElementSibling.classList.contains('isOpen')) {
			moreBtn.innerHTML = 'Свернуть'
		} else {
			moreBtn.innerHTML = 'Развернуть'
		}
	}

	// modal
	// const modalTriggerButtons = document.querySelectorAll('[data-modal-trigger]');

	// modalTriggerButtons.forEach((triggerModal) => {
	// 	if (event.target == triggerModal) {
	// 		const triggerData = triggerModal.getAttribute('data-modal-trigger')
	// 		const modals = document.querySelectorAll('[data-popup]')

	// 		modals.forEach((modal) => {
	// 			const modalId = modal.id
	// 			modal.classList.remove('active')

	// 			if (triggerData === modalId) {
	// 				modal.classList.add('active')
	// 				openedWindow(modal);
	// 			}

	// 			if (modal.classList.contains('active')) {
	// 				closeWindow(modal)
	// 			}
	// 		})
	// 	}
	// })
}

const searchMobileButton = document.querySelector('.search-form__mobile-btn');
if (searchMobileButton) {
	searchMobileButton.addEventListener('click', (e) => {
		e.target.closest('.search-form').submit();
	});
}

function openedWindow(elem) {
	if (elem.classList.contains('active')) {
		overlayForClose.classList.add('active')
		body.classList.add('scroll-hidden')
	}
}

function closeWindow(elem) {
	const closeModal = elem.querySelectorAll('[data-close]')
	const cancelBtn = elem.querySelector('[data-cancel-btn]')

	closeModal.forEach(closeBtn => {
		closeBtn.addEventListener('click', function() {
			elem.classList.remove('active')
			overlayForClose.classList.remove('active');
			body.classList.remove('scroll-hidden')
		})
	})

	overlayForClose.addEventListener('click', function(event) {
		elem.classList.remove('active')
		overlayForClose.classList.remove('active')
		body.classList.remove('scroll-hidden')
	})

	if (cancelBtn) {
		cancelBtn.addEventListener('click', function() {
			elem.classList.remove('active')
			overlayForClose.classList.remove('active');
			body.classList.remove('scroll-hidden')
		})
	}
}

//popup
function popup() {
	const popups = document.querySelectorAll('[data-popup]');
	const popupTriggers = document.querySelectorAll('[data-modal-trigger]');

	popups.forEach((popup) => {
		openedWindow(popup)
		closeWindow(popup)

		popupTriggers.forEach((item) => {
			item.addEventListener('click', function(event) {
				event.preventDefault();
				const trigger = item.getAttribute('data-modal-trigger')
				popup.classList.remove('active')

				if (trigger === popup.id) {
					popup.classList.add('active')
					openedWindow(popup)
				}

				if (popup.classList.contains('active')) {
					closeWindow(popup)
				}
			})
		})
	})
}

popup()

// function modals() {
// 	const popupTriggers = document.querySelectorAll('[data-modal-trigger]');

// 	popupTriggers.forEach((popupTrigger) => {
// 		const popup = document.querySelector(`[id="${popupTrigger.dataset.modalTrigger}"]`)
// 		// console.log(popup);
// 		openedWindow(popup)
// 		closeWindow(popup)

// 		popupTrigger.addEventListener('click', function(event) {
// 			event.preventDefault();
// 			// console.log(popupTrigger);

// 			if (popupTrigger.dataset.modalTrigger == popup.id) {
// 				popup.classList.remove('active')
// 				popup.classList.add('active')
// 				openedWindow(popup)
// 			}

// 			if (popup.classList.contains('active')) {
// 				closeWindow(popup)
// 			}
// 		})
// 	})
// }

// modals()


// accordion
if (document.querySelectorAll('.accordion').length) {
	const accordions = document.querySelectorAll('.accordion');

	accordions.forEach((accordion) => {
		new Accordion(accordion);
	})
}


// input
const fileFields = document.querySelectorAll('[data-file-field]');

fileFields.forEach((item) => {
	const label = item.querySelector('label span');
	const input = item.querySelector('input[type="file"]');

	input.addEventListener('change', () => {
		label.innerHTML = input.files[0].name
	})
})

//account blocks
const showBlockBtns = document.querySelectorAll('[data-change-data]');

showBlockBtns.forEach((showBtn) => {
	const block = document.querySelector(`[data-change-block="${showBtn.dataset.changeData}"]`);
	let accBlock = block.closest('.account__block')
	let inputs = accBlock.querySelectorAll('input');
	let cancelBtn = block.querySelector('[data-change-cancel]');

	block.classList.remove('active');

	accBlock.onclick = (event) => {
		if (event.target === showBtn || event.target === cancelBtn) {
			block.classList.toggle('active')

			inputs.forEach((input) => {
				if (!block.classList.contains('active')) {
					input.setAttribute("disabled", "disabled");
					input.parentElement.classList.add('disabled');
				} else {
					input.removeAttribute("disabled");
					input.parentElement.classList.remove('disabled');
				}
			})
		}
	}
})

//toggle opt&roz prices
const cardInfoBlock = document.querySelector('.catalog-item__info');

if (cardInfoBlock) {
	const priceToggles = cardInfoBlock.querySelectorAll('[data-price-btn]');
	const priceBlocks = cardInfoBlock.querySelectorAll('[data-price-block]');

	priceToggles.forEach((input) => {
		priceBlocks.forEach((block) => {
			input.addEventListener('change', function() {
				if (input.dataset.priceBtn === block.dataset.priceBlock) {
					block.classList.add('active')
				} else {
					block.classList.remove('active')
				}
			})
		})
	})

	// toggle colors
	const colorBtnToggles = cardInfoBlock.querySelectorAll('[data-color-btn]');
	const colorNames = cardInfoBlock.querySelectorAll('[data-color]');

	colorBtnToggles.forEach((toggle) => {
		toggle.addEventListener('change', function() {
			colorNames.forEach(name => {
				if (toggle.dataset.colorBtn === name.dataset.color) {
					name.classList.add(activeClass)
				} else {
					name.classList.remove(activeClass)
				}
			});

			const possibleOptions = document.querySelector('.possible_options');
			if (possibleOptions) {
				const images = possibleOptions.querySelectorAll(`[data-color-xmlid="${toggle.dataset.colorBtn}"] > img`);
				if (images.length) {
					// let htmlMain = '';
					// let htmlThumb = '';
					//
					// images.forEach((image) => {
					// 	htmlMain += `
					// 	<div class="swiper-slide">
					// 		<div class="catalog-item__slide">
					// 			<img src="${image.src}" alt="">
					// 			<button class="catalog-item__zoom-btn zoom-btn spotlight" data-src="${image.src}">
					// 				<svg width="30" height="30">
					// 					<use xlink:href="assets/images/sprite.svg#bi_zoom-in"></use>
					// 				</svg>
					// 			</button>
					// 		</div>
					// 	</div>`;
					//
					// 	htmlThumb += `
					// 	<div class="swiper-slide">
					// 		<img src="${image.src}" alt="" class="catalog-item__thumb-img">
					// 	</div>
					// `;
					// });
					//
					// document.querySelector('.catalog-item__slider .swiper-with-thumbs .swiper-wrapper').innerHTML = htmlMain;
					// document.querySelector('.catalog-item__slider .swiper-thumbs .swiper-wrapper').innerHTML = htmlThumb;
					//
					// thumbsSwiper.update();
					// sliderWithThumbs.update();
				}
			}

			const currentColor = toggle.dataset.colorBtn;
			const optionItem = document.querySelector(`.possible_options > .item[data-color-xmlid="${currentColor}"]`);
			const currentCount = optionItem ? optionItem.dataset.offerCount : null;
			const countWrapper = document.querySelector('.color-list__count');
			const countValueWrapper = document.querySelector('.catalog-list__count-value');
			if (currentCount !== null) {
				countWrapper.style.display = 'block';
				countValueWrapper.innerText = currentCount;
			} else {
				countWrapper.style.display = 'none';
			}
		})
	})
	//toggle colors end
}
//toggle opt&roz prices end



//fixed header
const header = document.querySelector('.header');
sticky = header.offsetTop

window.onscroll = () => {
	if (window.pageYOffset > sticky) {
		header.classList.add('sticky');
	} else {
		header.classList.remove('sticky');
	}
}
//fixed header end

// document.querySelectorAll('.js-range-slider').forEach((item) => {
// 	ionRangeSlider(`.js-range-slider[name="${item.name}"]`, {
// 		skin: 'round',
// 		onFinish: ((e) => {
// 			const inputMin = document.querySelector(`input[type="hidden"][name="min-${item.name}"]`);
// 			const inputMax = document.querySelector(`input[type="hidden"][name="max-${item.name}"]`);
// 			if (inputMin) inputMin.value = e.from;
// 			if (inputMax) inputMax.value = e.to;
// 		}),
// 	});
// });

// $(".js-range-slider").each((item) => {
// 	this.ionRangeSlider({
// 		skin: 'round',
// 	});
// })

$(".js-range-slider").ionRangeSlider({
	skin: 'round',
	onFinish: ((e) => {
		const name = e.input[0].name;
		const inputMin = $(`input.full-filter__hidden-input[name="${name}_MIN"]`);
		const inputMax = $(`input.full-filter__hidden-input[name="${name}_MAX"]`);
		console.log({
			inputMin, inputMax, asd: e.from, asdfg: e.to,
		});
		if (inputMin) {
			inputMin.attr('value', e.from);
			inputMin.trigger('keyup');
		}
		if (inputMax) {
			inputMax.attr('value', e.to);
			inputMax.trigger('keyup');
		}
	}),
});

const filterSelects = document.querySelectorAll('.filter-menu');
filterSelects.forEach((select) => {
	select.addEventListener('change', (e) => {
		const value = e.target.value;
		location.href = value === 'default' ? location.href.split('?')[0] : value;
	});
});
