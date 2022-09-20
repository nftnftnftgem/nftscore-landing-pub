const BURGER = document.querySelector('.js-burger-open');
const NAV = document.querySelector('.js-burger');
const BODY = document.querySelector('body');
const CLASS_OVERFLOW = 'overflow';
const CLASS_ACTIVE = 'active';
const padding = window.innerWidth - BODY.clientWidth;

const burgerMenu = (() => {
  const burgeInit = () => {
    if (!BURGER) return;

    BURGER.addEventListener('click', (e) => {
      if (!e.currentTarget.classList.contains('active')) {
        openBurger();
      } else {
        closeBurger();
      }
    });
  };

  const openBurger = () => {
    BURGER.classList.add(CLASS_ACTIVE);
    NAV.classList.add(CLASS_ACTIVE);
    BODY.classList.add(CLASS_OVERFLOW);

    if (screen.width >= 1024) {
      BODY.style.paddingRight = `${padding}px`;
    }
  }

  const closeBurger = () => {
    BURGER.classList.remove(CLASS_ACTIVE);
    NAV.classList.remove(CLASS_ACTIVE);

    setTimeout(function () {
      BODY.classList.remove(CLASS_OVERFLOW);
      BODY.style.paddingRight = 0;
    }, 300);

  }


  $('a[href^="#"]').click(function () {
    var href = $.attr(this, 'href')

    closeBurger();

    $('html, body').animate({
        scrollTop: $(href).offset().top,
      },
      500,
    )
    return false
  });

  const init = () => {
    burgeInit();
  };

  return {
    init,
    closeBurger
  };
})();

export default burgerMenu;