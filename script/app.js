var title = '';

const showData = function (data) {
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

const prices = function () {
  console.log('prices');
  const colors = ['blue', 'yellow', 'green', 'red', 'purple', 'orange'];
  try {
    var options = {
      series: [
        {
          data: [21, 22, 10, 28, 16, 21, 13, 30],
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
        categories: [
          ['John', 'Doe'],
          ['Joe', 'Smith'],
          ['Jake', 'Williams'],
          'Amber',
          ['Peter', 'Brown'],
          ['Mary', 'Evans'],
          ['David', 'Wilson'],
          ['Lily', 'Roberts'],
        ],
        labels: {
          style: {
            fontSize: '12px',
          },
        },
      },
    };

    var chart = new ApexCharts(
      document.querySelector('#chart_prices'),
      options
    );
    chart.render();
    console.log('chart rendered');
  } catch (error) {
    console.log(error);
  }
};

const listentoGame = function () {
  game = document.querySelectorAll('.c-games__title');
  for (let gam of game) {
    gam.addEventListener('click', function () {
      console.log('clicked');
      document.querySelector('.c-game').classList.add('c-game__show');
      document.querySelector('.c-games').classList.add('c-games__hide');
      prices();
    });
  }
  closeGame();
};

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

  const data = await getData(api);
  console.log(data);
  showData(data);
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
