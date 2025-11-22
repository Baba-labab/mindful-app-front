import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

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

  if (loading) return <div className="flex justify-center mt-10">
    <span className="loading loading-ring loading-lg"></span>
  </div>

  else {

    return (
      <div className="px-4 bg-[url(/images/inhale-exhale.jpg)] h-screen bg-no-repeat bg-cover">


        <main className="flex flex-col justify-center items-center">
          <div className="bg-white rounded-lg opacity-60 md:w-1/3 mb-4 mt-4 p-4">

            <h1 className="font-bold text-3xl text-center p-4">{reflection.title}</h1>
            <fieldset className="flex flex-row gap-2 border rounded-lg p-2 m-2">
              <legend className="font-bold">Mood</legend>
              <span className=""> {reflection.mood}</span>
            </fieldset>

            <p className="flex justify-start border rounded-lg p-2 m-2 italic text-lg">"{reflection.text}"</p>

            <fieldset className="flex flex-row gap-2 border rounded-lg p-2 m-2">
              <legend className="font-bold">Related exercise</legend>
              <p className="flex justify-start"> {reflection.relatedExercise.title}</p>
            </fieldset>


          </div>
          <div className="flex flex-row gap-2">
            <div className="card-actions justify-center ">
              <NavLink to={`/update-reflection/${id}`}>
                <button className="btn btn-secondary btn-md mb-4">Edit</button>
              </NavLink>
            </div>

            <div className="card-actions justify-center">
              <button className="btn btn-secondary btn-md mb-4">Delete</button>
            </div>
          </div>
          <div className="card-actions justify-center">
            <NavLink to="/reflections">
              <button className="btn btn-rounded btn-outline mb-5">Back to all reflections</button>
            </NavLink>
          </div>
        </main>

      </div>

    )
  }
}

export default SingleReflection