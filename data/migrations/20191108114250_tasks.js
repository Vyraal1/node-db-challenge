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
    tbl.integer("completed").defaultTo(0);

    tbl.text("description");
    tbl.text("notes");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("tasks");
};
