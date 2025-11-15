import { createContext, useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const API_URL = "http://localhost:5005"

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const navigate = useNavigate()
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState(null);
    const [message, setMessage] = useState(null);

    const storeToken = (token) => {
        localStorage.setItem("token", token)
       
    }

    const authenticateUser = () => {

        const storedToken = localStorage.getItem("token");
        // console.log("Stored Token:", storedToken)
        if (storedToken) {
            axios
                .get(`${API_URL}/auth/verify`, {
                    headers: { Authorization: `Bearer ${storedToken}` }

                })
                .then((response) => {
                    //if user is verified
                    const user = response.data;
                    // console.log(user)

                    setIsLoggedIn(true);
                    setIsLoading(false);
                    setUser(user);
                    setMessage("Successfully logged in")
                })
                .catch((error) => {

                    setIsLoading(false);
                    setIsLoggedIn(false);
                    setUser(null);
                    setMessage("Error logging in")

                })
        } else {
            //is token is unvalid or unavailable
            setIsLoading(false);
            setIsLoggedIn(false);
            setUser(null);
            setMessage()
        }
    };

    const removeToken = () => {
        localStorage.removeItem("token")
    };

    const logOut = () => {
        removeToken();
        authenticateUser();
        navigate("/")
    };

    useEffect(() => {
        authenticateUser();

    }, []);

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                isLoading,
                user,
                storeToken,
                authenticateUser,
                logOut,
                setIsLoading
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}

export { AuthContext, AuthProviderWrapper };