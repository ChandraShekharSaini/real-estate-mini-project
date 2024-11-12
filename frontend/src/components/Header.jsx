import { FaSearch } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Header = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search);
    console.log('urlParams', urlParams);
    urlParams.set('searchTerm', searchTerm);
    const searchQuery = urlParams.toString();
    console.log(searchQuery);
    navigate(`/search?${searchQuery}`);
  };

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTermURL = urlParams.get('searchTerm');
    if (searchTermURL) {
      setSearchTerm(searchTermURL);
    }
  }, [location.search]);

  console.log('currentUer', currentUser);
  return (
    <header className="bg-zinc-950 fixed top-0 left-0 right-0  z-10 h-15">
      <div className="flex justify-between  items-center max-w-6xl mx-auto p-3">
        <Link to="/">
          <h1 className="font-bold text-sm sm:text-xl lg:text-2xl  flex flex-wrap">
            <span className='border-4 border-gradient-to-l from-white to-black p-1 rounded-sm'>
              <span className="text-white">Heritage</span>  <span className="text-orange-400">Estate</span>
            </span>
            
          </h1>
        </Link>

        <form
          onSubmit={handleSubmit}
          className="p-3 rounded-lg flex items-center"
        >

          
        <ul className=" text-white flex items-start gap-4">
          <Link to="/">
            <li className="hidden sm:inline text-lg font-bold hover:text-red-600 cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="hidden sm:inline text-lg font-bold hover:text-red-600 cursor-pointer">
              About
            </li>
          </Link>

          <Link to="/blog">
            <li className="hidden sm:inline text-lg font-bold hover:text-red-600 cursor-pointer">
              Blog
            </li>
          </Link>

          <Link to="/testimonail">
            <li className="hidden sm:inline text-lg font-bold hover:text-red-600 cursor-pointer">
              Testimonial
            </li>
          </Link>

          </ul>

          <input
            type="text"
            placeholder="Search..."
            className="bg-white text-lg border rounded-sm focus:outline-none ml-9 w-20 sm:w-64 h-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='ml-3 text-lg text-red-700 hover:scale-111'>
            <FaSearch className="text-white" />
          </button>
        </form>


          <Link to="/profile">
            {currentUser ? (
              <img
                className="rounded-full h-10 w-10 object-cover hover:scale-110"
                src={currentUser.avatar}
                alt="profile_image"
              />
            ) : (
              <li className="text-lg font-bold text-white hover:text-red-700 cursor-pointer list-none">
                Sign In
              </li>
            )}
          </Link>
      
      </div>
    </header>
  );
};

export default Header;
