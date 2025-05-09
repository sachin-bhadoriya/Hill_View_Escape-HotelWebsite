import React from 'react'
import image1 from '../../../../assets/Images/inside/outside1.jpg'
import '../../../CSSFile/HomeCSS/Hometop.css'

const Hometop = () => {
  const style = {
    background: `linear-gradient(rgba(26, 25, 25, 0.9), rgba(26, 25, 25, 0.1)), url(${image1})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '90vh',
    width: '100%',
    // backgroundColor:'linear-gradient(rgba(26, 25, 25, 0.1), rgba(26, 25, 25, 0.1))',
  };

  return (
    <>
      <div className="home_top_elements" style={style}>
        <div className="home_top_content">
          <h3 className='home_top_heading_size'>WELCOME TO</h3>
          <h1 className='home_top_heading_size'>HILLVIEW ESCAPE</h1>
          <h3 className='home_top_heading_size'>HOTELS</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maiores.</p>
        </div>
        <div className="home_top_btn">
          <button>BOOK NOW</button>
        </div>
      </div>
      {/* there are some classes which define already in index.css mostly are bootstrap like classes */}
      <div>
        <p className='text-center home_bottom_text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, maiores.</p>
      </div>
    </>
  )
}

export default Hometop