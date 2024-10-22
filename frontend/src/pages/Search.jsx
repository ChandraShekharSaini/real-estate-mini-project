import React from 'react';

const Search = () => {
  return (
    <div className="flex flex-col md:flex-row my-90px">
      <div className="p-7 border-b-2  md:border-r-2 md:min-h-screen">
        <form className="flex flex-col gap-8">
          <div className="flex items-center gap-2">
            <label className="whitespace-nowrap">Search Term:</label>
            <input
              type="text"
              id="searchTerm"
              placeholder="Search..."
              className="border rounded-lg p-3 w-full"
            />
          </div>
          <div className="flex gap-2 flex-wrap items-center">
            <label>Types:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="all" className="w-5" />
              <span>Rent & Sale</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Rent</span>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" id="sale" className="w-5" />
              <span>sale</span>
            </div>

            <div className="flex gap-2">
              <input type="checkbox" id="offer" className="w-5" />
              <span>Offer</span>
            </div>
          </div>

          <div className="flex gap-2 flex-wrap items-center">
            <label>Amenities:</label>
            <div className="flex gap-2">
              <input type="checkbox" id="all" className="w-5" />
              <span>Parking</span>
            </div>
            <div className="flex gap-2">
              <input type="checkbox" id="rent" className="w-5" />
              <span>Furnished</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <label>Sort:</label>
            <select id="sort_order" className='border rounded-lg p-3'>
              <option>Price high to low</option>
              <option>Price low to high</option>
              <option>Latest</option>
              <option>Oldest</option>
            </select>
          </div>
        </form>
      </div>
      <div className="">
        <h1>Listing result</h1>
      </div>
    </div>
  );
};

export default Search;
