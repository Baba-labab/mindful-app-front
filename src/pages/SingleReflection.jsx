import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const API_URL = "http://localhost:5005"

function SingleReflection() {
  const [reflection, setReflection] = useState({})
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(true)

  const { id } = useParams()

  //Get reflection data from backend
  const getData = async () => {
    try {
      const storedToken = localStorage.getItem("token");

      const res = await axios.get(`${API_URL}/reflections/${id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      const data = res.data;
      console.log(data)
      setReflection(data);
      setLoading(false)
    }
    catch (error) {
      setMessage(error.response?.data?.message || "Error loading exercise data")
    }
  }

  useEffect(() => {
    getData();

  }, [id])

  if(loading) return <p>Loading...</p>

  else {

  return (
    <div className="px-4">
      <h1 className="font-bold text-3xl mb-2">{reflection.title}</h1>

      <main>

        <span>Mood: {reflection.mood}</span>

        <p>{reflection.text}</p>

        <p>Related exercises: {reflection.relatedExercise.title}</p>

        <div className="card-actions justify-center ">
          <NavLink to={`/update-reflection/${id}`}>
            <button className="btn btn-neutral mt-5">Edit</button>
          </NavLink>
        </div>

        <div className="card-actions justify-center">
          <button className="btn btn-neutral mt-5">Delete</button>
        </div>

        <div className="card-actions justify-center">
          <NavLink to="/reflections">
            <button className="btn btn-rounded btn-outline mt-5">back to all reflections</button>
          </NavLink>
        </div>


      </main>

    </div>
  
  )
}
}

export default SingleReflection