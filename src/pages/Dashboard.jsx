import { NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import Footer from '../components/Footer'

function Dashboard() {
  const { user } = useContext(AuthContext)
  return (
    <>

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
              <h1 className="mb-5 uppercase text-2xl md:text-2xl ">Welcome {user.name} to your mindful break!</h1>
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

      <div>
        <h1 className="mb-10 mt-20 text-xl text-center uppercase md:text-xl ">Time to make a break!</h1>
        <div className="flex flex-col items-center">
          <div className="flex justify-center items-center w-64 h-64 bg-blue-950 rounded-full">
            <span className="flex justify-center text-4xl italic uppercase text-white opacity-50">pause</span>
          </div>
          <div className='flex flex-col justify-center'>
            <span className="mt-10 text-center italic" >For a minute, close your eyes and take a few deep breaths. </span>
            <p className="mt-2 text-center italic">Then start feeling your body. Don't judge what comes up. Just observe.</p>
            <p className="mt-5 text-center text-lg italic font-bold">Now ask yourself: What do I need right now?</p>


            <ul className="list bg-base-100 rounded-box shadow-md mt-5 mb-10">

              <li className="list-row">
                <div><img className="size-10 rounded-box" src="/images/equality.png" /></div>
                <div>
                  <div>Balance</div>
                  <div className="text-xs uppercase font-semibold opacity-60">If you feel overwhelmed, confused or stressed.</div>
                </div>
                {/* <button className="btn btn-square btn-ghost">
                  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                </button> */}

              </li>

              <li className="list-row">
                <div><img className="size-10 rounded-box" src="/images/functional.png" /></div>
                <div>
                  <div>Energy</div>
                  <div className="text-xs uppercase font-semibold opacity-60">If you feel tired, numb or need energy.</div>
                </div>
                {/* <button className="btn btn-square btn-ghost">
                  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                </button> */}

              </li>

              <li className="list-row">
                <div><img className="size-10 rounded-box" src="/images/idea.png" /></div>
                <div>
                  <div>Expression</div>
                  <div className="text-xs uppercase font-semibold opacity-60">If you feel the need to express yourself.</div>
                </div>
                {/*  <button className="btn btn-square btn-ghost">
                  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                </button> */}

              </li>

              <li className="list-row">
                <div><img className="size-10 rounded-box" src="/images/network-user.png" /></div>
                <div>
                  <div>Connection</div>
                  <div className="text-xs uppercase font-semibold opacity-60">If you want to feel connected.</div>
                </div>
                {/* <button className="btn btn-square btn-ghost">
                  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                </button> */}

              </li>

              <li className="list-row">
                <div><img className="size-10 rounded-box" src="/images/gymnast-diet.png" /></div>
                <div>
                  <div>Nourishment</div>
                  <div className="text-xs uppercase font-semibold opacity-60">If your bory needs nourishment.</div>
                </div>
                {/*  <button className="btn btn-square btn-ghost">
                  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                </button> */}

              </li>

              <li className="list-row">
                <div><img className="size-10 rounded-box" src="/images/sleep.png" /></div>
                <div>
                  <div>Rest</div>
                  <div className="text-xs uppercase font-semibold opacity-60">If you feel tired and need to rest.</div>
                </div>
                {/* <button className="btn btn-square btn-ghost">
                  <svg className="size-[1.2em]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M6 3L20 12 6 21 6 3z"></path></g></svg>
                </button> */}

              </li>

            </ul>
            <div className="flex justify-center">
              <NavLink to="/exercises">
                <button className="btn btn-primary mb-10">Find your exercise</button>
              </NavLink>
            </div>
          </div>

        </div>

      </div>
      <Footer></Footer>


    </>

  )
}

export default Dashboard