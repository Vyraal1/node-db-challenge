exports.up = function(knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.varchar("name", 255).notNullable;
    tbl.text("description");
    tbl.integer("completed").defaultTo(0);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects");
};
