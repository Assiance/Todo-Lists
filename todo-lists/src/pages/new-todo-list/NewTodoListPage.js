import { useState } from "react";
import TodoList from "../../components/todo-list/TodoList";

function NewTodoListPage() {
  const [data, setData] = useState({
    title: '',
    description: ''
  });
  //const [description, setDescription] = useState('');

  return (
    <div>

      <div>
        <h1>New Todo List</h1>
      </div>

      <div>
        <label>Title</label>
        <input type="text" placeholder="Enter Todolist title" value={data.title} onChange={(e) => { setData(e.target.value) }}></input>
      </div>

      <div>
        <label>Description</label>
        <input type="text" placeholder="Enter Todolist description" value={data.description} onChange={(e) => { setData(e.target.value) }}></input>
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
        method: 'POST'
      }

      try {
        const response = await fetch(url, options);
        const data = await response.json()
        console.log(data);
      } catch (error) {
        console.error(error);
      }
      setData(data);
    }
    asyncPostTodos();
  }
}

export default NewTodoListPage;