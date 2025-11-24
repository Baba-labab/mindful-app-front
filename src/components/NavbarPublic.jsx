import { Outlet, NavLink } from "react-router-dom"

function NavbarPublic() {
  
  return (
    <div>

      <nav className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink>About</NavLink></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/signup">Sign up</NavLink></li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <a className="btn btn-ghost text-xl hidden sm:flex lg:flex">mindful moments</a>
          <img className=""></img>
        </div>
        <div className="navbar-end">
          <NavLink to="/login">
            <button className="btn btn-circle ml-5">
              <span>Login</span>
            </button>
          </NavLink>
          
        </div>
      </nav>
      
      <main>
        <Outlet />
      </main>


    </div>
  )
}

export default NavbarPublic