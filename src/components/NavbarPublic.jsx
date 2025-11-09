import { Outlet, NavLink } from "react-router-dom"

function NavbarPublic() {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink to="/login">Log in</NavLink>
        <NavLink to="/signup">Sign up</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default NavbarPublic