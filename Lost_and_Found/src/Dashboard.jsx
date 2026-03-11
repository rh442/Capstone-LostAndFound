import './Dashboard.css'

function Dashboard() {
  return (
    <div className="dashboard">

      <div className="header">
        <h4>Logo here</h4>
      </div>

      <div className="main-layout">

        <div className="sidebar">
          <h2>Dashboard</h2>
          <h2>Messages</h2>
          <h2>New Item</h2>
          <h2>Overview</h2>
        </div>

        <div className="content">
          <h1>Welcome, Admin</h1>
          

          <div className='categories'>
            <h3>Electronics</h3>
            <h3>Clothing</h3>
            <h3>Books</h3>
            <h3>Miscellaneous</h3>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Dashboard