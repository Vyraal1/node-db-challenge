const db = require("../../data/dbConfig");

const TASKS = "tasks";

module.exports = {
  find,
  findByProjectId,
  add
};

//if no id is given,
function find(id) {
  return id
    ? db(TASKS)
        .where({ id })
        .first()
    : db(TASKS);
}

function add(task) {
  return db(TASKS)
    .insert(task)
    .then(([id]) => find(id));
}

function findByProjectId(projectId) {
  return db(TASKS).where({ projectId });
}
