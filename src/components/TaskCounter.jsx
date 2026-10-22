// Shows "total / completed" for all tasks, whatever the filter
function TaskCounter({ total, completed }) {
  return (
    <span className="task-counter" title={`${total} tasks, ${completed} completed`}>
      {total}/{completed}
    </span>
  )
}

export default TaskCounter
