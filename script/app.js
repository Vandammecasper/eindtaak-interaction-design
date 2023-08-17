var chart = '';

const showData = function (data) {
  document.querySelector('.c-games').classList.add('c-games__show');
  let htmlstring = '';
  for (let game of data) {
    if (game.name != undefined) {
      if (game.currentLowestPrice == 0) {
        htmlstring += `<div  id="${game.id}" class="c-games">
                   <h2 class="c-games__title">${game.name}</h2>
                   </div>`;
      } else {
        htmlstring += `<div  id="${game.id}" class="c-games">
                   <h2 class="c-games__title">${game.name}</h2>
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
  html = `
        <img class="c-cross" id="" src="assets/cross.png" alt="cross">
                <h2 class="c-games__title-show" game-id="${data.name}">${data.name}</h2>
                <p class="c-games__lowest-info">hp: </p>
                <p class="c-games__price-info">${data.hp}</p>
                <p class="c-release">attack damage: </p>
                <p class="c-date">${data.attack_damage}</p>
                <p class="c-stores">movement speed: </p>
                <p class="c-stores__amount">${data.movement_speed}</p>
                <p class="c-stores">range: </p>
                <p class="c-range">${data.range}</p>
                <div class="c-chart" id="chart_prices"></div>
    `;
  document.querySelector('.c-game').innerHTML = html;
  document.querySelector('.c-game').classList.add('c-game__show');
  document.querySelector('.c-games').classList.add('c-games__hide');
  setTimeout(function () {
    prices(data);
  }, 1000);
};

const prices = function (data) {
  console.log('prices');
  try {
    var options = {
      series: [
        {
          name: 'Series 1',
          data: [
            data.attack_damage,
            data.attack_speed,
            data.hp,
            data.movement_speed,
            data.magic_resist,
            data.armor,
            data.range,
          ],
        },
      ],
      chart: {
        height: 350,
        type: 'radar',
      },
      title: {
        text: `${data.name} statistics`,
      },
      xaxis: {
        categories: [
          'attack damage',
          'attack speed',
          'hp',
          'movement speed',
          'magic resist',
          'armor',
          'range',
        ],
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
      console.log(gam.innerHTML);
      const gameid = gam.innerHTML.toLowerCase();
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

let getGames = async () => {
  const key = '69c07e858dmsh78a7e1ae0884494p108a7djsn46e153468a62';
  const api = `https://league-of-legends-stats.p.rapidapi.com/champions/stats?rapidapi-key=${key}`;

  document.querySelector('.c-gif').classList.add('c-gif__show');
  document.querySelector('.c-opacity').classList.add('c-opacity__hide');
  const data = await getData(api);
  showData(data);
  if (data != undefined) {
    document.querySelector('.c-gif').classList.remove('c-gif__show');
    document.querySelector('.c-opacity').classList.remove('c-opacity__hide');
    showData(data);
  } else {
    document.querySelector('.c-gif').classList.remove('c-gif__show');
    document.querySelector('.c-opacity').classList.remove('c-opacity__hide');
    document.querySelector('.c-servers').classList.add('c-servers__show');
    console.log('no data');
  }
};

let getGame = async (champion) => {
  const gamekey = '69c07e858dmsh78a7e1ae0884494p108a7djsn46e153468a62';
  const gameapi = `https://league-of-legends-stats.p.rapidapi.com/champions/${champion}/stats?rapidapi-key=${gamekey}`;

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
  getGame(title);
};

const init = function () {
  console.log('DOMContentLoaded');
  getGames();
};

document.addEventListener('DOMContentLoaded', init);
