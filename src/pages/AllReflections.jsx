import { useEffect, useContext, useState } from 'react'
import axios from 'axios';
import { AuthContext } from '../context/auth.context';
import ReflectionCard from '../components/ReflectionCard';

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function AllReflections() {
  const {user} = useContext(AuthContext)
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
      setMessage(error.response?.data?.message)
    }
    finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {

    getReflections();

  }, []);


  return (
    <div className="px-4 bg-[url(/images/sea.jpg)] h-screen bg-no-repeat bg-cover">
      {isLoading ? (<div className="flex justify-center mt-10">
        <span className="loading loading-ring loading-lg"></span>
      </div>) : (
        <>
          <div className="flex flex-col justify-center items-center ">
            <h2 className="text-4xl text-center mt-5">My Reflections</h2>
            <span className='justify-center mt-2'>This is an overview of all your reflections</span>
          </div>

          <div className='flex justify-center mb-10 mt-10'>
            <div className='list bg-base-100 rounded-box shadow-md'>

              {reflections && (reflections.map((ref) => <ReflectionCard key={ref._id} ref={ref} />))}
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default AllReflections