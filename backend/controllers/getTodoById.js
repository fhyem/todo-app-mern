const Todo = require("../models/todo.model.js");

const getTodoById = async (req, res) => {
  // await Person.findById(req.params.id)
  //   .then((person) => res.json(person))
  //   .catch((err) => console.log(err));

  const todo = await Todo.findById(req.params.id);

  if (!todo)
    return res.status(404).send("The todo with the given id was not found");

  res.send(todo);
};

module.exports = getTodoById;
