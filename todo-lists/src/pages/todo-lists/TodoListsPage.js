import TodoList from "../../components/todo-list/TodoList";
import Button from "react-bootstrap/Button";
const { useState, useEffect } = require("react");

function TodoListsPage() {
  const [todoLists, setTodoLists] = useState([]);

  useEffect(() => {

    async function fetchTodoLists() {
      const response = await fetch("http://localhost:4000/todos");
      const data = await response.json();
      setTodoLists(data);
    };

    fetchTodoLists();
  }, []);

  return (
    <div class="container">
      <h1>Todo Lists</h1>
      <div>
        <Button href="/todos/new" variant="primary">New Todo List</Button>
      </div>
      {todoLists.map((todoList) => (
        <div class="row">
          <TodoList key={todoList.id} title={todoList.title} description={todoList.description} />
        </div>
      ))}
    </div>
  );
}

export default TodoListsPage;