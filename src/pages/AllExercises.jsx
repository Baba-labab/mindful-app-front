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
  const [filteredExercises, setFilteredExercises] = useState([])
  const [isActive, setIsActive] = useState(null)

  const allCategories = [
    { name: "balance", categoryImg: "images/equality.png" },
    { name: "energy", categoryImg: "images/functional.png" },
    { name: "expression", categoryImg: "images/magic.png" },
    { name: "connection", categoryImg: "images/network-user.png" },
    { name: "nourishment", categoryImg: "images/gymnast-diet.png" },
    { name: "rest", categoryImg: "images/sleep.png" }];


  const getExercises = async () => {

    try {
      setIsLoading(true)
      const res = await axios.get(`${API_URL}/exercises/`)
      const foundExercises = res.data;
      setExercises(foundExercises)
      setFilteredExercises(foundExercises)

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

  const filterExercises = (activeFilter) => {
    setIsActive(activeFilter)
    const newArray = exercises.filter(exercise => exercise.category === activeFilter);
    setFilteredExercises(newArray);
  }


  const resetExercises = () => {
    setIsActive(null);
    setFilteredExercises(exercises);
  }


  return (
    <div className="px-4">
      {/* <button onClick={() => filterExercises('energy')}>Filter by Energy</button> */}
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-4xl text-center mt-5">How do you want to spent your break?</h2>
        <span className='justify-center mt-2'>This is an overview of all available exercises. You can filter them by category</span>
      </div>
      
      <div className='flex justify-center mb-10 mt-10'>
        <div className='grid grid-cols-3 md:grid-cols-6 gap-4'>

          {allCategories.map((cat =>
            <CategoryCard
              key={cat.name}
              cat={cat}
              filterExercises={filterExercises}
              isActive={isActive === cat.name} />
          ))}
        </div>
      </div>

      <div className="flex justify-center mb-4">
        <button
          className="btn btn-outline"
          onClick={resetExercises}>all exercises</button>
      </div>

      <div className="flex justify-center">
        <div className="list bg-base-100 rounded-box shadow-md">

          {filteredExercises && (filteredExercises.map((exercise) => <ExerciseCard key={exercise._id} exercise={exercise} />))}

        </div>
      </div>


    </div>
  )
}

export default AllExercises