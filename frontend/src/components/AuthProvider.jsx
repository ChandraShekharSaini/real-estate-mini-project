import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signInSuccess } from "../redux/user/userSlice.js"; // Adjust the import based on where your action is defined

const AuthProvider = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, loginWithRedirect, isAuthenticated } = useAuth0();
    
  useEffect(() => {
    const handleLogin = async (user) => {
      try {
        console.log("User details:", user);

        const res = await fetch("api/auth/google", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            photo: user.picture,
          }),
        });

        const data = await res.json();
        console.log("Response data:", data);

        dispatch(signInSuccess(data));
        // navigate('/');
      } catch (error) {
        console.error("Error during login:", error.message);
      }
    };

    if (isAuthenticated && user) {
      handleLogin(user);
    }
  }, [isAuthenticated, user, dispatch, navigate]);
   

 

  return(
   <button onClick={()=>loginWithRedirect()} type="button" className='bg-red-700 rounded-lg p-3 text-white hover:bg-red-600'>Continue with Google</button>
  )
};

export default AuthProvider;
