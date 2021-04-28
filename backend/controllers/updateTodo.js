const Todo = require("../models/todo.model.js");

const updateTodo = async (req, res) => {
  // if (!req.body) {
  //   return res.status(400).send("Missing url parameter");
  // }
  // console.log(req.query._id);

  // const filterBy = { _id: req.query._id };
  // const update = {
  //   name: req.query.name,
  //   email: req.query.email,
  //   age: req.query.age,
  // };

  // Person.findOneAndUpdate(filterBy, update)
  //   .then((doc) => {
  //     res.json(doc);
  //   })
  //   .catch((err) => {
  //     res.status(500).json(err);
  //   });

  const todo = await Todo.findByIdAndUpdate(
    req.params.id,
    {
      name: req.body.name,
      project: req.body.project,
      instructor: req.body.instructor,
    },
    {
      new: true,
    }
  );

  if (!todo)
    return res.status(404).send("The Todo with the given id was not found");

  res.send(todo);
};

module.exports = updateTodo;
