import { createContext, useState, useEffect } from 'react';
import axios from "axios";
const API_URL = "http://localhost:5005"

const AuthContext = createContext();

function AuthProviderWrapper(props) {
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true); 
    const [ user, setUser ] = useState(null);
    const [ message, setMessage ] = useState(null);

    const storeToken = (token) => {
        localStorage.setItem("token", token)
    }

    useEffect(() => {
        authenticateUser();

    }, []); 

    const authenticateUser = () => {

        const storedToken = localStorage.getItem("token");

        if (storeToken) {
            axios
            .get(`${API_URL}/auth/verify`, {
                headers: { Authorization: `Bearer ${storedToken}`}
            })
            .then((response) => {
                //if user is verified
                const user = response.data; 

                setIsLoggedIn(true);
                setIsLoading(false); 
                setUser(user);
                setMessage()
            })
            .catch((error) => {

                setIsLoading(false);
                setIsLoggedIn(false);
                setUser(null);
                setMessage()

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
    };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        isLoading,
        user,
        storeToken,
        authenticateUser,
        logOut,
      }}
      >
        {props.children}
      </AuthContext.Provider>
  )
}

export { AuthContext, AuthProviderWrapper };