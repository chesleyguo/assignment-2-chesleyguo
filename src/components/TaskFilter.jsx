import { Fragment } from 'react'

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'completed', label: 'Completed' },
]

// "All | Active | Completed" row; the current filter is highlighted
function TaskFilter({ currentFilter, onFilterChange }) {
  return (
    <div className="task-filters">
      {FILTERS.map((filter, index) => (
        <Fragment key={filter.value}>
          {index > 0 && <span className="filter-separator">|</span>}
          <button
            type="button"
            className={`filter-button${currentFilter === filter.value ? ' active' : ''}`}
            aria-pressed={currentFilter === filter.value}
            onClick={() => onFilterChange(filter.value)}
          >
            {filter.label}
          </button>
        </Fragment>
      ))}
    </div>
  )
}

export default TaskFilter
