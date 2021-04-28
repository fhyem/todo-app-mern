let express = require("express");
let router = express.Router();
let Person = require("../models/person.model.js");

// get every person in DB
router.route("/").get((req, res) => {
  Person.find()
    .then((person) => res.json(person))
    .catch((err) => res.status(400).json("Error: " + err));
});
// router.get("/", (req, res) => {
//   Person.find({})
//     .then((doc) => {
//       res.json(doc);
//     })
//     .catch((err) => {
//       res.status(500).json(err);
//     });
// });

// Create a new person
// POST localhost://3000/person
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const age = req.body.age;

  const newPerson = new Person({
    name,
    email,
    age,
  });

  newPerson
    .save()
    .then(() => res.json("Person added"))
    .catch((err) => res.status(400).json("Error: " + err));
});
// router.post("/person", (req, res) => {
//   // req.body is availabel due to body-parser
//   const name = req.body.name;
//   const age = req.body.age;
//   const email = req.body.email;

//   const newPerson = new Person({
//     name,
//     age,
//     email,
//   });

//   if (!req.body) {
//     return res.status(400).send("request Body Missing");
//   }
//   newPerson
//     .save()
//     .then(() => res.json("User Added"))
//     .catch((err) => {
//       res.status(500).send("Error occured: " + err);
//     });
// });

// Update Person
router.put("/person", (req, res) => {
  if (!req.query.email) {
    return res.status(400).send("Missing url parameter");
  }

  Person.findOneAndUpdate(
    {
      email: req.query.email,
    },
    req.body,
    {
      new: true,
    }
  )
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// Delete Entry
router.route("/:id").delete((req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then(() => res.json("Person Deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});
// const updatedList = list.filter((item) => {
//   if (item.id !== id) {
//     return true;
//   }
//   return false;
// });
// setList(updatedList);

module.exports = router;
