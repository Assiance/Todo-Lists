import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NewTodoListPage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  return (
    <div>

      <div>
        <h1>New Todo List</h1>
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
        <button type="submit" className="btn btn-primary" onClick={postTodos}>Submit List</button>
      </div>

    </div>
  )

  function postTodos() {
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
    asyncPostTodos();
  }
}

export default NewTodoListPage;