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
    <div className="container">
      <h1>Todo Lists</h1>
      <div>
        <Button href="/todos/new" variant="primary">New Todo List</Button>
      </div>
      {todoLists.map((todoList) => (
        <div key={todoList.id} className="row">
          <TodoList id={todoList.id} title={todoList.title} description={todoList.description} onDelete={deleteTodoList} />
        </div>
      ))}
    </div>
  );

  function deleteTodoList(id) {
    const asyncDeleteTodoList = async (id) => {

      try {
        let url = `http://localhost:4000/todos/${id}`;
        let options = {
          method: "DELETE"
        };

        await fetch(url, options);

        let updateTodos = todoLists.filter(todoList => todoList.id !== id);
        setTodoLists(updateTodos)
      } catch (error) {
        console.error(error);
      }
    };
    asyncDeleteTodoList(id);
  }
}

export default TodoListsPage;