import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import OAuth from '../components/OAuth'
import AuthProvider from '../components/AuthProvider'

const Signup = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        console.log(data.message);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      toast.success("Successfully Sign Up")
      setTimeout(()=>{
        navigate("/sign-in");
      },1200)
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };

  console.log(formData);

  

  return (
    <div className="p-3 max-w-lg mx-auto my-40px">
           < ToastContainer theme="colored" position="top-right"/>
      <h1 className="text-3xl  text-red-600 text-center font-bold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit}  className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username "
          className="p-3 rounded-lg "
          id="username"
          onChange={handleChange}
        />
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
          {loading ? "Loading....." : "Sign Up"}
        </button>
        {/* <OAuth/> */}
        <AuthProvider />
      </form>
      <div className="flex items-center gap-4 mt-5">
        <p>Have an account ?</p>
        <Link to="/sign-in">
          <span className="text-red-700 text-lg hover:font-semibold">
            Login
          </span>
        </Link>
      </div>

      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default Signup;
