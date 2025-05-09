import React from 'react'
import '../../../CSSFile/HomeCSS/Testimonials.css'
import Slider from "react-slick";


const testimonialsdata = [
  {
    name: "Sachin Bhai",
    text: "Ye slider badiya chal raha hai!",
  },
  {
    name: "Rahul",
    text: "React Slick mast library hai!",
  },
];

const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
const Style = {
  
  };

  return (
    <Slider {...settings}>
      {testimonialsdata.map((item, index) => (
        <div key={index} style={Style}>
          <h3>{item.name}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </Slider>
  );
};

export default Testimonials