import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/home/HomePage';
import TodoListsPage from './pages/todo-lists/TodoListsPage';
import NewTodoListPage from './pages/new-todo-list/NewTodoListPage';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    (
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path='/' element={<HomePage />} />
            <Route path='/todos' element={<TodoListsPage />} />
            <Route path='/todos/new' element={<NewTodoListPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  )
}

export default App;
