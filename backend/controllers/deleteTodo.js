const Todo = require("../models/todo.model");

const deleteTodo = async (req, res) => {
  // Person.findByIdAndDelete(req.params.id)
  //   .then(() => res.json("Person Deleted."))
  //   .catch((err) => res.status(400).json("Error: " + err));

  const todo = await Todo.findByIdAndRemove(req.params.id);

  if (!todo)
    return res.status(404).send("The todo with the given id was not found");

  res.send(todo);
};

module.exports = deleteTodo;
