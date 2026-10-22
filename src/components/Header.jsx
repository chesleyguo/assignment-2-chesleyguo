import TaskCounter from './TaskCounter.jsx'
import menuIcon from '../assets/menu_icon.png'
import searchIcon from '../assets/search_icon.png'
import checkIcon from '../assets/check_icon.png'

// Red top bar: menu, quick find and the task counter
function Header({ total, completed }) {
  return (
    <header className="main-header">
      <div className="header-left">
        <img src={menuIcon} alt="menu icon" className="icon menu-icon" />
        <div className="search-box">
          <img src={searchIcon} alt="search icon" className="icon search-icon" />
          <input
            type="text"
            className="quick-find"
            placeholder="Quick find"
            aria-label="Quick find tasks"
          />
        </div>
      </div>
      <div className="header-right">
        <img src={checkIcon} alt="check icon" className="icon check-icon" />
        <TaskCounter total={total} completed={completed} />
      </div>
    </header>
  )
}

export default Header
