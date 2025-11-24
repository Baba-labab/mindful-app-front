import axios from 'axios'
import { useContext, useState, useEffect } from 'react'
import { AuthContext } from '../context/auth.context'
import ExerciseCard from '../components/ExerciseCard';
import { NavLink } from "react-router-dom"

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run";


function FavExercises() {
  const { user } = useContext(AuthContext);
  const [exercises, setExercises] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const getFavExercises = async () => {

    try {
      setIsLoading(true)
      const storedToken = localStorage.getItem("token");

      const res = await axios.get(`${API_URL}/users/${user._id}`,
        { headers: { Authorization: `Bearer ${storedToken}` } }
      );

      const userData = res.data;
      const userFavourites = userData.favExercises;
      setExercises(userFavourites);
    }
    catch (error) {
      setMessage(error.response?.data?.message);
    }
    finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (user) {
      getFavExercises();
    }

  }, [user]);


  return (

    <div className="px-4 min-h-screen bg-[url(/images/to-go-biking.jpg)] bg-cover bg-no-repeat bg-center">
      {isLoading ? (
        <div className="flex justify-center mt-10">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : (

        <div className="flex flex-col justify-center items-center">
          <h2 className="text-4xl text-center mt-5">My Favourite Exercises</h2>

          <main>
            <div className="flex justify-center">
              <div className="list bg-base-100 rounded-box shadow-md mt-10 mb-10">

                {exercises && (exercises.map((exercise) => <ExerciseCard key={exercise._id} exercise={exercise} />))}

              </div>
            </div>
            <div className="flex justify-center">
              <NavLink to="/exercises">
                <button className="btn btn-primary btn-md mb-4 mt-4">All exercises</button>
              </NavLink>
            </div>


          </main>
        </div>
      )}
    </div>

  )
}

export default FavExercises