const router = require("express").Router();

const Projects = require("../helpers/projectsModel");

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
router.post("/api/projects/", (req, res) => {
  Projects.insert(req.body)
    .then(newProject => res.status(201).json(project))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal error adding new project" });
    });
});

module.exports = router;
