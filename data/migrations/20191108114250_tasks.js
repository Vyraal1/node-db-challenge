exports.up = function(knex) {
  return knex.schema.createTable("tasks", tbl => {
    tbl.increments();
    tbl
      .integer("projectid")
      .unsigned()
      .notNullable()
      .references("projects.id")
      .onUpdate("cascade")
      .onDelete("cascade");
    tbl
      .boolean("completed")
      .defaultTo(false)
      .notNullable();

    tbl.text("description");
    tbl.text("notes");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
