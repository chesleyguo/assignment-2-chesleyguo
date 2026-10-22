import TaskItem from './TaskItem.jsx'

// Renders the visible tasks, or a message when there are none
function TaskList({ tasks, emptyMessage, onToggleTask, onDeleteTask }) {
  if (tasks.length === 0) {
    return <p className="empty-state">{emptyMessage}</p>
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggleTask}
          onDelete={onDeleteTask}
        />
      ))}
    </ul>
  )
}

export default TaskList
