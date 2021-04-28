let express = require("express");
let app = express();
const cors = require("cors");
const todoRouter = require("./routes/todo");

app.use(cors());
app.use(express.json());
app.use(express.static("dist"));

// app.use("/", (req, res) => {
//   Person.find()
//     .then((person) => res.json(person))
//     .catch((err) => res.status(400).json("Error: " + err));
// });
app.use("/todo", todoRouter);

// handler for 404 Not fount
app.use((req, res) => {
  res.status(404).send("we think we are lost");
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server has started on ${PORT}`));
