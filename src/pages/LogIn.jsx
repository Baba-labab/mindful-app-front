import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import axios from 'axios'
import { useNavigate, Link } from 'react-router-dom'
const API_URL = "http://localhost:5005"

function LogIn(props) {
const { storeToken, authenticateUser } = useContext(AuthContext)

const [ email, setEmail ] = useState("");
const [ password, setPassword ] = useState("");
const [ message, setMessage ] = useState(undefined);

const navigate = useNavigate();

const handleEmail = (e) => setEmail(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);

const handleLogin = async (e) => {
 e.preventDefault()

  try {
    const res = await axios.post(`${API_URL}/auth/login`, {
      email, password
    })
    storeToken(res.data.authToken);
    await authenticateUser();
    navigate("/dashboard");
  }
  catch(error) {
    console.error("LoginError")
  setMessage(error.response?.data?.message || "Error logging in")
  }
};

  return (
    <div>
      {message && <p style={{ color: "red" }}>{message}</p>}
      <main>
        <h1>Log In</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
          <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail} />

       <label>Password</label>
          <input 
          type="password"
          name="password"
          value={password}
          onChange={handlePassword} />

          <button type="submit">Log in</button>
      </form>
      
      <Link to="/">
          <button>Home</button>
        </Link>
      </main>
    </div>
  )
}

export default LogIn