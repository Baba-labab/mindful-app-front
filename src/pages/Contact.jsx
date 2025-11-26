import { useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import NavbarUser from '../components/NavbarUser'
import NavbarPublic from '../components/NavbarPublic'
import Footer from '../components/Footer'

function Contact() {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <>
      {isLoggedIn ? <NavbarUser /> : <NavbarPublic />}
      <main>
        <p>You are welcome to contact us via</p>

      </main>


<Footer></Footer>
    </>
  )
}

export default Contact