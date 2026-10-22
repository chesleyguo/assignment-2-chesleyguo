import inboxIcon from '../assets/inbox_icon.png'
import calendarIcon from '../assets/calendar_icon.png'
import upcomingIcon from '../assets/upcoming_icon.png'

// Left navigation from Assignment 1 (hidden at 480px or less)
function Sidebar({ inboxCount }) {
  return (
    <nav className="sidebar">
      <ul className="nav-list">
        <li className="nav-item active">
          <img src={inboxIcon} alt="inbox" className="nav-icon" />
          <span className="nav-label">Inbox</span>
          <span className="nav-count">{inboxCount}</span>
        </li>
        <li className="nav-item">
          <img src={calendarIcon} alt="today" className="nav-icon" />
          <span className="nav-label">Today</span>
          <span className="nav-count">{inboxCount}</span>
        </li>
        <li className="nav-item">
          <img src={upcomingIcon} alt="upcoming" className="nav-icon" />
          <span className="nav-label">Upcoming</span>
        </li>
      </ul>
    </nav>
  )
}

export default Sidebar
