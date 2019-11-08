exports.up = function(knex) {
  return knex.schema.createTable("projects_resources", tbl => {
    tbl.increments();

    tbl
      .integer("projectid")
      .references("project.id")
      .notNullable()
      .onUpdate()
      .onDelete();
    tbl
      .integer("resourceid")
      .references("resource.id")
      .notNullable()
      .onUpdate()
      .onDelete();

    tbl.float("quantity");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects_resources");
};
