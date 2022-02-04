/*ДИНАМИЧЕСКИЙ АДАПТИВ */
// Может перебрасывать блок(1 шт.)  в другой блок на определённое место(index)
// и на определённом width страницы
// Он в двох файлах JS dynamicAdapt.js and dynamicAdapt_dev.js
/*ДИНАМИЧЕСКИЙ АДАПТИВ */


/* Поддерживает ли браузер .webp изображение, если да то в body + class'webp' если нет то  'no-webp' =========================== */
function testWebP(callback) {
   var webP = new Image();
   webP.onload = webP.onerror = function() {
      callback(webP.height == 2);
   };
   webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function(support) {
   if (support == true) {
      document.querySelector('body').classList.add('webp');
   } else {
      document.querySelector('body').classList.add('no-webp');
   }
});
/* Поддерживает ли браузер .webp изображение, если да то в body + class'webp', если нет то 'no-webp' =========================== */

/* Опеределение устройства (_pc, _touch) ================================================================================= */
const isMobile = {
   Android: function() {
      return navigator.userAgent.match(/Android/i);
   },
   BackBerry: function() {
      return navigator.userAgent.match(/BackBerry/i);
   },
   iOS: function() {
      return navigator.userAgent.match(/iPhote|iPad|iPod/i);
   },
   Opera: function() {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function() {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function() {
      return (
         isMobile.Android() ||
         isMobile.BackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows()
      );
   }
};

if (isMobile.any()) {
   document.body.classList.add('_pc');

   let menuArrows = document.querySelectorAll('.menu__arrow');
   if (menuArrows.length > 0) {
      for (let index = 0; index < menuArrows.length; index++) {
         const menuArrow = menuArrows[index];
         menuArrow.addEventListener("click", function(e) {
            menuArrow.parentElement.classList.toggle('_active');
         });
      }
   }
} else {
   document.body.classList.add('_touch');
}
/* Опеределение устройства (_pc, _touch) ================================================================================= */

/* Slider-Swiper ====================================================================================================== */
/*Слайдер "Акційні товари" */
new Swiper('.slider__products-content', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   // Адаптивність по принципу Mobile
   breakpoints: {
      0: {
         slidesPerView: 2,
      },
      721: {
         slidesPerView: 3,
      },
      1200: {
         slidesPerView: 4,
      },
   },
   grabCursor: true,
   slidesPerView: 4,
});

/*Слайдер "Найпопулярніші товари" */
new Swiper('.slider__popularity-content', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-next-popularity',
      prevEl: '.swiper-button-prev-popularity',
   },
   // Адаптивність
   breakpoints: {
      0: {
         slidesPerView: 2,
      },
      721: {
         slidesPerView: 3,
      },
      1200: {
         slidesPerView: 4,
      },
   },
   grabCursor: true,
   slidesPerView: 4,
});

/*Слайдер "Наша команда" */
new Swiper('.slider__command-content', {
   // Стрелки
   navigation: {
      nextEl: '.swiper-button-next-command',
      prevEl: '.swiper-button-prev-command',
   },
   // Адаптивність
   breakpoints: {
      0: {
         slidesPerView: 2,
      },
      620: {
         slidesPerView: 3,
      },
   },
   grabCursor: true,
   slidesPerView: 3,
});
/* Slider-Swiper ====================================================================================================== */

/* Табы 							 ================================================================================================ */
/* Таб "Подбор резины" ==============================================================*/
document.querySelectorAll('.tabs__items').forEach((item) =>
   item.addEventListener('click', function(e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.tabs__items').forEach(
         (chiel) => chiel.classList.remove('tabs__items--active')
      );
      document.querySelectorAll('.tab__block').forEach(
         (chiel) => chiel.classList.remove('tab__block--active')
      );

      item.classList.add('tabs__items--active');
      document.getElementById(id).classList.add('tab__block--active');
   })
);
document.querySelector('.tabs__items').click(3);

/* Таб "Новости" ==============================================================*/
document.querySelectorAll('.tabs__items-news').forEach((item) =>
   item.addEventListener('click', function(e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.tabs__items-news').forEach(
         (chiel) => chiel.classList.remove('tabs__items-news--active')
      );
      document.querySelectorAll('.tab__block-news').forEach(
         (chiel) => chiel.classList.remove('tab__block-news--active')
      );

      item.classList.add('tabs__items-news--active');
      document.getElementById(id).classList.add('tab__block-news--active');
   })
);
document.querySelector('.tabs__items-news').click(3);
/* Табы 							 ================================================================================================ */

