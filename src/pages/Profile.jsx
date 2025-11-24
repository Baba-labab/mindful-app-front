import axios from 'axios'
import { useState, useEffect, useContext } from "react"
import { useNavigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function Profile() {
  const { user, setUser, logout } = useContext(AuthContext)

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);

  // const [password, setPassword] = useState(user.password);

  const navigate = useNavigate();


  const handleSubmit = async (e) => {
    e.preventDefault();

    //alert if input fields are empty
    if (!name || !email) {
      setMessage({ type: "warning", text: "Name and email are required!" })
      return
    };

    const editedUser = {
      name,
      email,
      //password
    };

    try {
      const storedToken = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/users/${user._id}`, editedUser,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );
    

      setUser(response.data)
      localStorage.setItem("user", JSON.stringify(response.data))

      setMessage({ type: "success", text: "You have successfully edited your profile!" })
      setTimeout(() => {
        setMessage("")
      }, 1500);


    }
    catch (error) {
      setMessage({ type: "error", text: "An error occured while updating your profile!" })

    };
  };

  const handleDelete = async () => {

    try {
      const storedToken = localStorage.getItem("token");
      await axios.delete(`${API_URL}/users/${user._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      setMessage({ type: "success", text: "You have successfully deleted your user profile!" })

      localStorage.removeItem("token");
      
      setTimeout(() => {
        logout();
        navigate("/")
      }, 1500);

    }
    catch (error) {
      setMessage({ type: "error", text: "An error occured while deleting your profile!" })

    }
  }


  return (
    <div className="px-4 bg-[url(/images/jump.jpg)]  bg-no-repeat bg-cover">

      {message && (
        <div className='flex justify-center'>
          <div className={`
          p-3 rounded-md mb-4 text-sm md:w-1/3 flex justify-center
      ${message.type === "error" && "bg-red-200 text-red-800"}
      ${message.type === "warning" && "bg-yellow-200 text-yellow-800"}
      ${message.type === "success" && "bg-green-200 text-green-800"}
        `}>
            {message.text}
          </div>
        </div>
      )}

      <h2 className="text-2xl md:text-4xl text-center text-black p-4 md:mb-5">Edit your profile</h2>

      <main className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="flex justify-center w-full md:w-2/3 p-4">

          <div className='w-full flex flex-col items-center bg-white rounded-lg opacity-90 p-4 md:w-2/3'>
            <fieldset className="flex flex-col justify-center w-full max-w-md mb-2">
              <legend className="fieldset-legend font-bold">Your name</legend>
              <input id="name" name="name" type="text" value={name} className="input w-full" onChange={(e) => setName(e.target.value)} />
            </fieldset>

            <fieldset className="flex flex-col justify-center w-full max-w-md mb-2">
              <legend className="fieldset-legend font-bold">Your email</legend>
              <input id="email" name="email" type="email" value={email} className="input w-full" onChange={(e) => setEmail(e.target.value)} />
            </fieldset>

            {/* <fieldset className="flex flex-col justify-center w-full max-w-md mb-2">
              <legend className="fieldset-legend font-bold">Your password</legend>
              <input id="name" name="name" type="text" value={user.name} className="input w-full" onChange={(e) => setName(e.target.value)} />
            </fieldset> */}

            <div className="flex justify-center flex-col md:flex-row gap-2 mt-4">
              <button type='submit' className="btn btn-secondary btn-md mb-4">Save</button>
              <button onClick={handleDelete} className="btn btn-secondary btn-md mb-4">Delete</button>

            </div>
          </div>

        </form>


        <NavLink to="/dashboard">
          <button className="btn btn-primary btn-md mb-4 mt-4">Dashboard</button>
        </NavLink>
      </main>
    </div>
  )
}

export default Profile