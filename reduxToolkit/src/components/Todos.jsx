import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../feature/todo/todoSlice";
import UpdateTodo from "./UpdateTodo";

function Todos() {
    const todos = useSelector(state => state.todo.todos)
    const dispatch = useDispatch()
    const [editingId, setEditingId] = useState(null)

    return (
        <div className="w-full max-w-md mx-auto mt-4">
            <h2 className="text-xl font-bold text-white mb-3">TODOS</h2>
            <ul className="flex flex-col gap-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="bg-white/10 text-white px-4 py-2 rounded-lg border border-white/20">
                        <div className="flex justify-between items-center">
                            <span>{todo.text}</span>
                            <div className="flex gap-2">
                                <button
                                    onClick={() => setEditingId(todo.id)}
                                    className="bg-yellow-500 hover:bg-yellow-600 text-white text-xs px-2 py-1 rounded transition"
                                >
                                    ✏️
                                </button>
                                <button
                                    onClick={() => dispatch(removeTodo(todo.id))}
                                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-2 py-1 rounded transition"
                                >
                                    ✕
                                </button>
                            </div>
                        </div>
                        {editingId === todo.id && (
                            <UpdateTodo todo={todo} onClose={() => setEditingId(null)} />
                        )}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Todos
