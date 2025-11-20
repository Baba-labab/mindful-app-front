import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import HandleFavourites from '../components/HandleFavourites'

const API_URL = "http://localhost:5005"

function SingleExercise() {
  const [exercise, setExercise] = useState({})
  const [message, setMessage] = useState("")

  const { id } = useParams()

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
    <div className="px-4">
      <h1 className="font-bold text-3xl mb-2">{exercise.title}</h1>
      <main>

        <img src={exercise.imgUrl} alt={exercise.title} />

        {exercise.mediaType === "video" && (
          <video controls loop className="w-2/3 rounded-lg shadow-md">
            <source src={exercise.mediaUrl} type="video/mp4" />Your browser doesn't support this video format.
          </video>
        )}

        {exercise.mediaType === "audio" && (
          <audio controls className="w-2/3 mt-4">
            <source src={exercise.mediaUrl} type="audio/mpeg" />Your browser doesn't support this audio format.
          </audio>
        )}

        <span>{exercise.duration}</span>
        <HandleFavourites exerciseId={exercise._id}/>
        <p>{exercise.description}</p>

        <NavLink to="/exercises">
          <button className="btn btn-rounded btn-outline">back to all exercises</button>
        </NavLink>



      </main>


    </div>
  )
}

export default SingleExercise