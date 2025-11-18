import { useState, useContext } from 'react'
import { AuthContext } from '../context/auth.context';
import axios from 'axios'

const API_URL = "http://localhost:5005"

function HandleFavourites({ exerciseId }) {
    const [isFavourite, setIsFavourite] = useState(false);
    const [message, setMessage] = useState("")

    const { user, authenticateUser } = useContext(AuthContext)

    const toggleHeart = async () => {
        try {
            const storedToken = localStorage.getItem("token");
            const res = await axios.get(`${API_URL}/users/${user._id}`,
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )
            authenticateUser();

            const userData = res.data

            //check if already in favourites and set state
            let updatedFavs;

            if (userData.favExercises.includes(exerciseId)) {
                updatedFavs = userData.favExercises.filter(id => id !== exerciseId)
                setIsFavourite(false)

            } else {
                updatedFavs = [...userData.favExercises, exerciseId]
                setIsFavourite(true)
            }

            //update user in backend
            await axios.put(`${API_URL}/users/${user._id}`,
                { favExercises: updatedFavs },
                { headers: { Authorization: `Bearer ${storedToken}` } }
            )

            authenticateUser();

        }
        catch (error) {
            setMessage(error.response?.data?.message || "Error handling favourites")
        }
    }

    return (
        <>
            <button onClick={toggleHeart}
                className="btn btn-square btn-ghost">
                <svg className={`size-[1.2em] ${
                    isFavourite ? "text-red-600" : "text-gray-400"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24">
                    <g strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="2"
                        fill={isFavourite ? "currentColor" : "none" }
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