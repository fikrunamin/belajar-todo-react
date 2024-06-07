import { useState } from "react";

function Todo() {
    const [todos, setTodos] = useState({
        1: {
            id: 1,
            activity: 'Activity 1',
            description: 'Description Activity 1',
            datetime: new Date(),
            is_done: false,
        },
    });

    function addTodo(todo) {
        setTodos((state) => {
            return {
                ...state,
                [todo.id]: todo,
            };
        });
    }

    function handleAddTodo(event) {
        event.preventDefault();
        const data = new FormData(event.target);

        addTodo({
            id: Date.now(),
            activity: data.get('activity'),
            description: data.get('description'),
            datetime: new Date(data.get('datetime')),
            is_done: data.get('is_done'),
        });

        event.target.reset();
    }

    function handleUpdateStatus(todo) {
        setTodos((state) => {
            return {
                ...state,
                [todo.id]: {
                    ...todo,
                    is_done: !todo.is_done,
                },
            };
        });
    }

    function handleDeleteTodo(todo) {
        setTodos((state) => {
            return {
                ...state,
                [todo.id]: undefined,
            };
        });
    }

    return (
        <div>
            <form onSubmit={handleAddTodo}>
                <input type="text" placeholder="Activity" name="activity" />
                <textarea
                    name="description"
                    placeholder="Description"
                >
                </textarea>
                <input type="datetime-local" name="datetime" />
                <label>
                    <input type="checkbox" name="is_done" />
                    Completed
                </label>
                <input type="submit" value="Add Todo" />
            </form>

            <h5>List Todo</h5>
            <ul>
                {Object.entries(todos)
                .filter(([index, todo]) => !!todo)
                .map(([index, todo]) => (
                    <li>
                        <p style={{ textDecoration: todo.is_done ? 'line-through' : 'none' }}>
                            {todo.activity}
                        </p>
                        <p style={{ textDecoration: todo.is_done ? 'line-through' : 'none' }}>
                            {todo.description}</p>
                        <p>{todo.datetime.toLocaleString()}</p>
                        <div>
                            <button
                                style={{ marginRight: '16px' }}
                                onClick={() => handleUpdateStatus(todo)}
                            >
                                Mark as Done
                            </button>
                            <button onClick={() => handleDeleteTodo(todo)}>
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
