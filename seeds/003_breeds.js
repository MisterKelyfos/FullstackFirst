const faker = require('faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('Breeds').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('Breeds').insert([
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()},
        {"name": faker.commerce.color()}
      ]);
    });
};
