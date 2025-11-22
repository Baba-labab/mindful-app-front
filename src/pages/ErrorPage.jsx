import { NavLink } from 'react-router-dom'

function ErrorPage() {
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
            <h1 className="mb-5 text-5xl font-bold">Error 404</h1>

            <p className="mb-5 mt-5">
             This means your page cannot be found. Breath in and breath out and hit the home button!
            </p>
            <NavLink to="/">
            <button className="btn btn-primary mt-5">Home</button>
            </NavLink>
            
          </div>
        </div>
      </div>

    </div>
  )
}

export default ErrorPage