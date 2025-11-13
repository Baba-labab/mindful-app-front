import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const API_URL = "http://localhost:5005"

function SingleExercise() {
  const [exercise, setExercise] = useState({})
  const [message, setMessage] = useState("")

  const { id } = useParams()
  //console.log("useParams id:", id);


  //Get exercise data from backend
  const getData = async () => {
    try {
      const res = await axios.get(`${API_URL}/exercises/${id}`)

      const data = res.data;
      setExercise(data);
    }
    catch (error) {
      setMessage(error.response?.data?.message || "Error loading exercise data")
    }
  }

  useEffect(() => {
    getData();

  }, [id])


  return (
    <div>
      <h1>{exercise.title}</h1>
      <div></div>


    </div>
  )
}

export default SingleExercise