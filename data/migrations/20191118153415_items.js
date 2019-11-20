
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments();

        tbl.datetime('created_at')
            .defaultTo(knex.fn.now());
        
        tbl.string('first_name');
        
        tbl.string('last_name');
        
        tbl.string('email')
            .notNullable();
        
        tbl.string('password')
            .notNullable();
    })
    .createTable('skills', tbl => {
        tbl.increments();

        tbl.datetime('created_at')
            .defaultTo(knex.fn.now());

        tbl.string('skill')
            .notNullable();

        tbl.string('category')

        tbl.integer('user_id')
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
    .createTable('skill_parts', tbl => {
        tbl.increments();

        tbl.datetime('created_at')
            .defaultTo(knex.fn.now());

        tbl.string('part_name')
            .notNullable();

        tbl.boolean('completion_status')
            .defaultTo(false)
            .notNullable();

        tbl.boolean('social_status')
            .defaultTo(false)
            .notNullable();

        tbl.boolean('direct_or_indirect')
            .defaultTo(false)
            .notNullable();

        tbl.integer('skill_id')
            .notNullable()
            .references('id')
            .inTable('skills')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('skill_parts')
        .dropTableIfExists('skills')
        .dropTableIfExists('users')
};
