var chart = '';

const showData = function (data) {
  document.querySelector('.c-games').classList.add('c-games__show');
  let htmlstring = '';
  for (let game of data.games) {
    if (game.name != undefined) {
      if (game.currentLowestPrice == 0) {
        htmlstring += `<div  id="${game.id}" class="c-games">
                   <h2 class="c-games__title" game-id="${game.id}" id="${game.id}">${game.name}</h2>
                   <p class="c-games__lowest" id="${game.id}">Lowest Price: </p>
                   <p class="c-games__price" id="${game.id}">Free</p>
                   </div>`;
      } else {
        htmlstring += `<div  id="${game.id}" class="c-games">
                   <h2 class="c-games__title" game-id="${game.id}" id="${game.id}">${game.name}</h2>
                   <p class="c-games__lowest" id="${game.id}">Lowest Price: €</p>
                   <p class="c-games__price" id="${game.id}"> ${game.currentLowestPrice}</p>
                   </div>`;
      }
    }
  }
  document.querySelector('.c-games').innerHTML = htmlstring;
  listentoGame();
};

const showGame = function (data) {
  var chart = document.querySelector('.c-chart');
  var parent = document.querySelector('.c-game');
  parent.removeChild(chart);
  const newChart = document.createElement('div');
  newChart.classList.add('c-chart');
  newChart.id = 'chart_prices';
  const game = document.querySelector('.c-game');
  insertAfter(newChart, game.lastElementChild);
  let html = '';
  console.log(data.currentLowestPrice);
  if (data.currentLowestPrice == 0) {
    console.log('no price');
    html = `
        <img class="c-cross" id="" src="assets/cross.png" alt="cross">
        <h2 class="c-games__title-show" game-id="">${data.name}</h2>
        <p class="c-games__lowest-info">Lowest Price: </p>
        <p class="c-games__price-info">Free</p>
        <p class="c-release">release date: </p>
        <p class="c-date">${data.releaseDate}</p>
        <p class="c-stores">amount of stores: </p>
        <p class="c-stores__amount">${data.stores.length}</p>
        <h3>Prices</h3>
        <div class="c-chart" id="chart_prices"></div>
    `;
  } else if (data.releaseDate == null) {
    console.log('no date');
    html = `
        <img class="c-cross" id="" src="assets/cross.png" alt="cross">
        <h2 class="c-games__title-show" game-id="">${data.name}</h2>
        <p class="c-games__lowest-info">Lowest Price: €</p>
        <p class="c-games__price-info">${data.currentLowestPrice}</p>
        <p class="c-release">release date: </p>
        <p class="c-date">Not Available</p>
        <p class="c-stores">amount of stores: </p>
        <p class="c-stores__amount">${data.stores.length}</p>
        <h3>Prices</h3>
        <div class="c-chart" id="chart_prices"></div>
    `;
  } else if (data.releaseDate == 'null' && data.currentLowestPrice == 0) {
    console.log('no date and no price');
    html = `
        <img class="c-cross" id="" src="assets/cross.png" alt="cross">
        <h2 class="c-games__title-show" game-id="">${data.name}</h2>
        <p class="c-games__lowest-info">Lowest Price: </p>
        <p class="c-games__price-info">Free</p>
        <p class="c-release">release date: </p>
        <p class="c-date">Not Available</p>
        <p class="c-stores">amount of stores: </p>
        <p class="c-stores__amount">${data.stores.length}</p>
        <h3>Prices</h3>
        <div class="c-chart" id="chart_prices"></div>
    `;
  } else {
    console.log('price and date');
    html = `
        <img class="c-cross" id="" src="assets/cross.png" alt="cross">
        <h2 class="c-games__title-show" game-id="">${data.name}</h2>
        <p class="c-games__lowest-info">Lowest Price: €</p>
        <p class="c-games__price-info">${data.currentLowestPrice}</p>
        <p class="c-release">release date: </p>
        <p class="c-date">${data.releaseDate}</p>
        <p class="c-stores">amount of stores: </p>
        <p class="c-stores__amount">${data.stores.length}</p>
        <h3>Prices</h3>
        <div class="c-chart" id="chart_prices"></div>
    `;
  }
  console.log(html);
  document.querySelector('.c-game').innerHTML = html;
  document.querySelector('.c-game').classList.add('c-game__show');
  document.querySelector('.c-games').classList.add('c-games__hide');
  prices(data);
};

const prices = function (data) {
  console.log('prices');
  let prices = [];
  let stores = [];
  for (let store of data.stores) {
    prices.push(store.price);
    stores.push(store.seller);
  }
  console.log(prices);
  console.log(stores);
  try {
    var options = {
      series: [
        {
          data: prices,
        },
      ],
      chart: {
        height: 350,
        type: 'bar',
        events: {
          click: function (chart, w, e) {},
        },
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1200,
          animateGradually: {
            enabled: true,
            delay: 150,
          },
          dynamicAnimation: {
            enabled: true,
            speed: 350,
          },
        },
      },
      plotOptions: {
        bar: {
          columnWidth: '50%',
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        categories: stores,
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
    };

    chart = new ApexCharts(document.querySelector('#chart_prices'), options);
    chart.render();
    console.log('chart rendered');
  } catch (error) {
    console.log(error);
  }
  closeGame();
};

const listentoGame = function () {
  game = document.querySelectorAll('.c-games__title');
  for (let gam of game) {
    gam.addEventListener('click', function () {
      console.log('clicked');
      console.log(gam.id);
      const gameid = gam.id;
      if (gameid != undefined) {
        getGame(gameid);
      }
    });
  }
};

function insertAfter(newNode, existingNode) {
  existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

const closeGame = function () {
  cross = document.querySelector('.c-cross');
  cross.addEventListener('click', function () {
    console.log('close');
    document.querySelector('.c-game').classList.remove('c-game__show');
    document.querySelector('.c-games').classList.remove('c-games__hide');
  });
};

const getData = async (endpoint) => {
  return fetch(endpoint)
    .then((r) => r.json())
    .catch((e) => console.error(e));
};

let getGames = async (title) => {
  const key = '69c07e858dmsh78a7e1ae0884494p108a7djsn46e153468a62';
  const api = `https://game-prices.p.rapidapi.com/games?title=${title}&region=be&offset=0&rapidapi-key=${key}`;

  document.querySelector('.c-gif').classList.add('c-gif__show');
  document.querySelector('.c-opacity').classList.add('c-opacity__hide');
  const data = await getData(api);
  document.querySelector('.c-gif').classList.remove('c-gif__show');
  document.querySelector('.c-opacity').classList.remove('c-opacity__hide');
  document.querySelector('.visual').classList.add('visual-show');
  console.log(data);
  showData(data);
};

let getGame = async (gameid) => {
  const gamekey = '69c07e858dmsh78a7e1ae0884494p108a7djsn46e153468a62';
  const gameapi = `https://game-prices.p.rapidapi.com/game/${gameid}?region=be&offset=0&rapidapi-key=${gamekey}`;

  document.querySelector('.c-gif').classList.add('c-gif__show');
  document.querySelector('.c-opacity').classList.add('c-opacity__hide');
  const data = await getData(gameapi);
  document.querySelector('.c-gif').classList.remove('c-gif__show');
  document.querySelector('.c-opacity').classList.remove('c-opacity__hide');
  console.log(data);
  showGame(data);
};

searchgame = function () {
  title = document.getElementById('game').value;
  console.log(title);
  getGames(title);
};

const init = function () {
  console.log('DOMContentLoaded');
};

document.addEventListener('DOMContentLoaded', init);
