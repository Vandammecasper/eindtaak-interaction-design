function information() {
  const title = document.getElementById('title');
  information = title.addEventListener('click', function () {
    console.log('gameinformation initialised');
    game.style.height = '501px';
    const title = document.getElementById('title');
    const lowest_price = document.getElementById('lowest_price');
    const price = document.getElementById('price');
    const cross = document.getElementById('cross');
    const release = document.getElementById('release');
    const date = document.getElementById('date');
    title.style.color = '#EB6E26';
    lowest_price.style.textAlign = 'left';
    lowest_price.style.marginLeft = '16px';
    lowest_price.style.marginTop = '16px';
    price.style.textAlign = 'left';
    price.style.marginLeft = '105px';
    cross.style.visibility = 'visible';
    release.style.visibility = 'visible';
    date.style.visibility = 'visible';
  });
  const cross = document.getElementById('cross');
  close = cross.addEventListener('click', function () {
    console.log('gameinformation closed');
    const title = document.getElementById('title');
    const lowest_price = document.getElementById('lowest_price');
    const price = document.getElementById('price');
    const cross = document.getElementById('cross');
    const release = document.getElementById('release');
    const date = document.getElementById('date');
    const game = document.getElementById('game');
    game.style.height = '59px';
    title.style.color = 'black';
    lowest_price.style.textAlign = 'right';
    lowest_price.style.marginRight = '15px';
    lowest_price.style.marginTop = '-31px';
    price.style.textAlign = 'right';
    price.style.marginRight = '15px';
    price.style.marginTop = '-26px';
    cross.style.visibility = 'hidden';
    release.style.visibility = 'hidden';
    date.style.visibility = 'hidden';
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('Script loaded!');
  information();
});
