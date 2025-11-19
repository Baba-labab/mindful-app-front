import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const API_URL = "http://localhost:5005"

function SingleReflection() {
  const [reflection, setReflection] = useState({})
  const [message, setMessage] = useState("")

  const { id } = useParams()
  
  //Get reflection data from backend
  const getData = async () => {
    try {
      const storedToken = localStorage.getItem("token");
      
      const res = await axios.get(`${API_URL}/reflections/${id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      const data = res.data;
      setReflection(data);
    }
    catch (error) {
      setMessage(error.response?.data?.message || "Error loading exercise data")
    }
  }

  useEffect(() => {
    getData();

  }, [id])

  return (
    <div className="px-4">
      <h1 className="font-bold text-3xl mb-2">{reflection.title}</h1>

      <main>

        <span>Mood: {reflection.mood}</span>

        <p>{reflection.text}</p>

        <p>Related exercises: {reflection.relExercise}</p>

        <NavLink to="/reflections">
          <button className="btn btn-rounded btn-outline">back to all reflections</button>
        </NavLink>

      </main>

    </div>
  )
}

export default SingleReflection