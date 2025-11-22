import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <div className="px-4">
      <div className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(/images/shellfish.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Breathe</h1>
            <NavLink to="/exercises">
              <button className="btn btn-neutral mt-5">Start your break</button>
            </NavLink>
            <p className="mb-5 mt-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>

            <NavLink to="/reflections">
              <button className="btn btn-primary mt-5">View your reflections</button>
            </NavLink>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard