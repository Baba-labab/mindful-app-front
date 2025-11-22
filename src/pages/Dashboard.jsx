import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'

function Dashboard() {
  const { user } = useContext(AuthContext)
  return (
    <div className="h-screen overflow-hidden">
      <div className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/shellfish.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-6xl font-bold">Welcome {user.name} to your mindful break!</h1>
            <p className="mb-5 mt-5 text-lg">
              What do you want to do now?
            </p>
            <div className="grid grid-cols-1">
              <NavLink to="/exercises">
              <button className="btn btn-neutral mt-5">Start your break</button>
            </NavLink>
            
            <NavLink to="/reflections">
              <button className="btn btn-primary mt-5">View your reflections</button>
            </NavLink>
            </div>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard