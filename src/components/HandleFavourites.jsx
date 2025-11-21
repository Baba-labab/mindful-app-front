import { useState, useContext } from 'react'
import { AuthContext } from '../context/auth.context';
import axios from 'axios'

const API_URL = "https://site--mindful-back--gs6nhbyk5d2v.code.run"

function HandleFavourites({ exerciseId }) {

const [message, setMessage] = useState("")
const { user, setUser } = useContext(AuthContext)


    const toggleHeart = async () => {
        try {
            const storedToken = localStorage.getItem("token");
            
            //check if already in favourites and set state
            let updatedFavs;

            //console.log(user)

            if (user.favExercises.includes(exerciseId)) {
                updatedFavs = user.favExercises.filter(id => id !== exerciseId)
                

            } else {
                updatedFavs = [...user.favExercises, exerciseId]
                
            }

            //update user in backend
            const response = await axios.put(`${API_URL}/users/${user._id}`,
                { favExercises: updatedFavs },
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            //user with updated favArray
            setUser(response.data)
            
        }
        catch (error) {
            console.log(error)
            setMessage(error.response?.data?.message || "Error handling favourites")
        }
    } 

    return (
        <>
            <button onClick={()=>toggleHeart(exerciseId)} 
                className="btn btn-square btn-ghost">
                <svg className={`size-[1.2em] transition-transform duration-200 ease-out ${
                   user.favExercises.includes(exerciseId) ? "text-red-600 scale-125" : "text-gray-400 scale-100"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <g strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill={user.favExercises.includes(exerciseId) ? "currentColor" : "none" }
                        stroke="currentColor">
                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </g>
                </svg>
            </button>

            {message && <p className="text-red-500">{message}</p>}
        </>

    )
}

export default HandleFavourites