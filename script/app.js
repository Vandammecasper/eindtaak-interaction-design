const information = function () {
  document.querySelector('.c-games').addEventListener('click', function () {
    this.classList.add('c-games-show');
    document.querySelector('.c-cross').classList.add('c-cross-show');
    document
      .querySelector('.c-games__lowest')
      .classList.add('c-games__lowest-hide');
    document
      .querySelector('.c-games__price')
      .classList.add('c-games__lowest-hide');
  });
};

const init = function () {
  information();
};

document.addEventListener('DOMContentLoaded', init);
