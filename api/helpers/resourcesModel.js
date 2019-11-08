const db = require("../../data/dbConfig");

const RESOURCES = "resources";

module.exports = {
  find,
  add
};

//if no id is given,
function find(id) {
  return id
    ? db(RESOURCES)
        .where({ id })
        .first()
    : db(RESOURCES);
}

function add(resource) {
  return db(RESOURCES)
    .insert(resource)
    .then(([id]) => find(id));
}
