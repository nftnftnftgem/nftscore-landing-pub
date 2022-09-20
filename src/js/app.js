// You can write a call and import your functions in this file.
//
// This file will be compiled into app.js and will not be minified.
// Feel free with using ES6 here.

//import Accordion from './components/accordion';
import burgerMenu from './components/burger-menu';

burgerMenu.init();

const html = document.documentElement;
const containers = document.querySelectorAll('.js-img-container');
const imgs = document.querySelectorAll('.ranking-img');

const windowHeight = document.documentElement.clientHeight;
const imgHeight = imgs[0].offsetHeight;
imgs.forEach((item) => (item.style.top = windowHeight - item.offsetHeight + 'px'));


if (html.clientWidth >= 1024) {

  containers.forEach((item, index) => {
    if (index === 0) return;
    item.style.marginTop = -imgHeight + 'px';
  });

	function scrollHandler() {
    containers.forEach((container, index) => {
    
      const bottomCoord = container.getBoundingClientRect().top;
      const opacityValue = (bottomCoord + imgs[0].offsetHeight) * 0.001;
    
      const block = container.querySelector('.ranking-img');
      if (index === containers.length - 1) return;
      block.style.opacity = opacityValue;
      });
  }

    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
}