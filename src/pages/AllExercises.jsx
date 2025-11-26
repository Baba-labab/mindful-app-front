import { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import ExerciseCard from '../components/ExerciseCard'
import { AuthContext } from '../context/auth.context';
import CategoryCard from '../components/CategoryCard';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function AllExercises() {
  const { user } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState("")
  const [exercises, setExercises] = useState([])
  const [filteredExercises, setFilteredExercises] = useState([])
  const [isActive, setIsActive] = useState(null)

  const allCategories = [
    { name: "balance", categoryImg: "images/equality.png" },
    { name: "energy", categoryImg: "images/functional.png" },
    { name: "expression", categoryImg: "images/idea.png" },
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
    <>
      <div className="px-4 min-h-screen bg-[url(/images/to-go-biking.jpg)] bg-cover bg-no-repeat bg-center">
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-xl md:text-4xl text-center mt-5">How do you want to spend your break?</h2>
            <span className='text-sm md:text-lg text-center justify-center mt-2'>This is an overview of all available exercises. You can filter them by category</span>
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

          <div className="flex justify-center mb-4 gap-4">
            <button
              className="btn btn-secondary btn-sm md:btn-md"
              onClick={resetExercises}>All exercises</button>
            <NavLink to="/favourites">
              <button className="btn btn-secondary btn-sm md:btn-md">Favourite exercises</button>
            </NavLink>

          </div>

          <div className="flex justify-center">
            <div className="list bg-base-100 rounded-box shadow-md mb-10">

              {filteredExercises && (filteredExercises.map((exercise) => <ExerciseCard key={exercise._id} exercise={exercise} />))}

            </div>
          </div>
        </>
      )}
    </div>
    <Footer></Footer>
    </>
  
  )
}

export default AllExercises