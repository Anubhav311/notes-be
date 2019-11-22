
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('parts').del()
    .then(function () {
      // Inserts seed entries
      return knex('parts').insert([
        {part_name: "test part name", skill_id: 1},
        {part_name: "test part name", skill_id: 2},
        {part_name: "test part name", skill_id: 3}
      ]);
    });
};
