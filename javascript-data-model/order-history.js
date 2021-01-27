var orderHistory = [
  {
    orderPlaced: 'August 4, 2020',
    totalPrice: 34.00,
    sentTo: 'JS Masher',
    orderNumber: '144-3941689-8772232',
    delivered: 'Aug 8, 2020',
    directHand: false,
    items: [{
      name: 'JavaScript for impatient programmers',
      author: 'Rauschmayer, Dr Axel',
      returnWindowClose: 'Return window closed on Sep 7, 2020',
      price: 34.00
    }]
  },
  {
    orderPlaced: 'July 19, 2020',
    totalPrice: 44.53,
    sentTo: 'JS Masher',
    orderNumber: '113-9984268-1280257',
    delivered: 'Jul 20,2020',
    directHand: true,
    items: [{
      name: 'The Timeless Way of Building',
      author: 'Alexander, Christopher',
      returnWindowClose: 'Return window closed on Aug 19, 2020',
      price: 41.33
    }]
  },
  {
    orderPlaced: 'July 4, 2020',
    totalPrice: 17.22,
    sentTo: 'JS Masher',
    orderNumber: '114-2875557-9059409',
    delivered: 'July 7, 2020',
    directHand: true,
    items: [{
      name: 'Gamecube Controller Adapter. Super Smash Bros Switch Gamecube Adapter for Wii U, PC. Support Turbo and vibration Features. No Driver and No Lag-Gamecube Adapter',
      returnWindowClose: 'Return window closed on Aug 5, 2020',
      price: 15.98
    }]
  },
  {
    orderPlaced: 'July 3, 2020',
    totalPrice: 138.93,
    sentTo: 'JS Masher',
    orderNumber: '113-2883177-2648248',
    delivered: 'Jul 5, 2020',
    directHand: false,
    items: [
      {
        name: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
        returnWindowClose: 'Return window Close on Aug 4,2020',
        price: 94.95
      },
      {
        name: 'The Art of Sql',
        by: 'Faroult, Stephine',
        returnWindowClose: 'Return window closed on Aug 4,2020',
        price: 33.99
      }
    ]

  }
];

console.log('calling on order history items ', orderHistory[3].items[0].name);
console.log('order 3, item 1', orderHistory[2].items[0].returnWindowClose);
console.log('What did we order in order#4 ', orderHistory[3].items[0].name, orderHistory[3].items[1].name);
