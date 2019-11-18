
exports.up = function(knex) {
    return knex.schema.createTable('items', tbl => {
        tbl.increments();
        tbl.datetime('created_at').defaultTo(knex.fn.now());
        tbl.string('items').notNullable();
        tbl.string('link');
        tbl.integer('comments').defaultTo(0).notNullable();
    })
    .createTable('comments', tbl => {
        tbl.increments();
        tbl.datetime('created_at').defaultTo(knex.fn.now());
        tbl.string('comment').notNullable();
        tbl.integer('sub_comment').defaultTo(null).references('id').inTable('comments').onDelete('CASCADE').onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('items')
    .dropTableIfExists('comments')
};
