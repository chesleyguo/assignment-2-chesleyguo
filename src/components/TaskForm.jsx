import { useState } from 'react'

// Controlled input for adding a task; owns only the input's text
function TaskForm({ onAddTask }) {
  const [text, setText] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const trimmed = text.trim()
    if (!trimmed) return // empty or whitespace-only input adds nothing
    onAddTask(trimmed)
    setText('')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input"
        placeholder="Add a new task"
        aria-label="New task"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm
