
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: "test", last_name: "test", email: "test", password: "test"},
        {first_name: "test", last_name: "test", email: "test", password: "test"},
        {first_name: "test", last_name: "test", email: "test", password: "test"}
      ]);
    });
};
