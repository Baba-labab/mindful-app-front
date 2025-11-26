import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import { NavLink } from 'react-router-dom'
import NavbarUser from '../components/NavbarUser'
import NavbarPublic from '../components/NavbarPublic'
import Footer from '../components/Footer'

function Contact() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <div className="min-h-screen flex flex-col">
      {isLoggedIn ? <NavbarUser /> : <NavbarPublic />}
      <div className="px-4 bg-base-300 min-h-screen bg-no-repeat bg-cover">
        <main className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 m-4">
          
          <div className="flex justify-center items-center md:mt-20">
          <img className="p-4 w-full h-auto object-contain rounded-full"
            src="/images/rest.jpg" alt="profile picture of Barbara" />
          </div>
      <div className="flex flex-col justify-center">
        <h1 className="font-bold text-2xl md:text-3xl mt-4 mb-2">About me</h1>

        <div className="grid grid-cols-2">
          <span className="text-xs uppercase font-semibold opacity-60">Text</span>

          <span className='grid'>Hi, I'm Barbara!</span>

          <span>Text</span>
        </div>

        <p className="mb-4">Text</p>

        <div className="flex flex-row gap-4">
          <NavLink to="/exercises">
            <button className="btn btn-secondary btn-sm md:btn-md mb-5 p-3">LinkedIn</button>
          </NavLink>

          <NavLink to="/new-reflection">
            <button className="btn btn-secondary btn-sm md:btn-md mb-5">GitHub</button>
          </NavLink>
        </div>
      </div>

    </main>
      </div >
    <Footer></Footer>
    </div >
  )
}

export default Contact