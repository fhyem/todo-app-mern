const mongoose = require("mongoose");
// import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://fhyem:fhyem123@cluster0.ciaap.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB connection estabilished successfully");
});

const Schema = mongoose.Schema;

const PersonSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  age: { type: String, required: true },
});

const Person = mongoose.model("Person", PersonSchema);

module.exports = Person;
