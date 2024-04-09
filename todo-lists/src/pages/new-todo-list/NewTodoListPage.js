import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function NewTodoListPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    // Add request to pull in data for a specific todo list
    const asyncGetTodoListById = async () => {
      const url = `http://localhost:4000/todos/${id}`;

      try {
        //Fill this in

        setTitle("Tiger");
        setDescription("Tiger is the largest cat species");

      } catch (error) {
        console.error(error);
      }
    };

    if (id) {
      asyncGetTodoListById();
    }
  }, []);

  return (
    <div>

      <div>
        {id ? <h1>Update Todolist</h1> : <h1>Create Todolist</h1>}
      </div>

      <div>
        <label>Title</label>
        <input type="text" placeholder="Enter Todolist title" value={title} onChange={(e) => { setTitle(e.target.value) }}></input>
      </div>

      <div>
        <label>Description</label>
        <input type="text" placeholder="Enter Todolist description" value={description} onChange={(e) => { setDescription(e.target.value) }}></input>
      </div>

      <div>
        <button type="submit" className="btn btn-primary" onClick={addOrUpdateTodos}>Submit List</button>
      </div>

    </div>
  )

  function addOrUpdateTodos() {
    
    const asyncPostTodos = async () => {
      const url = `http://localhost:4000/todos`;

      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title: title, description: description })
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);
        navigate('/todos')
      } catch (error) {
        console.error(error);
      }
    }

    if (id) {
      //update
    }
    else {
      asyncPostTodos();
    }
  }
}

export default NewTodoListPage;