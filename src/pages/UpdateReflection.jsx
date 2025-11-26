import axios from 'axios'
import { useState, useEffect, useContext } from "react"
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'
import Footer from '../components/Footer'

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function UpdateReflection() {
  const { user } = useContext(AuthContext)
  const { id } = useParams()

  const [reflection, setReflection] = useState("");
  const [mood, setMood] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState("");
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  //Get exercise data for selection field
  const getExercises = async () => {

    try {
      const res = await axios.get(`${API_URL}/exercises`)

      const allExercises = res.data
      setExercises(allExercises);

    }
    catch (error) {
      setMessage({type: "error", text: "An error occured while loading exercises"})
    }
  }


  //Get reflection data from backend
  const getData = async () => {
    try {
      const storedToken = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/reflections/${id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      const data = res.data;
      setReflection(data);

      const formattedDate = data.date
        ? new Date(data.date).toISOString().split("T")[0]
        : "";

      setTitle(data.title)
      setDate(formattedDate)
      setMood(data.mood)
      setText(data.text)
      setSelectedExerciseId(data.relatedExercise)
    }
    catch (error) {
      setMessage({type: "error", text: "Error loading exercise data"} )
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getExercises();
      await getData();
      setIsLoading(false);
    }

    fetchData();
  }, []);


  const handleSubmit = async (e) => {
    e.preventDefault();

    //alert if input fields are empty
    if (!text || !date) {
      setMessage({type: "warning", text: "Date and text are required!"})
      return
    };

    const editedReflection = {
      date,
      title,
      text,
      relatedExercise: selectedExerciseId,
      mood,
    };

    try {
      const storedToken = localStorage.getItem("token");
      const response = await axios.put(`${API_URL}/reflections/${id}`, editedReflection,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      await axios.put(`${API_URL}/users/${user._id}`,
        { reflections: editedReflection._id },
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      setMessage({type:"success", text:"You have successfully edited your reflection!"})
      setTimeout(() => {
        navigate("/reflections")
      }, 1500);

      setTitle("")
      setDate("")
      setMood("")
      setText("")
      setSelectedExerciseId("")

    }
    catch (error) {
      setMessage({ type: "error", text: "An error occured while saving your reflection"})
      
    };
  };

  const handleDelete = async (e) => {
    e.preventDefault();

    try {
      const storedToken = localStorage.getItem("token");
      const resData = await axios.delete(`${API_URL}/reflections/${id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      )

      setMessage({type:"success", text:"You have successfully deleted your reflection!"})
      setTimeout(() => {
        navigate("/reflections")
      }, 1500);

      setTitle("")
      setDate("")
      setMood("")
      setText("")
      setSelectedExerciseId("")

    }
    catch (error) {
      setMessage({ type: "error", text: "An error occured while deleting your reflection!"})
      
    }
  }


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

      <h2 className="text-2xl md:text-4xl text-center text-white p-4 md:mb-5">Edit your reflection</h2>

      <main className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="flex justify-center w-full md:w-2/3 p-4">

          <div className='w-full flex flex-col items-center bg-white rounded-lg opacity-80 p-4 md:w-2/3'>
            <fieldset className="flex flex-col justify-center w-full max-w-md mb-2">
              <legend className="fieldset-legend font-bold">Title</legend>
              <input id="title" name="title" type="text" value={title} className="input w-full" onChange={(e) => setTitle(e.target.value)} />
            </fieldset>

            <fieldset className="flex justify-center flex-col w-full max-w-md mt-2" >
              <legend className="font-bold">Related exercise</legend>
              <select className="select w-full" id="exercise" name="exercise" value={selectedExerciseId} onChange={(e) => setSelectedExerciseId(e.target.value)}>
                <option value="" disabled>Pick an exercise</option>
                {exercises.map((ex => <option key={ex._id} value={ex._id}>{ex.title}</option>))}
              </select>
              <span className="label">required</span>
            </fieldset>

            <fieldset className="flex justify-center flex-col w-full max-w-md">
              <legend className="fieldset-legend font-bold">Your mood right now</legend>
              <select className="select w-full" id="mood" name="mood" value={mood} onChange={(e) => setMood(e.target.value)}>
                <option value="" disabled>Pick a mood</option>
                <option value="calm">calm</option>
                <option value="tired">tired</option>
                <option value="energized">energizes</option>
                <option value="stressed">stressed</option>
                <option value="content">content</option>
                <option value="sad">sad</option>
                <option value="happy">happy</option>
                <option value="restless">restless</option>
                <option value="loved">loved</option>
                <option value="connected">connected</option>
                <option value="angry">angry</option>
              </select>
              <span className="label">required</span>
            </fieldset>

            <fieldset className="flex flex-col justify-center w-full max-w-md " >
              <legend className="fieldset-legend font-bold">Date</legend>
              <input id="date" name="date" type="date" value={date} className="input w-full" onChange={(e) => setDate(e.target.value)} />
            </fieldset>

            <fieldset className="flex justify-center flex-col w-full max-w-md mt-2">
              <legend className="fieldset-legend font-bold">Your reflection</legend>
              <textarea id="text" name="text" className="textarea h-24 w-full" value={text} placeholder="Start writing..." onChange={(e) => setText(e.target.value)}></textarea>
              {/* <div className="label">Max text length?</div> */}
            </fieldset>

            <div className="flex justify-center flex-col md:flex-row gap-2 mt-4">
              <button type='submit' className="btn btn-secondary btn-md mb-4">Save</button>
              <button onClick={handleDelete} className="btn btn-error btn-md mb-4">Delete</button>
              <NavLink to="/reflections">
                <button className="btn btn-secondary btn-md mb-4">All reflections</button>
              </NavLink>
            </div>
          </div>

        </form>


        <NavLink to="/dashboard">
          <button className="btn btn-primary btn-md mb-4 mt-4">Dashboard</button>
        </NavLink>
      </main>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default UpdateReflection