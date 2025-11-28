import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'

function Home() {
  return (

    <div>
<nav className="navbar fixed top-0 left-0 right-0 bg-base-100 shadow-sm">
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
              <li><a href="#about" title="about">About</a></li>
              <li><NavLink to="/contact">Contact</NavLink></li>
              <li><NavLink to="/sources">Resources</NavLink></li>
              <li><NavLink to="/signup">Sign up</NavLink></li>
            </ul>
          </div>

          {/* menu for larger screens */}
          <div className="hidden md:flex flex-1 justify-start md:gap-6 ml-4">
            <NavLink to="/">Home</NavLink>
            <a href="#about" title="about">About</a>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/sources">Resources</NavLink>
          </div>

        </div>
        <div className="navbar-center">
          <img src="/images/mm-logo-1.png" alt="mindful moments" className="w-20 h-20"></img>
         <NavLink to="/">
          <span className="btn btn-ghost text-xl text-blue-950 italic hidden sm:flex lg:flex">my mindful moments</span>
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

      <div className="h-screen">
        <div className="hero min-h-screen bg-cover bg-center"
          style={{
            backgroundImage:
              "url(/images/sea.jpg)",
          }}
        >
          <div></div>
          <div className="text-neutral-content text-center">
            <div className="max-w-md">
              <h1 className="mb-5 text-4xl md:text-6xl text-gray-600 font-bold">Mindful Moments</h1>
              <p className="p-5 text-lg text-gray-600 italic">
                Pause in harmony with your needs
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

      <div id="about" className="px-4 mt-10 md:mt-20">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-center text-3xl font-bold mb-4">Take mindful breaks. Feel what you need.</h2>
          <p className='text-center mb-4 md:w-2/3'>We all should take more breaks and not just pause, but pause mindfully.
            In everyday life we often push past our limits. Exhaustion, stress, burnout: we overwork ourselves, forget to rest, and when we finally stop, we tend to distract or numb ourselves instead of truly taking care of our needs.
          </p>
          <span className="font-bold text-center">This app supports you exactly at that point.</span>
          <p className='text-center mb-4 md:w-2/3'>It offers a simple tool to help you take mindful breaks more often and to reconnect with what you really need.</p>
        </div>
      </div>

      <div className='bg-base-300 mt-10 md:mt-20 pb-10'>

        <h2 className="text-center text-3xl font-bold p-5">How it works</h2>
        <div className='grid grid-cols-1 md:grid-cols-3 md:mt-5 mb-10 px-4 md:px-10 gap-10'>

          <div className="flex flex-col">
            <img src="images/be-now.jpg" alt="wall with cut out words from magazine: be here now" className="h-64 w-auto rounded-full mt-2" />
            <h3 className="text-center text-lg font-bold mt-2">Connect to Your Body</h3>
            <p className="text-center">Everything starts with a short mindful moment that brings you back into your body: noticing your sensations, emotions, and needs — without judging them.</p>
          </div>

          <div className="flex flex-col">
            <img src="/images/bench.jpg" alt="text on a bench: take a little time to think" className="h-64 w-auto rounded-full mt-2" />
            <h3 className="text-center text-lg font-bold mt-2">Take Care of Yourself</h3>
            <p className="text-center">From there, the app guides you to a curated pool of ideas for how you can spend your break, tailored to what you need right now. You can choose from six categories, such as energy, balance and more.</p>
          </div>

          <div className="flex flex-col justify-center items-center">
            <img src="/images/rest.jpg" alt="Rest in scrabble letters on table" className="h-64 w-auto rounded-full mt-2" />
            <h3 className="text-center text-lg font-bold mt-2">Reflect and Integrate</h3>
            <p className="text-center">To deepen your experience, you can write short reflections, before or after your break. This helps you check in with yourself, track your mood, clarify your thoughts, and relate entries to specific exercises for later reference.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center text-3xl font-bold p-4">Free resources and transparency</h2>
        <p className="px-4 text-center">This app contains a curated selection of freely available exercises from around the internet. You can find all sources I used here:</p>
        <NavLink to="/sources">
          <button className="btn btn-primary mt-5 mb-10">Sources</button>
        </NavLink>
      </div>


      <Footer></Footer>
    </div>



  )
}

export default Home