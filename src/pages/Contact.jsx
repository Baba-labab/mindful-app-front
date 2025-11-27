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
      <div className="px-4 bg-base-300 min-h-screen bg-cover">

        <h1 className="font-bold text-2xl md:text-3xl text-center p-4">About Me</h1>
        <main className="flex flex-col md:flex-row justify-center gap-10">

          <div className="flex justify-center items-center">
            <img className="p-4 w-64 h-auto object-contain rounded-full"
              src="/images/IMG_2277.JPG" alt="profile picture of Barbara" />
          </div>

          <div className="flex flex-col justify-center items-center">

            <span className="text-lg uppercase font-semibold opacity-60 mb-4">Hi, I'm Barbara -</span>

            <p className="mb-4 md:w-100 italic">
              an educator and former forest kindergarten practitioner who has learned how essential small moments of pause can be. After years in social and educational settings, I saw how quickly we lose ourselves in busy days and how much a brief mindful break can restore clarity and calm.</p>
              <p className="mb-4 md:w-100 italic">I created the Mindful Moments App to offer simple, grounding pauses that truly fit into everyday life, even when time feels tight.</p>

            <div className="flex flex-row gap-4 mb-10">
              <a href={"www.linkedin.com/in/barbara-goldbeck-7ba383367"}
                className="text-lg">LinkedIn</a>

              <a href={"https://github.com/Baba-labab"}
                className="text-lg">GitHub</a>
            </div>

          </div>

        </main>
      </div >
      <Footer></Footer>
    </div >
  )
}

export default Contact