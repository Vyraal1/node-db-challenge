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
        .then(tasks => {
          const newTasks = tasks.map(task => {
            return {
              ...task,
              completed: mappers.intToBoolean(task.completed)
            };
          });
        })
    : db(TASKS);
}

function add(task) {
  const newTask = {
    ...task,
    completed: mappers.booleanToInt(task.completed)
  };
  return db(TASKS)
    .insert(task)
    .then(([id]) => find(id));
}

function findByProjectId(projectId) {
  return db(TASKS).where({ projectId });
}