/* Select-Сastom ====================================================================================================== */
function tamingselect() {
   if (!document.getElementById && !document.createTextNode) { return; }

   // Classes for the link and the visible dropdown
   var ts_selectclass = 'turnintodropdown'; // class to identify selects
   var ts_listclass = 'turnintoselect'; // class to identify ULs
   var ts_boxclass = 'dropcontainer'; // parent element
   var ts_triggeron = 'activetrigger'; // class for the active trigger link
   var ts_triggeroff = 'trigger'; // class for the inactive trigger link
   var ts_dropdownclosed = 'dropdownhidden'; // closed dropdown
   var ts_dropdownopen = 'dropdownvisible'; // open dropdown
   /*
   	 Turn all selects into DOM dropdowns
   */
   var count = 0;
   var toreplace = new Array();
   var sels = document.getElementsByTagName('select');
   for (var i = 0; i < sels.length; i++) {
      if (ts_check(sels[i], ts_selectclass)) {
         var hiddenfield = document.createElement('input');
         hiddenfield.name = sels[i].name;
         hiddenfield.type = 'hidden';
         hiddenfield.id = sels[i].id;
         hiddenfield.value = sels[i].options[0].value;
         sels[i].parentNode.insertBefore(hiddenfield, sels[i])
         var trigger = document.createElement('a');
         ts_addclass(trigger, ts_triggeroff);
         trigger.href = '#';
         trigger.onclick = function() {
            ts_swapclass(this, ts_triggeroff, ts_triggeron)
            ts_swapclass(this.parentNode.getElementsByTagName('ul')[0], ts_dropdownclosed, ts_dropdownopen);
            return false;
         }
         trigger.appendChild(document.createTextNode(sels[i].options[0].text));
         sels[i].parentNode.insertBefore(trigger, sels[i]);
         var replaceUL = document.createElement('ul');
         for (var j = 0; j < sels[i].getElementsByTagName('option').length; j++) {
            var newli = document.createElement('li');
            var newa = document.createElement('a');
            newli.v = sels[i].getElementsByTagName('option')[j].value;
            newli.elm = hiddenfield;
            newli.istrigger = trigger;
            newa.href = '#';
            newa.appendChild(document.createTextNode(
               sels[i].getElementsByTagName('option')[j].text));
            newli.onclick = function() {
               this.elm.value = this.v;
               ts_swapclass(this.istrigger, ts_triggeron, ts_triggeroff);
               ts_swapclass(this.parentNode, ts_dropdownopen, ts_dropdownclosed)
               this.istrigger.firstChild.nodeValue = this.firstChild.firstChild.nodeValue;
               return false;
            }
            newli.appendChild(newa);
            replaceUL.appendChild(newli);
         }
         ts_addclass(replaceUL, ts_dropdownclosed);
         var div = document.createElement('div');
         div.appendChild(replaceUL);
         ts_addclass(div, ts_boxclass);
         sels[i].parentNode.insertBefore(div, sels[i])
         toreplace[count] = sels[i];
         count++;
      }
   }

   /*
   	 Turn all ULs with the class defined above into dropdown navigations
   */

   var uls = document.getElementsByTagName('ul');
   for (var i = 0; i < uls.length; i++) {
      if (ts_check(uls[i], ts_listclass)) {
         var newform = document.createElement('form');
         var newselect = document.createElement('select');
         for (j = 0; j < uls[i].getElementsByTagName('a').length; j++) {
            var newopt = document.createElement('option');
            newopt.value = uls[i].getElementsByTagName('a')[j].href;
            newopt.appendChild(document.createTextNode(uls[i].getElementsByTagName('a')[j].innerHTML));
            newselect.appendChild(newopt);
         }
         newselect.onchange = function() {
            window.location = this.options[this.selectedIndex].value;
         }
         newform.appendChild(newselect);
         uls[i].parentNode.insertBefore(newform, uls[i]);
         toreplace[count] = uls[i];
         count++;
      }
   }
   for (i = 0; i < count; i++) {
      toreplace[i].parentNode.removeChild(toreplace[i]);
   }

   function ts_check(o, c) {
      return new RegExp('\\b' + c + '\\b').test(o.className);
   }

   function ts_swapclass(o, c1, c2) {
      var cn = o.className
      o.className = !ts_check(o, c1) ? cn.replace(c2, c1) : cn.replace(c1, c2);
   }

   function ts_addclass(o, c) {
      if (!ts_check(o, c)) { o.className += o.className == '' ? c : ' ' + c; }
   }
}

