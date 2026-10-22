import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Sidebar from './components/Sidebar.jsx'
import TaskForm from './components/TaskForm.jsx'
import TaskFilter from './components/TaskFilter.jsx'
import TaskList from './components/TaskList.jsx'

// Starting tasks, taken from the Assignment 1 mockup
const INITIAL_TASKS = [
  { id: 1, text: 'Call Mom', completed: false },
  { id: 2, text: 'Buy the new issue of Scientific American', completed: false },
  { id: 3, text: 'Return the textbook to Josie', completed: false },
  { id: 4, text: 'Buy the new album by Rake', completed: false },
  { id: 5, text: 'Buy a gift card for Dad', completed: false },
]

const EMPTY_MESSAGES = {
  all: 'No tasks yet. Add one above!',
  active: 'No active tasks. Nice work!',
  completed: 'No completed tasks yet.',
}

function App() {
  // All task data lives here and flows down through props
  const [tasks, setTasks] = useState(INITIAL_TASKS)
  const [filter, setFilter] = useState('all')

  // Add a new task; TaskForm has already rejected empty input
  const handleAddTask = (text) => {
    setTasks((prevTasks) => {
      const nextId = prevTasks.reduce((max, task) => Math.max(max, task.id), 0) + 1
      return [...prevTasks, { id: nextId, text, completed: false }]
    })
  }

  // Flip one task's completed flag without mutating the old object
  const handleToggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  // Remove a task by building a new array without it
  const handleDeleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  const totalCount = tasks.length
  const completedCount = tasks.filter((task) => task.completed).length
  const activeCount = totalCount - completedCount

  // The filter only changes which tasks are shown, not the counter
  const visibleTasks = tasks.filter((task) => {
    if (filter === 'active') return !task.completed
    if (filter === 'completed') return task.completed
    return true
  })

  return (
    <>
      <Header total={totalCount} completed={completedCount} />

      <div className="app-layout">
        <Sidebar inboxCount={activeCount} />

        <main className="main-content">
          <h1 className="section-title">Inbox</h1>
          <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
          <TaskForm onAddTask={handleAddTask} />
          <TaskList
            tasks={visibleTasks}
            emptyMessage={EMPTY_MESSAGES[filter]}
            onToggleTask={handleToggleTask}
            onDeleteTask={handleDeleteTask}
          />
        </main>
      </div>
    </>
  )
}

export default App
