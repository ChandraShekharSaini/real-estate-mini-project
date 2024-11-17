import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { FaMessage } from "react-icons/fa6";
const Contact = ({ listingData }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  const textareaRef = useRef(null);

  const onChange = (e) => {
    setMessage(e.target.value);
    console.log(message);

    textareaRef.current.style.height = "auto"; // Reset height
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await fetch(`http://localhost:4444/api/user/get/${listingData.userRef}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await res.json();
        setLandlord(data);
        console.log("45", setLandlord.username);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLandlord();
  }, [listingData.userRef]);

  return (
    <>
      {landlord && (
        <div className="bg-gray-200 flex gap-4 flex-col items-center justify-center  border-2 border-double hover:scale-95 rounded-lg shadow-lg">
          {/* <div className="flex flex-col gap-4 "> */}
            <div className="">
              <p className="text-center text-2xl mt-5 text-neutral-500">
                Contact{" "}
                <span className="font-semibold">{landlord.username} </span>
                for <span className="font-semibold">{listingData.name}</span>
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src={landlord.avatar}
                className="rounded-full w-16 h-16 hover:scale-95"
              />
            </div>

            <div className="flex items-center gap-2">
              <FaUser className="text-gray-500" />
              <input
                className="w-[400px]  p-3 outline-0 focus:border-b-4 focus:border-green-700"
                type="text"
                placeholder="username"
                value={landlord?.username}
                readOnly
              />
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-gray-500" />
              <input
                className=" w-[400px] p-3 outline-0 focus:border-b-4 focus:border-green-700"
                type="email"
                placeholder="email"
                value={landlord?.email}
                readOnly
              />
            </div>
            <div className="flex items-center gap-2">
              <FaMessage className="text-gray-500 " />
              <textarea
                className="w-[400px] outline-0 focus:border-b-4 focus:border-green-700"
                name="message"
                id="message"
                rows="3"
                ref={textareaRef}
                placeholder="Enter your message"
                value={message}
                onChange={onChange}
                
              ></textarea>
            </div>

            <div className="flex justify-center items-center  ml-7" >
              <Link
                to={`mailto:${landlord.email}?subject=Regarding ${listingData.name}&body=${message}`}
                className="w-[400px] bg-slate-700 text-white text-center p-3 rounded-lg hover:opacity-95"
              >
                Send Message
              </Link>
            </div>
          {/* </div> */}
        </div>
      )}
      ;
    </>
  );
};

export default Contact;
