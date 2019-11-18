
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {items: "these are some seed items", link: "https:some random link"},
        {items: "these are some seed items", link: "https:some random link"},
        {items: "these are some seed items", link: "https:some random link"}
      ]);
    });
};
