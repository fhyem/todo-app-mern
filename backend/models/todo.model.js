const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://fhyem:fhyem123@cluster0.ciaap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDB..."))
  .catch((err) => console.log("Could Not connect to MongoDB...", err));

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection estabilished successfully");
});

const Schema = mongoose.Schema;

const TodoSchema = new Schema({
  name: { type: String, required: true },
  project: { type: String, required: true },
  instructor: { type: String, required: true },
});

const Todo = mongoose.model("Todo", TodoSchema);

// async function getPeople() {
//   const people = await Person.find();
//   console.log(people);
// }
module.exports = Todo;
