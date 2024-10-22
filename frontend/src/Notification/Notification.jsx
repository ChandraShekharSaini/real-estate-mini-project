import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Notification = () => {


    return (
        <div>
            
            <ToastContainer  
              position="bottom-left"
              theme="dark"
           
            />
        </div>
    )
}

export default Notification

