import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import HandleFavourites from '../components/HandleFavourites'
import Footer from '../components/Footer'

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

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
    <div className="h-screen flex flex-col">
      <div className="px-4 grow">

        <main className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 m-4">


          <div className="flex justify-center items-center md:mt-20">
            {exercise.mediaType !== "video" && (<img className="p-4 w-full h-auto object-contain rounded-full"
              src={exercise.imgUrl} alt={exercise.title} />)

            }
         
            {exercise.mediaType === "video" && (
              <video controls loop className="w-full md:w-2/3 rounded-lg shadow-md">
                <source src={exercise.mediaUrl} type="video/mp4" />Your browser doesn't support this video format.
              </video>
            )}

          </div>

          <div className="flex flex-col justify-center">
            <h1 className="font-bold text-2xl md:text-3xl mt-4 mb-2">{exercise.title}</h1>

            <div className="grid grid-cols-2">
              <span className="text-xs uppercase font-semibold opacity-60">Duration:  {exercise.duration}</span>

              <span className='grid'></span>

              <span><HandleFavourites exerciseId={exercise._id} /></span>
            </div>

            <p className="mb-4">{exercise.description}</p>

            {exercise.mediaType === "audio" && (
              <audio controls className="w-full md:w-2/3 mb-4">
                <source src={exercise.mediaUrl} type="audio/mpeg" />Your browser doesn't support this audio format.
              </audio>
            )}

            <div className="flex flex-row gap-4">
              <NavLink to="/exercises">
                <button className="btn btn-secondary btn-sm md:btn-md mb-5 p-3">All exercises</button>
              </NavLink>

              <NavLink to="/new-reflection">
                <button className="btn btn-secondary btn-sm md:btn-md mb-5">New reflection</button>
              </NavLink>
            </div>
          </div>

        </main>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SingleExercise