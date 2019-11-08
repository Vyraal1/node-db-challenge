const router = require("express").Router();

const Resources = require("../helpers/resourcesModel");

//get all resources
router.get("/", (req, res) => {
  Resources.find()
    .then(resources => res.status(200).json(resources))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal error getting all resources" });
    });
});

//add resource
router.post("/", (req, res) => {
  Resources.add(req.body)
    .then(newResource => res.status(201).json(newResource))
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Internal error adding new resource" });
    });
});

module.exports = router;