window.onload = function() {
   tamingselect();
   // add more functions if necessary
}

/* Select-Сastom ====================================================================================================== */

/* HEADER       ======================================================================================================  */


/* Input Search ======================================================================================================  */

// Ширина экрана
const windowWidth = window.screen.width
   // Блок Header
const header = document.getElementById('header');
const inputSearch = document.getElementById('search');
const labelSarch = document.getElementById('label-search');

if (windowWidth <= 768) {
   inputSearch.placeholder = 'Введіть розмір'
};

if (windowWidth >= 501) {

   inputSearch.addEventListener('focus', clickInput);

   // Когда есть Focus в Inputs
   function clickInput() {
      const boxInput = document.getElementById('container-inquiry')
      boxInput.classList.add('active-inquiry');
      header.classList.add('header-active');
      labelSarch.classList.add('active-search');
   };

   // Когда нету Focus в Input
   inputSearch.onblur = function() {
      const boxInput = document.getElementById('container-inquiry');
      boxInput.classList.remove('active-inquiry');
      header.classList.remove('header-active');
      labelSarch.classList.remove('active-search');
   };
};

if (windowWidth <= 500) {

   inputSearch.placeholder = '';

   inputSearch.addEventListener('focus', inputMobile);
   const inputWrapper = document.getElementById('input--box');
   const containerInquiry = document.getElementById('container-inquiry');
   const arrowClose = document.getElementById('arrow-close');

   // Откроет вкладку поиска при фокусе у инпута
   function inputMobile() {
      if (inputSearch.classList.contains('search-active--mobile') === false) {
         inputSearch.classList.add('search-active--mobile');
         if (inputWrapper.classList.contains('input--box--mobile') === false) {
            inputWrapper.classList.add('input--box--mobile');
            if (containerInquiry.classList.contains('container-inquiry--mobile') === false) {
               containerInquiry.classList.add('container-inquiry--mobile');
               if (arrowClose.classList.contains('arrow-close--active') === false) {
                  arrowClose.classList.add('arrow-close--active');
                  arrowClose.addEventListener('click', 'closeInput');
               };
            };
         };
      };
   };
   // Закроет вкладку поиска при потери фокуса у инпута
   inputSearch.onblur = function() {
      inputSearch.classList.remove('search-active--mobile');
      inputWrapper.classList.remove('input--box--mobile');
      containerInquiry.classList.remove('container-inquiry--mobile');
      arrowClose.classList.remove('arrow-close--active');
   };
   // Закроет вкладку поиска при нажатии на крестик возле инпута
   function closeInput() {
      inputSearch.classList.remove('search-active--mobile');
      inputWrapper.classList.remove('input--box--mobile');
      containerInquiry.classList.remove('container-inquiry--mobile');
      arrowClose.classList.remove('arrow-close--active');
      arrowClose.removeEventListener('click', 'closeInput')
   };
   // END if <= 500
};
/* Input Search ======================================================================================================  */


/* Meny Icon =========================================================================================================  */
const menuIcon = document.getElementById('menu-icon');
menuIcon.addEventListener('click', menuClick);

function menuClick() {
   const menuIcon = document.getElementById('menu-icon');
   const menuBox = document.getElementById('box-menu');
   const bodyWrapper = document.getElementsByTagName('body');
   if (menuIcon.classList.contains('menu-icon--active')) {
      menuIcon.classList.remove('menu-icon--active');
      menuBox.classList.remove('menu__box--active');
      bodyWrapper[0].classList.remove('menu-active');
   } else {
      menuIcon.classList.add('menu-icon--active');
      menuBox.classList.add('menu__box--active');
      bodyWrapper[0].classList.add('menu-active');
   }
}
/* Meny Icon =========================================================================================================  */


/* HEADER       ======================================================================================================  */



































































































//