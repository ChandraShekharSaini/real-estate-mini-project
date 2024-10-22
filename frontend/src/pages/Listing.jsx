import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import "swiper/css/bundle";
import {
  FaMapMarkedAlt,
  FaShare,
  FaBed,
  FaBath,
  FaParking,
  FaChair,
} from "react-icons/fa";

import { useSelector } from "react-redux";
import Contact from "../components/Contact";

const Listing = () => {
  const params = useParams();
  SwiperCore.use([Navigation]);
  const [listingData, setListingData] = useState(null);
  const [loadingEffect, setLoadingEffect] = useState(false);
  const [errorEffect, setErrorEffect] = useState(false);
  const [copied, setCopied] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const [contact, setContact] = useState(false);

  useEffect(() => {
    const fetchListingData = async () => {
      const listing = params.listingId;

      try {
        setLoadingEffect(true);
        let res = await fetch(`/api/listing/get/${listing}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        let data = await res.json();
        // console.log("data", data);

        if (data.success == false) {
          console.log(data.message);
          setErrorEffect(true);
          setLoadingEffect(false);
        }

        setListingData(data);
        setLoadingEffect(false);
        setErrorEffect(false);
        console.log("list", currentUser, listingData);
      } catch (error) {
        console.log(error.message);
        setErrorEffect(true);
        setLoadingEffect(false);
      }
    };

    fetchListingData();
  }, []);

  return (
    <main  className="my-85px">
      {loadingEffect && (
        <p className="h-screen bg-gray-500 flex items-center justify-center    text-center text-2xl text-white">
          Loading...
        </p>
      )}
      {errorEffect && (
        <p className="text-center my-52 text-2xl text-red-700">
          404: Server Not Responding
        </p>
      )}
      {listingData && !errorEffect && !loadingEffect && (
        <div>
          <Swiper navigation>
            {listingData.imageUrls.map((url) => (
              <SwiperSlide key={url}>
                <div className="flex justify-center w-screen bg-gray-200 my-1">
                  <img src={url} alt="listing cover" className="h-123 w-124" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="fixed top-[13%] right-[3%] z-10 border rounded-full w-12 h-12 flex justify-center items-center bg-slate-100 cursor-pointer outline outline-offset-2 outline-blue-600">
            <FaShare
              className="text-slate-500"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => {
                  setCopied(false);
                }, 2000);
              }}
            />
          </div>

          {copied && (
            <p className="fixed top-[23%] right-[5%] z-10 rounded-md bg-slate-100 p-2">
              Link Copied
            </p>
          )}
          <div className="flex flex-col max-w-4xl mx-auto p-3 gap-4">
            <p className="text-2xl font-semibold">
              {listingData.name} - Rs{" "}
              {listingData.offer
                ? listingData.discountPrice.toLocaleString("en-IN")
                : listingData.regularPrice.toLocaleString("en-IN")}
              {listingData.type === "rent" && "/ month"}
            </p>

            <p className="flex items-center mt-6 gap-2 text-slate-600 my-2 text-sm">
              <FaMapMarkedAlt className="text-green-700" />
              {listingData.address}
            </p>

            <div className="flex gap-4">
              <p className="bg-red-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                {listingData.type === "rent" ? "For Rent" : "For Sale"}
              </p>
              {listingData.offer && (
                <p className="bg-green-900 w-full max-w-[200px] text-white text-center p-1 rounded-md">
                   Rs {+listingData.regularPrice - +listingData.discountPrice}
                </p>
              )}
            </div>
            <p className="text-slate-800">
              <span className="font-semibold text-black">Description - </span>
              {listingData.description}
            </p>

            <ul className="flex flex-wrap items-center gap-4 sm:gap-6 text-green-900 font-semibold text-sm">
              <li className="flex flex-row gap-1 items-center  whitespace-nowrap">
                <FaBed className="text-lg text-red-700" />
                {listingData.bedrooms > 1
                  ? `${listingData.bedrooms} beds`
                  : `${listingData.bedrooms} bed`}
              </li>

              <li className="flex flex-row gap-1 items-center  whitespace-nowrap">
                <FaBath className="text-lg text-red-700" />
                {listingData.bathrooms > 1
                  ? `${listingData.bathrooms} baths`
                  : `${listingData.bathrooms} bath`}
              </li>

              <li className="flex flex-row gap-1 items-center  whitespace-nowrap">
                <FaParking className="text-lg text-red-700" />
                {listingData.parking ? "Parking spot" : "No Parking"}
              </li>

              <li className="flex flex-row gap-1 items-center  whitespace-nowrap">
                <FaChair className="text-lg text-red-700" />
                {listingData.furnished ? "Furnished" : "Unfurnished"}
              </li>
            </ul>

            {currentUser &&
              currentUser._id == listingData.userRef &&
              !contact && (
                <button
                  onClick={() => setContact(true)}
                  className="bg-slate-800  text-white rounded-lg  p-3 hover:opacity-95"
                >
                  Contact landloard
                </button>
              )}
            {contact && <Contact listingData={listingData} />}
          </div>
        </div>
      )}
      ;
    </main>
  );
};

export default Listing;
