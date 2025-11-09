import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../context/auth.context'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function LogIn(props) {
const { storeToken, authenticateUser, user } = useContext(AuthContext)

const [ email, setEmail ] = useState(null);
const [ password, setPassword ] = useState(null);
const [ errorMessage, setErrorMessage ] = useState(undefined);

const navigate = useNavigate();

const handleEmail = (e) => setEmail(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);

const handleLogin = async () => {
  try {
    const res = await axios.post(`${API_URL}/auth/login`, {
      email, password
    })
    storeToken(res.data.authToken);
    authenticateUser();
    navigate(`/user/${user._id}`);
  }
  catch(error) {
  setErrorMessage(error.response.data.message)
  }
};

  return (
    <div>
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
          type="text"
          name="password"
          value={password}
          onChange={handlePassword} />

          <button type="submit">Log in</button>
      </form>
      
    </div>
  )
}

export default LogIn