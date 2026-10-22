// One task row: circular checkbox, text and delete button
function TaskItem({ task, onToggle, onDelete }) {
  const checkboxId = `task-${task.id}`

  return (
    <li className={`task-item${task.completed ? ' completed' : ''}`}>
      <input
        type="checkbox"
        id={checkboxId}
        className="task-checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <label htmlFor={checkboxId} className="task-text">
        {task.text}
      </label>
      <button
        type="button"
        className="delete-button"
        aria-label={`Delete "${task.text}"`}
        onClick={() => onDelete(task.id)}
      >
        ×
      </button>
    </li>
  )
}

export default TaskItem
