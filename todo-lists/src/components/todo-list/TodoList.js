function TodoList({ title, description }) {
    return (
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{description}</p>
                <a href="#" class="btn btn-primary">View</a>
            </div>
        </div>
    );
}

export default TodoList;