import { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import ExerciseCard from '../components/ExerciseCard'
import { AuthContext } from '../context/auth.context';
import CategoryCard from '../components/CategoryCard';

const API_URL = "http://localhost:5005"

function AllExercises() {
  const { setIsLoading } = useContext(AuthContext)
  const [message, setMessage] = useState("")
  const [ exercises, setExercises ] = useState([])


  const getExercises = async () => {

    try {
      setIsLoading(true)
      const res = await axios.get(`${API_URL}/exercises/`)
      const foundExercises = res.data;
      setExercises(foundExercises)

    }
    catch (error) {
      setMessage(error.response?.data?.message)
    }
    finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {

    getExercises();

  }, []);

  return (
    <>

      <h2>All Exercises</h2>

       <CategoryCard />

      <ul className="list bg-base-100 rounded-box shadow-md">

        {exercises && (exercises.map((exercise) => <ExerciseCard key={exercise._id} exercise={exercise} />))}

      </ul>

    </>
  )
}

export default AllExercises