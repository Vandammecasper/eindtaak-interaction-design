var title = '';

const information_open = function () {
  document
    .querySelector('.c-games__title')
    .addEventListener('click', function () {
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
      document.querySelector('.c-chart').classList.add('c-chart-show');
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
      prices();
    });
};

const information_close = function () {
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
    document.querySelector('.c-chart').classList.remove('c-chart-show');
  });
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
};

searchgame = function () {
  title = document.getElementById('game').value;
  console.log(title);
  getGames(title);
};

const init = function () {
  console.log('DOMContentLoaded');
  information_open();
  information_close();
};

document.addEventListener('DOMContentLoaded', init);
