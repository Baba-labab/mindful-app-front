import { useState, useContext, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../context/auth.context'

const API_URL = "http://localhost:5005"

function SignUp() {
  const { isLoggedIn } = useContext(AuthContext)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")

  const navigate = useNavigate()

  const handleName = (e) => { setName(e.target.value) }
  const handleEmail = (e) => { setEmail(e.target.value) }
  const handlePassword = (e) => { setPassword(e.target.value) }



  const handleSignUp = async (e) => {
    e.preventDefault()
    const newUser = {
      name: name,
      email: email,
      password: password
    }
    try {
      const res = await axios.post(`${API_URL}/auth/signup`, newUser);

      setMessage("You have successfully registered!")
      setName("")
      setEmail("")
      setPassword("")

      setTimeout(() => {
        navigate("/login")
      }, 1500);
    }
    catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong!")
    }
  }


  return (
    <>
      {message && (
        <div role="alert" className="alert alert-warning alert-outline m-4">
          <span>{message}</span>
        </div>
      )}
      <main className="Signup">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
          <label htmlFor='name'>Name</label>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter your name"
            onChange={handleName} />

          <label htmlFor='email'>Email</label>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleEmail} />

          <label htmlFor='password'>Password</label>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter a password"
            onChange={handlePassword} />

          <button type="submit">Sign up</button>

        </form>
        <p>If your already have an account, you can login{" "}<Link to="/login">here</Link></p>

        <Link to="/">
          <button>Home</button>
        </Link>


      </main>
    </>

  )
}

export default SignUp