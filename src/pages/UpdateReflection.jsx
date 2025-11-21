import axios from 'axios'
import { useState, useEffect, useContext } from "react"
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

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
  const [message, setMessage] = useState("");
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
      setMessage(error.response?.data?.error || "An error occured while loading exercises")
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
      setMessage(error.response?.data?.message || "Error loading exercise data")
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
      setMessage("Date and text are required!")
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

      setMessage("You have successfully edited your reflection!")
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
      setMessage(error.response?.data?.error || "An error occured while saving your reflection")
      setTitle("")
      setDate("")
      setMood("")
      setText("")
      setSelectedExerciseId("")

    };
  };


  return (
    <div className="px-4">
      <h2 className="text-4xl text-center mt-5 mb-5">Edit your reflection</h2>

      <main className="card min-h-screen flex items-center justify-center px-4 border">
        <form onSubmit={handleSubmit} className="flex justify-center">

          <div>
            <fieldset className="flex justify-center">
              <legend className="fieldset-legend">Title</legend>
              <input id="title" name="title" type="text" value={title} className="input" onChange={(e) => setTitle(e.target.value)} />
            </fieldset>

            <fieldset className="flex justify-center" >
              <legend className="fieldset-legend">Related Exercise</legend>
              <select className="select" id="exercise" name="exercise" value={selectedExerciseId} onChange={(e) => setSelectedExerciseId(e.target.value)}>
                <option value="" disabled>Pick an exercise</option>
                {exercises.map((ex => <option key={ex._id} value={ex._id}>{ex.title}</option>))}
              </select>
              <span className="label">Optional</span>
            </fieldset>

            <fieldset className="flex justify-center">
              <legend className="fieldset-legend">Your mood right now</legend>
              <select className="select" id="mood" name="mood" value={mood} onChange={(e) => setMood(e.target.value)}>
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
              <span className="label">Optional</span>
            </fieldset>

            <fieldset className="flex justify-center" >
              <legend className="fieldset-legend">Date</legend>
              <input id="date" name="date" type="date" value={date} className="input" onChange={(e) => setDate(e.target.value)} />
            </fieldset>

            <fieldset className="flex justify-center">
              <legend className="fieldset-legend">Your reflection</legend>
              <textarea id="text" name="text" className="textarea h-24" value={text} placeholder="Start writing..." onChange={(e) => setText(e.target.value)}></textarea>
              <div className="label">Max text length?</div>
            </fieldset>

            <div className="flex justify-center">
              <button type='submit' className="btn btn-neutral w-2/3 mt-5 mb-5 ">Save</button>
            </div>
          </div>

        </form>

      </main>

      <button className="btn btn-neutral mt-5 mb-5">Delete</button>

      <NavLink to="/dashboard">
        <button className="btn btn-neutral mt-5 mb-5">Dashboard</button>
      </NavLink>


    </div>
  )
}

export default UpdateReflection