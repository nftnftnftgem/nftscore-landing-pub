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
// const imgWrap = document.querySelector('.img-wrap');
// const overflowContainer = document.querySelector(".js-overflow-container");

// overflowContainer.style.position = "sticky";
// overflowContainer.style.height = imgs[0].offsetHeight + "px";
// overflowContainer.style.top = windowHeight / 2 - imgs[0].offsetHeight / 2 + "px";



// const topBlock = document.querySelector(".top-block");
// const bottomBlock = document.querySelector(".bottom-block");

// imgs.forEach( item => item.style.top = windowHeight / 2 - item.offsetHeight / 2 + "px" );

if (html.clientWidth >= 1024) {

  containers.forEach((item, index) => {
    if (index === 0) return;
    item.style.marginTop = -imgHeight + 'px';
  });

	function scrollHandler() {
    containers.forEach((container, index) => {
      // const topCoord = container.getBoundingClientRect().top;
    
      const bottomCoord = container.getBoundingClientRect().top;
      // const opacityValue = (topCoord + windowHeight - imgHeight) * 0.001;
      const opacityValue = (bottomCoord + imgs[0].offsetHeight) * 0.001;
    
      const block = container.querySelector('.ranking-img');
      // const borderRadiusValue = parseFloat(block.style.borderRadius || 50);
      // const borderRadiusValue = topCoord - (windowHeight - block.offsetHeight) * 1.3;
      if (index === containers.length - 1) return;
      block.style.opacity = opacityValue;
      // block.style.borderRadius = borderRadiusValue <= 0 ? 0 : borderRadiusValue + "%";
      });
  }

    scrollHandler();

    window.addEventListener("scroll", scrollHandler);
}