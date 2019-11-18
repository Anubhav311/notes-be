
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('comments').del()
    .then(function () {
      // Inserts seed entries
      return knex('comments').insert([
        {comment: "this is a seeded comment", parent_item: 1, sub_comment: null},
        {comment: "this is a seeded comment", parent_item: 1, sub_comment: null},
        {comment: "this is a seeded comment", parent_item: 1, sub_comment: 1},
        {comment: "this is a seeded comment", parent_item: 2, sub_comment: 1},
        {comment: "this is a seeded comment", parent_item: 2, sub_comment: 3},
        {comment: "this is a seeded comment", parent_item: 2, sub_comment: 3},
        {comment: "this is a seeded comment", parent_item: 3, sub_comment: 5},
        {comment: "this is a seeded comment", parent_item: 3, sub_comment: 6},
        {comment: "this is a seeded comment", parent_item: 3, sub_comment: 5},
        {comment: "this is a seeded comment", parent_item: 3, sub_comment: 6}
      ]);
    });
};
