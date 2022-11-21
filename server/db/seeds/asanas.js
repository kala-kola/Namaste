exports.seed = function (knex) {
  return knex('asanas')
    .del()
    .then(function () {
      return knex('asanas').insert([
        { id: 1, name: 'Pranamasana', image: '/img/1Pranamasana.png' },
        {
          id: 2,
          name: 'Hasta Uttanasana',
          image: '/img/2HastaUttanasana.png',
        },
        { id: 3, name: 'Pradahastasana', image: '/img/3Pradahastasana.png' },
        {
          id: 4,
          name: 'Ashwa Sanchalsana',
          image: '/img/4AshwaSanchalsana.png',
        },
        { id: 5, name: 'Parvatasana', image: '/img/5Parvatasana.png' },
        {
          id: 6,
          name: 'Ashtanga Namaskara',
          image: '/img/6AshtangaNamaskara.png',
        },
        {
          id: 7,
          name: 'Urdhava Mukhva Shvanasana',
          image: '/img/7UrdhavaMukhvaShvanasana.png',
        },
        {
          id: 8,
          name: 'Adho Muhva Shvanasana',
          image: '/img/8AdhoMuhvaShvanasana.png',
        },
        {
          id: 9,
          name: 'AshwaSanchalasana',
          image: '/img/9AshwaSanchalasana.png',
        },
        { id: 10, name: 'Pradahastasana', image: '/img/10Pradahastasana.png' },
        {
          id: 11,
          name: 'Hasta Uttanasana',
          image: 'img/11HastaUttanasana.png',
        },
      ])
    })
}
