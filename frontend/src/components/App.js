import React, { useState, useEffect } from "react";
import axios from "axios";
import "./app.css";

const App = () => {
  const [todo, setTodo] = useState({
    name: "",
    todo: "",
    instructor: "",
  });
  const [_id, set_Id] = useState(0);
  const [added, setAdded] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [deleted, setDeleted] = useState(false);
  const [list, setList] = useState([]);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setDeleted(false);
    }, 3000);
  }, [deleted]);

  useEffect(() => {
    setTimeout(() => {
      setAdded(false);
    }, 3000);
  }, [added]);

  const url = "https://localhost:8000";

  // Fetch data from DB on reloading.
  // useEffect(() => {
  //   axios
  //     .get(url, { ...todo })
  //     .then((res) => {
  //       setList(res.data);
  //     })
  //     .catch((err) => console.log("Errorsss: ", err));
  // }, [list]);

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isEditing) {
      axios
        .put(url + _id, todo)
        .then((res) => console.log("Todo added: " + res.data))
        .catch((error) => console.log("Error occured: " + error));
      console.log("From edit: ", todo);
    } else {
      const newTodo = {
        name: todo.name,
        project: todo.project,
        instructor: todo.instructor,
      };

      axios
        .post(url, newTodo)
        .then((res) => {
          console.log("Todo added to list" + res.data);
          list.push(res.data);
        })
        .catch((error) => console.log("error occuereed:  " + error));
    }

    const newTodo = {
      name: "",
      project: "",
      instructor: "",
    };
    setTodo(newTodo);
    setAdded(true);
  };

  // handleChange
  const handleChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  // Edit a User
  const handleEdit = (_id) => {
    setIsEditing(true);
    set_Id(_id);

    axios
      .get(url + _id)
      .then((res) => {
        setTodo({
          name: res.data.name,
          project: res.data.project,
          instructor: res.data.instructor,
        });
      })
      .catch((err) => console.log(err));
  };

  // Delete Entry
  const deleteEntry = (id) => {
    axios.delete(url + id).then((response) => {
      console.log(response.data);
    });

    setList([...list.filter((el) => el._id !== id)]);
    setDeleted(true);
  };

  // handle Completed
  const handleComplete = (_id) => {
    console.log("clicked Completed");
    // setCompleted(true);
    // set_Id(_id);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <h1>React Todo MERN App</h1>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            placeholder="Enter Name"
            required
            onChange={(e) => handleChange(e)}
            value={todo.name || ""}
          />
        </div>

        <div className="form-group">
          <label htmlFor="project">Project</label>
          <input
            type="text"
            name="project"
            className="form-control"
            id="project"
            aria-describedby="emailHelp"
            placeholder="Enter Project"
            required
            onChange={(e) => handleChange(e)}
            value={todo.project || ""}
          />
        </div>
        <div className="form-group">
          <label htmlFor="instructor">Instructor</label>
          <input
            type="text"
            name="instructor"
            className="form-control"
            id="instructor"
            placeholder="Enter Instructor Name"
            onChange={(e) => handleChange(e)}
            value={todo.instructor || ""}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-3">
          Submit
        </button>
        {deleted && (
          <div className="alert alert-danger" role="alert">
            Todo has been Deleted from the List.
          </div>
        )}
        {added && (
          <div className="alert alert-success" role="alert">
            Todo has been added to the List.
          </div>
        )}
      </form>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Project</th>
            <th scope="col">Instructor</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            const { _id, name, project, instructor } = item;
            return (
              <tr key={index}>
                <td>{name}</td>
                <td>{project}</td>
                <td>{instructor}</td>
                <td
                  className="btn-xs btn-primary"
                  onClick={() => handleEdit(_id)}>
                  Edit
                </td>
                <td
                  className="btn-xs btn-danger"
                  onClick={() => deleteEntry(_id)}>
                  Delete
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
