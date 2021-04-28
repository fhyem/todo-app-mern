let express = require("express");
let router = express.Router();

const getTodos = require("../controllers/getTodos");
const getTodoById = require("../controllers/getTodoById.js");
const createTodo = require("../controllers/createTodo");
const updateTodo = require("../controllers/updateTodo.js");
const deleteTodo = require("../controllers/deleteTodo.js");

// get every person in DB
router.get("/", getTodos);

// get a person from a given id
router.get("/:id", getTodoById);

// Create a new person
// POST localhost://3000/person
router.post("/", createTodo);

// Update Person
router.put("/:id", updateTodo);

// Delete Entry
router.delete("/:id", deleteTodo);

module.exports = router;
