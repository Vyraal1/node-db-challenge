const db = require("../../data/dbConfig");
const mappers = require("../helpers/mappers");

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
        .then(projects => {
          const newProjects = projects.map(project => {
            return {
              ...project,
              completed: mappers.intToBoolean(project.completed)
            };
          });
        })
    : db(PROJECTS);
}

function add(project) {
  const newProject = {
    ...project,
    completed: mappers.booleanToInt(project.completed)
  };
  return db(PROJECTS)
    .insert(newProject)
    .then(([id]) => find(id));
}
