const activeClass="active";document.querySelectorAll('input[type="tel"]').forEach(e=>{IMask(e,{mask:"+{7} (000) 000-00-00"})}),document.querySelectorAll("[data-thousands-separator]").forEach(e=>{e.addEventListener("change",function(){IMask(e,{mask:Number,min:0,max:999999,thousandsSeparator:" ",normalizeZeros:!0})})});const tabIdList=document.querySelectorAll("[data-tab-id]");if(tabIdList){let e=new Set;for(const f of tabIdList)e.add(f.dataset.tabId);function tabSwith(e,t,o){for(const s of t.controlList)s.classList.remove(activeClass);for(const n of t.blockList)n.style.display="none";document.querySelector(`[data-tab-id="${o}"][data-tab-control="${e}"]`).classList.add(activeClass),document.querySelector(`[data-tab-id="${o}"][data-tab-block="${e}"]`).style.display=""}for(const l of e){const m={controlList:document.querySelectorAll(`[data-tab-id="${l}"][data-tab-control]`),blockList:document.querySelectorAll(`[data-tab-id="${l}"][data-tab-block]`)};tabSwith(m.controlList[0].dataset.tabControl,m,l);for(const n of m.controlList)n.addEventListener("click",()=>{tabSwith(n.dataset.tabControl,m,l)})}}const swiper=new Swiper(".swiper-oneslide",{loop:!0,speed:500,pagination:{el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}}),cardsSwiper=new Swiper(".cards__slider .swiper-fourslide",{loop:!1,speed:500,slidesPerView:1,spaceBetween:20,breakpoints:{500:{slidesPerView:2},700:{slidesPerView:3},1024:{slidesPerView:4}},navigation:{nextEl:".cards__slider .swiper-button-next",prevEl:".cards__slider .swiper-button-prev"}}),swiperWithoutPag=new Swiper(".slider-withone .swiper-container",{loop:!0,speed:500,navigation:{nextEl:".slider-withone .swiper-button-next",prevEl:".slider-withone .swiper-button-prev"}}),thumbsSwiper=new Swiper(".swiper-thumbs",{speed:500,slidesPerView:5,spaceBetween:20}),sliderWithThumbs=new Swiper(".swiper-with-thumbs",{speed:500,allowTouchMove:!1,navigation:{nextEl:".swiper-with-thumbs .swiper-button-next",prevEl:".swiper-with-thumbs .swiper-button-prev"},thumbs:{swiper:thumbsSwiper}}),toggleFullMenu=document.querySelector("[data-catalog-toggle]"),fullMenu=document.querySelector("[data-full-menu"),closeBtn=document.querySelector("[data-close]"),searchBtn=document.querySelector(".search-form__btn"),burgerBtn=document.querySelector("[data-burger]"),moreBtn=document.querySelector("[data-more-text]"),overlayForClose=document.querySelector(".overlay"),body=document.body;function openedWindow(e){e.classList.contains("active")&&(overlayForClose.classList.add("active"),body.style.overflowY="hidden")}function closeWindow(t){const e=t.querySelectorAll("[data-close]"),o=t.querySelector("[data-cancel-btn]");e.forEach(e=>{e.addEventListener("click",function(){t.classList.remove("active"),overlayForClose.classList.remove("active"),body.removeAttribute("style")})}),overlayForClose.addEventListener("click",function(e){t.classList.remove("active"),overlayForClose.classList.remove("active"),body.removeAttribute("style")}),o&&o.addEventListener("click",function(){t.classList.remove("active"),overlayForClose.classList.remove("active"),body.removeAttribute("style")})}function popup(){const e=document.querySelectorAll("[data-popup]"),t=document.querySelectorAll("[data-modal-trigger]");e.forEach(o=>{openedWindow(o),closeWindow(o),t.forEach(t=>{t.addEventListener("click",function(e){e.preventDefault();e=t.getAttribute("data-modal-trigger");o.classList.remove("active"),e===o.id&&(o.classList.add("active"),openedWindow(o)),o.classList.contains("active")&&closeWindow(o)})})})}if(window.onclick=e=>{if(e.target==toggleFullMenu&&(fullMenu.classList.add("show"),body.style.overflow="hidden"),e.target==closeBtn&&(fullMenu.classList.remove("show"),body.removeAttribute("style")),e.target==searchBtn?searchBtn.nextElementSibling.classList.add("show"):e.target!==searchBtn.nextElementSibling.childNodes[1]&&searchBtn.nextElementSibling.classList.remove("show"),e.target==burgerBtn){const t=document.querySelector(".header");t.classList.toggle("active"),t.classList.contains("active")?body.style.overflow="hidden":body.removeAttribute("style")}e.target==moreBtn&&(moreBtn.previousElementSibling.classList.toggle("isOpen"),moreBtn.previousElementSibling.classList.contains("isOpen")?moreBtn.innerHTML="Свернуть":moreBtn.innerHTML="Развернуть")},popup(),document.querySelectorAll(".accordion").length){const C=document.querySelectorAll(".accordion__btn"),D=document.querySelectorAll(".accordion");D.forEach(e=>{new Accordion(e)})}const fileFields=document.querySelectorAll("[data-file-field]");fileFields.forEach(e=>{const t=e.querySelector("label span"),o=e.querySelector('input[type="file"]');o.addEventListener("change",()=>{t.innerHTML=o.files[0].name})});const showBlockBtns=document.querySelectorAll("[data-change-data]");showBlockBtns.forEach(e=>{const t=document.querySelector(`[data-change-block="${e.dataset.changeData}"]`);t.classList.remove("active"),cancelBtn=t.querySelector("[data-change-cancel]"),e.addEventListener("click",function(){t.classList.toggle("active")}),cancelBtn.addEventListener("click",function(){t.classList.remove("active")})});