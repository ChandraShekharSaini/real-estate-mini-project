// import {GoogleAuthProvider,getAuth,signInWithPopup} from 'firebase/auth'
// import app from '../Firebase'
// import { useDispatch } from 'react-redux';
// import{signInSuccess} from '../redux/user/userSlice';
// import { useNavigate } from 'react-router-dom';


// const OAuth = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const handleGoogleClick = async () => {
   
//     try {
//       const provider = new GoogleAuthProvider();
//       const auth = getAuth(app);

//       const result = await signInWithPopup(auth, provider);

//       const res = await fetch('/api/auth/google', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           name: result.user.displayName,
//           email: result.user.email,
//           photo: result.user.photoURL,
//         }),
//       });
//       const data = await res.json();
//       console.log("data",data);
//       dispatch(signInSuccess(data));
//       navigate('/profile')
//     }  catch (error) {
//        console.log("cant sigin with google")
//      }
//   }


//   return (
//     <button onClick={handleGoogleClick} type="button" className='bg-red-700 rounded-lg p-3 text-white hover:bg-red-600'>Continue with Google</button>
//   );
// };

// export default OAuth