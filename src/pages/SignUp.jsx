import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'


const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function SignUp() {

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
      <div className="bg-[url(/images/sea.jpg)] h-screen bg-no-repeat bg-cover">
        {message && (
          <div role="alert" className="alert alert-warning alert-outline m-4">
            <span>{message}</span>
          </div>
        )}

        <main className="min-h-screen flex items-center justify-center px-4">

          <form onSubmit={handleSignUp}
            className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-6 shadow-md">
            <legend className="fieldset-legend text-xl font-semibold mb-4">
              Sign up
            </legend>

            <label className="label">
              <span className='label-text'>Name</span></label>
            <input
              type="name"
              id="name"
              name="text"
              value={name}
              placeholder="Enter a username"
              onChange={handleName}
              className="input input-bordered w-full"
              required />

            <label className="label">
              <span className='label-text'>Email</span></label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="Enter your emailadress"
              onChange={handleEmail}
              className="input input-bordered w-full"
              required />

            <label className='label mt-3'>
              <span className="label-text">Password</span></label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              placeholder="Enter a secure password"
              onChange={handlePassword}
              className="input input-bordered w-full"
              required />

            <button type="submit" className="btn btn-neutral mt-6 w-full" >Sign up</button>
            <Link to="/" className="btn btn-outline mt-3 w-full">
              <button>Home</button>
            </Link>

            <p>If your already have an account, you can login{" "}<Link to="/login" className='font-bold'>here</Link></p>

          </form>


        </main>

      </div>

    </>

  )
}

export default SignUp