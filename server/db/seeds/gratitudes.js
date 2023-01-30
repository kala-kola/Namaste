exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('gratitude')
    .del()
    .then(function () {
      return knex('gratitude').insert([
        {
          id: 1,
          date: new Date(Date.now()),
          gratitude: `I'm grateful for fruit and veges because they are yum`,
        },
        {
          id: 2,
          date: new Date(Date.now()),
          gratitude: `I'm grateful for bees because they polinate flowers and make honey which is also yum`,
        },
        {
          id: 3,
          date: new Date(Date.now()),
          gratitude: `I'm grateful for trees because they are pretty and clean the air so I can breath`,
        },
      ])
    })
}
