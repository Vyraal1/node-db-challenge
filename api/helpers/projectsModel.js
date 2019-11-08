const db = require("../../data/dbConfig");

const PROJECTS = "projects";

module.exports = {
  find,
  add
};

//if no id is given,
function find(id) {
  return id
    ? db(PROJECTS)
        .where({ id })
        .first()
    : db(PROJECTS);
}

function add(project) {
  return db(PROJECTS)
    .insert(project)
    .then(([id]) => find(id));
}
