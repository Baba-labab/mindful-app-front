import { NavLink } from 'react-router-dom'

function Home() {
  return (

    <div className="h-screen overflow-hidden">
      <div className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage:
            "url(/images/sea.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl md:text-6xl font-bold">Mindful Moments</h1>
            <p className="mb-5 mt-5 text-lg">
              This is an app that helps you spent your breaks better!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <NavLink to="/login">
              <button className="btn btn-primary mt-5">Login</button>
            </NavLink>
            
            <NavLink to="/signup">
              <button className="btn btn-neutral mt-5">Sign up</button>
            </NavLink>
            </div>
            
          </div>
        </div>
      </div>

    </div>

    
  )
}

export default Home