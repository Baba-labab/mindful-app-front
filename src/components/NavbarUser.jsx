import { Outlet, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { useContext } from 'react'

function navbarUser() {
  const { logout, user } = useContext(AuthContext)

  return (
    <div>
      
        <nav className="navbar bg-base-100 shadow-sm z-9999">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-9999 mt-3 ml-3 w-52 p-2 shadow">
                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
                <li><NavLink to="/exercises">Exercises</NavLink></li>
                <li><NavLink to="/favourites">Favourite Exercises</NavLink></li>
                <li><NavLink to="/reflections">Reflections</NavLink></li>
                <li><NavLink to="/new-reflection">New Reflection</NavLink></li>
                <li><NavLink to="/profile">Profile</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>

              </ul>
            </div>
          </div>
          <div className="navbar-center">
           
            <img src="/images/mm-logo-1.png" alt="mindful moments" className="w-20 h-20"></img>
            <a className="btn btn-ghost text-xl text-blue-950 italic hidden sm:flex lg:flex">my mindful moments</a>
          </div>
          <div className="navbar-end">
            {/* <span>Hello!</span> */}
            <button className="btn btn-ghost btn-circle"
              onClick={() => logout()}>
              <img
                src="images/user-logout.png"
                alt="logout"
                className="w-5" />
            </button>

          </div>
        </nav>

      


      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default navbarUser