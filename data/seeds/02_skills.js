
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('skills').del()
    .then(function () {
      // Inserts seed entries
      return knex('skills').insert([
        {skill: "test skill", category: "coding", user_id: 1},
        {skill: "test skill", category: "coding", user_id: 2},
        {skill: "test skill", category: "coding", user_id: 3}
      ]);
    });
};
