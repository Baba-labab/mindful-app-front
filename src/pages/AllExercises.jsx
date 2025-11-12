import { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import ExerciseCard from '../components/ExerciseCard'
import { AuthContext } from '../context/auth.context';
import CategoryCard from '../components/CategoryCard';

const API_URL = "http://localhost:5005"

function AllExercises() {
  const { setIsLoading } = useContext(AuthContext)
  const [message, setMessage] = useState("")
  const [exercises, setExercises] = useState([])


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
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center mt-5">How do you want to spent your break?</h2>
        <span className='justify-center mt-2'>This is an overview of all available exercises. You can filter them by category</span>
      </div>


      <CategoryCard />
      <div className="flex justify-center">
        <ul className="list bg-base-100 rounded-box shadow-md">

          {exercises && (exercises.map((exercise) => <ExerciseCard key={exercise._id} exercise={exercise} />))}

        </ul>
      </div>


    </>
  )
}

export default AllExercises