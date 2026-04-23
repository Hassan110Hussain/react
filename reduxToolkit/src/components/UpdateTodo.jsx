import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateTodo } from "../feature/todo/todoSlice";

function UpdateTodo({ todo, onClose }) {
    const [text, setText] = useState(todo.text)
    const dispatch = useDispatch()

    const handleUpdate = (e) => {
        e.preventDefault()
        if (!text.trim()) return
        dispatch(updateTodo({ id: todo.id, text }))
        onClose()
    }

    return (
        <form onSubmit={handleUpdate} className="flex gap-2 mt-2">
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-1 outline-none focus:ring-2 focus:ring-yellow-400 bg-white/20 text-white"
            />
            <button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded-lg transition">
                Save
            </button>
            <button type="button" onClick={onClose} className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-lg transition">
                Cancel
            </button>
        </form>
    )
}

export default UpdateTodo
