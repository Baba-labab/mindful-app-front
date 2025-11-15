import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

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

        <svg xmlns="http://www.w3.org/2000/svg"

          fill='none'
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 mb-5 ml-5"

        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>

        <p>{exercise.description}</p>

        <p>Related reflections:</p>
        <NavLink to="/exercises">
          <button className="btn btn-rounded btn-outline">back to all exercises</button>
        </NavLink>



      </main>


    </div>
  )
}

export default SingleExercise