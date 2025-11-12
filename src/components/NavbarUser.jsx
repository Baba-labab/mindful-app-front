import { Outlet, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { useContext } from 'react'

function navbarUser() {
  const { logOut, user } = useContext(AuthContext)

  return (
    <div>
      <aside>
        <nav className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/exercises">Exercises</NavLink></li>
                <li><NavLink to="/favourites">Favourite Exercises</NavLink></li>
                <li><NavLink to="/reflections">Reflections</NavLink></li>
                <li><NavLink to="new-reflection">New Reflection</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

              </ul>
            </div>
          </div>
          <div className="navbar-center">
            <a className="btn btn-ghost text-xl hidden sm:flex lg:flex">mindful moments</a>
          </div>
          <div className="navbar-end">
            <span>Hello {user.name}!</span>
            <button className="btn btn-ghost btn-circle"
              onClick={() => logOut()}>
              <img
                src="images/user-logout.png"
                alt="logout"
                className="w-5" />
            </button>

          </div>
        </nav>

      </aside>


      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default navbarUser