
exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.datetime('created_at').defaultTo(knex.fn.now());
        tbl.string('items').notNullable();
        tbl.string('link');
        tbl.integer('comments').defaultTo(0);
    })
    .createTable('comments', tbl => {
        tbl.increments();
        tbl.datetime('created_at').defaultTo(knex.fn.now());
        tbl.string('comment').notNullable();
        tbl.integer('parent_item');
        tbl.integer('sub_comment');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
    .dropTableIfExists('comments')
};
