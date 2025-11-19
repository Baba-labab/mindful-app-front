import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="px-4">
      <h2 className="text-4xl text-center mt-5">Dashboard</h2>
      <main>
        <NavLink to="/exercises">
          <button className="btn btn-neutral mt-5">Start your break</button>
        </NavLink>

        <p></p>
        <NavLink to="/reflections">
          <button className="btn btn-neutral mt-5">View your reflections</button>
        </NavLink>

      </main>


    </div>
  )
}

export default Dashboard