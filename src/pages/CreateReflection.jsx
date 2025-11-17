import axios from 'axios'
import { useState, useEffect, useContext } from "react"
import { useNavigate, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/auth.context'

const API_URL = "http://localhost:5005"

function CreateReflection() {
  const { authenticateUser } = useContext(AuthContext)

  const [mood, setMood] = useState("");
  const [date, setDate] = useState("");
  const [text, setText] = useState("");
  const [title, setTitle] = useState("");
  const [selectedExerciseId, setSelectedExerciseId] = useState("");
  const [message, setMessage] = useState("");
  const [exercises, setExercises] = useState([]);
  const navigate = useNavigate();

  const getExercises = async () => {

    try {
      const storedToken = localStorage.getItem("token");
      const res = await axios.get(`${API_URL}/exercises`,
        { headers: { Authorization: `Bearer ${storedToken}` } })

      const allExercises = res.data
      setExercises(allExercises);

    }
    catch (error) {
      setMessage(error.response?.data?.error || "An error occured while loading exercises")
    }
  }

  useEffect(() => {
    getExercises();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //alert if input fields are empty
    if (!text || !date) {
      setMessage("Date and text are required!")
      return
    };

    const newReflection = {
      date,
      title,
      text,
      relatedExercise: selectedExerciseId,
      mood,
    };



    try {
      const storedToken = localStorage.getItem("token");
      const response = await axios.post(`${API_URL}/reflections`, newReflection,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      authenticateUser();

      setMessage("You have successfully created a new reflection!")
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
    };
  };


  return (
    <div className="px-4">
      <h2 className="text-4xl text-center mt-5">Start writing a new reflection</h2>

      <p>Instructions and input</p>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend className="fieldset-legend">Title</legend>
          <input id="title" name="title" type="text" value={title} className="input" placeholder="Name your reflection" onChange={(e) => setTitle(e.target.value)} />
        </fieldset>

        <fieldset>
          <legend className="fieldset-legend">Related Exercise</legend>
          <select className="select" id="exercise" name="exercise" value={selectedExerciseId} onChange={(e) => setSelectedExerciseId(e.target.value)}>
            <option value="" disabled>Pick an exercise</option>
            {exercises.map((ex => <option key={ex._id} value={ex._id}>{ex.title}</option>))}
          </select>
          <span className="label">Optional</span>
        </fieldset>

        <fieldset>
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

        <fieldset>
          <legend className="fieldset-legend">Date</legend>
          <input id="date" name="date" type="date" value={date} className="input" onChange={(e) => setDate(e.target.value)} />
        </fieldset>

        <fieldset>
          <legend className="fieldset-legend">Your reflection</legend>
          <textarea id="text" name="text" className="textarea h-24" value={text} placeholder="Start writing..." onChange={(e) => setText(e.target.value)}></textarea>
          <div className="label">Max text length?</div>
        </fieldset>

        <button type='submit'>Save</button>
      </form>
      <NavLink to="/dashboard">
        <button>Dashboard</button>
      </NavLink>


    </div>
  )
}

export default CreateReflection