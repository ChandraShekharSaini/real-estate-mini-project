import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import ListingIteam from "../components/ListingIteams.jsx";
import { ReactTyped } from "react-typed";
import { TypeAnimation } from 'react-type-animation';
import Footer from "../footer/Footer";

const Home = () => {
  const [offerListings, setOfferListings] = useState([]);
  const [saleListings, setSaleListings] = useState([]);
  const [rentListings, setRentListings] = useState([]);
  console.log(offerListings);
  SwiperCore.use([Navigation]);

  useEffect(() => {
    const fetchOfferListings = async () => {
      try {
        const res = await fetch("/api/listing/get?offer=true&limit=4");
        const data = await res.json();
        setOfferListings(data);
        fetchRentListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchRentListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=rent&limit=4`);
        const data = await res.json();
        setRentListings(data);
        fetchSaleListings();
      } catch (error) {
        console.log(error);
      }
    };

    const fetchSaleListings = async () => {
      try {
        const res = await fetch(`/api/listing/get?type=sale&linit=4`);
        const data = await res.json();
        setSaleListings(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOfferListings();
  }, []);

  return (
    <>
    <div>
    {/* top */}
   

      <div className="flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto">
      <h1 className="text-slate-700 font-bold text-3xl lg:text-6xl md:text-4xl">
        <ReactTyped strings={["Find your next "]} loop typeSpeed={100}  backSpeed={50} />
         <span className="text-orange-400">perfect</span>
          <br />
          place with ease
       
        </h1>

        <h1>akjnksjcsk</h1>

        <div className="text-gray-400 text-xs sm:text-sm">
          Booking Estate is best place to find your next perfect place to live.
          <b />
          We have a wide range of properties for you to choose from.
        </div>

        <Link
          to={"/search"}
          className="text-xs sm:text-sm text-blue-800 font-bold hover:underline"
        >
          Let&apos; get started..
          <span id="element"></span>
        </Link>

      


  

      </div>

      {/* swiper */}
      <Swiper navigation>
        {offerListings &&
          offerListings.length > 0 &&
          offerListings.map((listing) => (
            <SwiperSlide key={listing}>
              {/* <div
                style={{
                  background: `url(${listing.imageUrls[0]}) center no-repeat`,
                  backgroundSize: "'cover'",
                }}
                className="h-[500px]"
                key={listing._id}
              ></div> */}

              <div
                key={listing._id}
                className=" border-2 border-solid border-red-700"
              >
                <img src={listing.imageUrls[0]} className=" h-[500px] w-full" />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>

      <div className="max-w-6xl max-auto flex flex-col gap-8 my-10">
        {offerListings && offerListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent offers
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?offer=true"}
              >
                Show more offers
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {offerListings.map((listing) => (
                <ListingIteam listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {rentListings && rentListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for rent
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=rent"}
              >
                Show more places for rent
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {rentListings.map((listing) => (
                <ListingIteam listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}

        {saleListings && saleListings.length > 0 && (
          <div className="">
            <div className="my-3">
              <h2 className="text-2xl font-semibold text-slate-600">
                Recent places for sale
              </h2>
              <Link
                className="text-sm text-blue-800 hover:underline"
                to={"/search?type=sale"}
              >
                Show more places for sale
              </Link>
            </div>
            <div className="flex flex-wrap gap-4">
              {saleListings.map((listing) => (
                <ListingIteam listing={listing} key={listing._id} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Home;
