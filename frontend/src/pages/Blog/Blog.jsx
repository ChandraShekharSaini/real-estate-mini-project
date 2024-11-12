import { useEffect, useState } from 'react'
import './blog.css'

function App() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2075&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      <div className="slider">
        {images.map((img, index) => (
          <div
            key={index}
            className={`slide ${index === currentImage ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>
      
      <div className="content">
        <h1 className='heading'>Luxury Real Estate Blog</h1>
        
        <div className="blog-posts">
          <article className="blog-post">
            <h2>Modern Living Spaces</h2>
            <p>Discover the latest trends in contemporary home design and architecture.</p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-post">
            <h2>Investment Tips</h2>
            <p>Expert advice on real estate investments and market analysis.</p>
            <button className="read-more">Read More</button>
          </article>

          <article className="blog-post">
            <h2>Home Staging Guide</h2>
            <p>Learn how to prepare your property for the perfect sale.</p>
            <button className="read-more">Read More</button>
          </article>
        </div>
      </div>
    </div>
  )
}

export default App