import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <div className="bg-[url(/images/sea.jpg)] h-screen bg-no-repeat bg-cover">

      <div className="min-h-screen flex items-center justify-center">

        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-base-300 text-7xl">Mindful Moments</h1>

          <div>
            <NavLink to="/login">
              <button className='btn m-5'>Log in</button>
            </NavLink>
            <NavLink to="/signup">
              <button className='btn m-5'>Sign up</button>
            </NavLink>
          </div>
          
        </div>
      </div>

    </div>
  )
}

export default Home