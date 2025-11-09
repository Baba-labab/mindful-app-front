import { Outlet, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import { useContext } from 'react'

function navbarUser() {
const { LogOut } = useContext(AuthContext)

  return (
    <div>
      <aside>
        <nav>
          <NavLink to="user/:id">Dashboard</NavLink>
          <NavLink to="/exercises">Exercises</NavLink>
          <NavLink to="/favourites">Favourite Exercises</NavLink>
          <NavLink to="/reflections">Reflections</NavLink>
          <NavLink to="new-reflection">New Reflection</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          {/* <NavLink>Input</NavLink> */}
          <NavLink to="/contact">Contact</NavLink>
        </nav>
        <button onClick={LogOut}>Logout</button>
      </aside>


      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default navbarUser