const Todo = require("../models/todo.model.js");

const createTodo = async (req, res) => {
  // const name = req.body.name;
  // const email = req.body.email;
  // const age = req.body.age;

  // const newPerson = new Person({
  //   name,
  //   email,
  //   age,
  // });

  // newPerson
  //   .save()
  //   .then(() => res.json("Person added"))
  //   .catch((err) => res.status(400).json("Error: " + err));

  let todo = new Todo({
    name: req.body.name,
    project: req.body.project,
    instructor: req.body.instructor,
  });

  todo = await todo.save();

  res.send(todo);
};

module.exports = createTodo;
