import { Outlet, NavLink } from "react-router-dom"

function NavbarPublic() {

  return (
    <div>

      <nav className="navbar fixed top-0 left-0 right-0 h-25 bg-base-100 shadow-sm z-9999">
        <div className="navbar-start">

          {/* menu for small screens */}
          <div className="dropdown md:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow">
              <li><NavLink to="/">Home</NavLink></li>
              {/* <li><NavLink to="/">About</NavLink></li> */}
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/sources">Resources</NavLink></li>

            </ul>
          </div>

          {/* menu for larger screens */}
          <div className="hidden md:flex flex-1 justify-start gap-2 ">
            <NavLink to="/">Home</NavLink>
            {/* <NavLink>About</NavLink> */}
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/sources">Resources</NavLink>


          </div>

        </div>
        <div className="navbar-center">
          <img src="/images/mm-logo-1.png" alt="mindful moments" className="w-20 h-20"></img>
          <NavLink to="/">
            <span className="btn btn-ghost text-xl  text-blue-950 italic hidden sm:flex lg:flex">my mindful moments</span>
          </NavLink>

          <img className=""></img>
        </div>
        <div className="navbar-end ">
          <NavLink to="/signup">
            <button className="btn btn-rounded ml-5 hidden md:flex">
              <span>Sign up</span>
            </button>
          </NavLink>

          <NavLink to="/login">
            <button className="btn btn-circle ml-5">
              <span>Login</span>
            </button>
          </NavLink>

        </div>
      </nav>

      <main className="pt-25">
        <Outlet />
      </main>


    </div>
  )
}

export default NavbarPublic