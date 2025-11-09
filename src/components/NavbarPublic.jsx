import { Outlet, NavLink } from "react-router-dom"

function NavbarPublic() {
  return (
    <div>
      <nav>
        <NavLink>Home</NavLink>
        <NavLink>About</NavLink>
        <NavLink>Log in</NavLink>
        <NavLink>Sign up</NavLink>
        <NavLink>Contact</NavLink>
      </nav>

      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default NavbarPublic