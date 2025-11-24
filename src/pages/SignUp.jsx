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

      setMessage({type: "success", text: "You have successfully registered!"})
      setName("")
      setEmail("")
      setPassword("")

      setTimeout(() => {
        navigate("/login")
      }, 1500);
    }
    catch (error) {
      const errorMessage = error.response?.data?.message || "Something went wrong!"
      setMessage({type: "error", text: errorMessage })
    }
  }


  return (
    <>
      <div className="bg-[url(/images/sea.jpg)] min-h-screen bg-no-repeat bg-cover">

      {message && (
        <div className="flex justify-center">
        <div className={`
          p-3 rounded-md m-4 text-sm flex justify-center
      ${message.type === "error" && "bg-red-200 text-red-800"}
      ${message.type === "warning" && "bg-yellow-200 text-yellow-800"}
      ${message.type === "success" && "bg-green-200 text-green-800"}
        `}>
          {message.text}
        </div>
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
              <div>Must contain 6 characters, 1 letter, 1 upper- & 1 lowercase, 1 number</div>

            <button type="submit" className="btn btn-secondary mt-6 w-full" >Sign up</button>
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