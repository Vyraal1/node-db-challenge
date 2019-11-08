exports.up = function(knex) {
  return knex.schema.createTable("resources", tbl => {
    tbl.increments();
    tbl.varchar("name").notNullable();
    tbl.text("description");
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("resources");
};