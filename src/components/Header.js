import React from 'react'

const Header = () => {
  return (
    <Header className="header">
      <div className="header_title">
        <h1>Active Sprints</h1>
      </div>
      <div className='header__actions'>
        <button className="complete-sprint-btn">Complete Sprint</button>
        <button className="complete-sprint-btn">Complete Sprint</button>
      </div>
    </Header>
  )
}

export default Header;