import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function LogIn(props) {
  const { user, storeToken, authenticateUser } = useContext(AuthContext)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLogin = async (e) => {
    e.preventDefault()

    if (!email || !password) {
      setMessage({ type: "warning", text: "email and password are required!" })
      return
    }

    try {
      const res = await axios.post(`${API_URL}/auth/login`, {
        email, password
      })
      storeToken(res.data.authToken);

      await authenticateUser();
      navigate("/dashboard");
    }
    catch (error) {
      console.error("LoginError")
      const errorMessage = error.response?.data?.message || "Invalid email or password"
      setMessage({type: "error", text: errorMessage} )
    }
  };

  return (
    
    <div className="bg-[url(/images/sea.jpg)] h-screen bg-no-repeat bg-cover">

      {message && (
        <div className='flex justify-center'>
          <div className={`
          p-3 rounded-md mb-4 text-sm mt-4 flex justify-center
      ${message.type === "error" && "bg-red-200 text-red-800"}
      ${message.type === "warning" && "bg-yellow-200 text-yellow-800"}
      ${message.type === "success" && "bg-green-200 text-green-800"}
        `}>
            {message.text}
          </div>
        </div>
      )}

      <main className="min-h-screen flex items-center justify-center px-4">

        <form onSubmit={handleLogin}
          className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-6 shadow-md">
          <legend className="fieldset-legend text-xl font-semibold mb-4">
            Log In
          </legend>
          <label className="label">
            <span className='label-text'>Email</span></label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
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
            onChange={handlePassword}
            className="input input-bordered w-full"
            required />

          <button type="submit" className="btn btn-secondary mt-6 w-full" >Log in</button>
          <Link to="/" className="btn btn-outline mt-3 w-full">
            <button>Home</button>
          </Link>

          <p>You don't have an account yet? Sign up {" "}<Link to="/signup" className="font-bold">here</Link></p>

        </form>


      </main>
    </div>
  )
}

export default LogIn