import { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import ReflectionCard from '../components/ReflectionCard';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function AllReflections() {
  const { user } = useContext(AuthContext)
  const [isLoading, setIsLoading] = useState(true)
  const [message, setMessage] = useState("")
  const [reflections, setReflections] = useState([])


  const getReflections = async () => {

    try {
      setIsLoading(true)
      const res = await axios.get(`${API_URL}/reflections/user/${user._id}`)
      const foundReflections = res.data;
      setReflections(foundReflections)

    }
    catch (error) {
      setMessage("Error while loading reflections!")
    }
    finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {

    getReflections();

  }, []);


  return (
    <>
    <div className="px-4 bg-[url(/images/inhale-exhale.jpg)] min-h-screen bg-no-repeat bg-cover">

      {message && (
        <div className='flex justify-center'>
          <div className="p-3 rounded-md mb-4 text-sm flex justify-center bg-red-200 text-red-800">
            {message}
          </div>
        </div>
      )}

      {isLoading ? (<div className="flex justify-center mt-10">
        <span className="loading loading-ring loading-lg"></span>
      </div>) : (
        <>
          <div className="flex flex-col justify-center items-center">
            <h2 className="text-2xl md:text-4xl text-center text-white mt-5">My Reflections</h2>
            <span className='justify-center mt-2 text-white' >This is an overview of all your reflections</span>
          </div>

          <div className='flex justify-center mb-10 mt-10'>
            <div className='list bg-white/70 rounded-box shadow-md md:w-1/3'>

              {(reflections && reflections.length > 0 ? (reflections.map((ref) => <ReflectionCard key={ref._id} ref={ref} />)
              ) : (
                <p className="p-4">You have no reflections yet. Start now by hitting the button below.</p>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-4">
            <NavLink to="/new-reflection">
              <button className="btn btn-secondary btn-md">Write a new reflection</button>
            </NavLink>
            <NavLink to="/dashboard">
              <button className="btn btn-primary btn-md">Dashboard</button>
            </NavLink>
          </div>

        </>
      )}

    </div>
    <Footer></Footer>
    </>
    
  )
}

export default AllReflections