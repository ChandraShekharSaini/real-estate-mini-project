import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {signInStart,signInSuccess, signInFailure,} from '../redux/user/userSlice';
// import OAuth from "../components/OAuth"
import AuthProvider from "../components/AuthProvider"


const Signin = () => {
  const [formData, setFormData] = useState({});
  const{loading,error} = useSelector((state) => state.user)
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("http://localhost:4444/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate('/');
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };

  console.log(formData);

  return (
    <div className="p-3 max-w-lg mx-auto my-40px ">
      <h1 className="text-3xl text-red-600 text-center font-bold my-7">Login</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* <input
          type="text"
          placeholder="username "
          className="p-3 rounded-lg "
          id="username"
          onChange={handleChange}
        /> */}
        <input
          type="email"
          placeholder="email "
          className="p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-900  text-white border rounded-lg  p-3 uppercase hover:opacity-90 disabled:opacity-80"
        >
          {loading ? "Loading....." : "Sign In"}
        </button>
       {/* <OAuth/> */}
       <AuthProvider />
      </form>
      <div className="flex items-center gap-4 mt-5">
        <p>Dont have account ?</p>
        <Link to="/sign-up">
          <span className="text-red-700 text-lg hover:font-semibold">
            Sign Up
          </span>
        </Link>
      </div>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signin;
