const information_open = function () {
  document
    .querySelector('.c-games__title')
    .addEventListener('click', function () {
      console.log('information opening');
      document.querySelector('.c-games').classList.add('c-games-show');
      document.querySelector('.c-cross').classList.add('c-cross-show');
      document
        .querySelector('.c-games__lowest')
        .classList.add('c-games__lowest-hide');
      document
        .querySelector('.c-games__price')
        .classList.add('c-games__lowest-hide');
      document
        .querySelector('.c-games__title')
        .classList.add('c-games__title-show');
      document
        .querySelector('.c-games__lowest-info')
        .classList.add('c-games__lowest-info-show');
      document
        .querySelector('.c-games__price-info')
        .classList.add('c-games__price-info-show');
      document.querySelector('.c-release').classList.add('c-release-show');
      document.querySelector('.c-date').classList.add('c-date-show');
      document.querySelector('.c-stores').classList.add('c-stores-show');
      document
        .querySelector('.c-stores__amount')
        .classList.add('c-stores__amount-show');
      document.querySelector('h3').classList.add('h3-show');
    });
};

const information_close = function () {
  console.log('information closing');
  document.querySelector('.c-cross').addEventListener('click', function () {
    document.querySelector('.c-games').classList.remove('c-games-show');
    document.querySelector('.c-cross').classList.remove('c-cross-show');
    document
      .querySelector('.c-games__lowest')
      .classList.remove('c-games__lowest-hide');
    document
      .querySelector('.c-games__price')
      .classList.remove('c-games__lowest-hide');
    document
      .querySelector('.c-games__title')
      .classList.remove('c-games__title-show');
    document
      .querySelector('.c-games__lowest-info')
      .classList.remove('c-games__lowest-info-show');
    document
      .querySelector('.c-games__price-info')
      .classList.remove('c-games__price-info-show');
    document.querySelector('.c-release').classList.remove('c-release-show');
    document.querySelector('.c-date').classList.remove('c-date-show');
    document.querySelector('.c-stores').classList.remove('c-stores-show');
    document
      .querySelector('.c-stores__amount')
      .classList.remove('c-stores__amount-show');
    document.querySelector('h3').classList.remove('h3-show');
  });
};

const init = function () {
  console.log('DOMContentLoaded');
  information_open();
  information_close();
};

document.addEventListener('DOMContentLoaded', init);
