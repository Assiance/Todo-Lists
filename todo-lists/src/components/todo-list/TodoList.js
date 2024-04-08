function TodoList({ id, title, description, onDelete }) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">View</a>
                <a href="#" class="btn btn-danger" onClick={() => onDelete(id)} >Delete</a>
            </div>
        </div>
    );
}

export default TodoList;