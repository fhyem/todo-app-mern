const Todo = require("../models/todo.model.js");

const getTodos = async (req, res) => {
  // Person.find()
  //   .then((person) => res.json(person))
  //   .catch((err) => res.status(400).json("Error: " + err));
  const todos = await Todo.find();
  res.send(todos);
};

module.exports = getTodos;
