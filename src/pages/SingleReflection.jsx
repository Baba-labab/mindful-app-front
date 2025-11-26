import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, NavLink, useNavigate } from 'react-router-dom'
import Footer from '../components/Footer'

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function SingleReflection() {
  const [reflection, setReflection] = useState({})
  const [message, setMessage] = useState(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate();

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
      setMessage({ type: "error", text: "Error loading exercise data" })
    }
  }

  useEffect(() => {
    getData();

  }, [id])

  const handleDelete = async () => {

    try {
      const storedToken = localStorage.getItem("token");
      const resData = await axios.delete(`${API_URL}/reflections/${id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      setMessage({ type: "success", text: "You have successfully deleted your reflection!" })
      setTimeout(() => {
        navigate("/reflections")
      }, 1500);

    }
    catch (error) {
      setMessage({ type: "error", text: "An error occured while deleting your reflection!" })

    }
  }

  if (loading) return <div className="flex justify-center mt-10">
    <span className="loading loading-ring loading-lg"></span>
  </div>

  else {

    return (
      <div className="min-h-screen flex flex-col">
        <div className="px-4 bg-[url(/images/inhale-exhale.jpg)] bg-no-repeat bg-cover grow">

          {message && (
            <div className='flex justify-center'>
              <div className={`
          p-3 rounded-md mb-4 text-sm flex justify-center
      ${message.type === "error" && "bg-red-200 text-red-800"}
      ${message.type === "warning" && "bg-yellow-200 text-yellow-800"}
      ${message.type === "success" && "bg-green-200 text-green-800"}
        `}>
                {message.text}
              </div>
            </div>
          )}

          <main className="flex flex-col justify-center items-center">
            <div className="bg-white rounded-lg opacity-60 md:w-1/3 mb-4 mt-4 p-4">

              <h1 className="font-bold text-3xl text-center p-4">{reflection?.title}</h1>
              <fieldset className="flex flex-row gap-2 border rounded-lg p-2 m-2">
                <legend className="font-bold">Mood</legend>
                <span className=""> {reflection?.mood}</span>
              </fieldset>

              <p className="flex justify-start border rounded-lg p-2 m-2 italic text-lg">"{reflection?.text}"</p>

              <fieldset className="flex flex-row gap-2 border rounded-lg p-2 m-2">
                <legend className="font-bold">Related exercise</legend>
                <p className="flex justify-start"> {reflection?.relatedExercise?.title}</p>
              </fieldset>


            </div>
            <div className="flex flex-row gap-2">
              <div className="card-actions justify-center ">
                <NavLink to={`/update-reflection/${id}`}>
                  <button className="btn btn-secondary btn-md mb-4">Edit</button>
                </NavLink>
              </div>

              <div className="card-actions justify-center">
                <button onClick={handleDelete} className="btn btn-error btn-md mb-4">Delete</button>
              </div>
            </div>
            <div className="card-actions justify-center">
              <NavLink to="/reflections">
                <button className="btn btn-rounded btn-primary mb-5">All reflections</button>
              </NavLink>
            </div>
          </main>

        </div>
        <Footer></Footer>
      </div>
    )
  }
}

export default SingleReflection