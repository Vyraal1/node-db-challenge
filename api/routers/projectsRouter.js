const router = require("express").Router();

const Projects = require("../helpers/projectsModel");
const Tasks = require("../helpers/tasksModel");

//get all projects
router.get("/", (req, res) => {
  Projects.find()
    .then(projects => res.status(200).json(projects))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal error getting all projects" });
    });
});

//add project
router.post("/", (req, res) => {
  Projects.add(req.body)
    .then(newProject => res.status(201).json(newProject))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal error adding new project" });
    });
});

//get all tasks in a project
router.get("/:id/tasks/", (req, res) => {
  Tasks.findByProjectId(req.params.id)
    .then(tasks => {
      tasks.length
        ? res.status(200).json(tasks)
        : res
            .status(404)
            .json({ message: "Couldn't find the project ya wanted bud." });
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .json({ message: "Internal error trying to get project tasks" });
    });
});

//add any task
router.post("/:id/tasks/", (req, res) => {
  const task = { ...req.body, projectid: req.params.id };

  Tasks.add(task)
    .then(newTask => res.status(201).json(newTask))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal error when adding new task" });
    });
});

//add task to a project

module.exports = router;
