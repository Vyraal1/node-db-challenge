const router = require("express").Router();

const Tasks = require("../helpers/tasksModel");

//if you wanted to get all tasks for some weird reason
router.get("/api/tasks/", (req, res) => {
  Tasks.find()
    .then(tasks => {
      res.status(200).json(tasks);
    })
    .catch(err => res.status(500).json(err));
});

// the other parts of CRUD are in the projects Router since tasks by nature are associated with Projects

module.exports = router;
