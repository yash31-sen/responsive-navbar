import React, { useState, useEffect, useRef } from 'react';
import './Slider.css';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideInterval = useRef(null);

  const slides = [
    {
      backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoUEzLKGWhf-Oc2y46H9-0xSXITsgTQklZNQ&s)',
      heading: 'Slide 1 Heading',
      paragraph: 'This is the first slide description.',
    },
    {
      backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&s)',
      heading: 'Slide 2 Heading',
      paragraph: 'This is the second slide description.',
    },
    {
      backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&s)',
      heading: 'Slide 3 Heading',
      paragraph: 'This is the third slide description.',
    },
    {
      backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfmSGjet8_p422wEQsNKkjLLuzVNEG07I-5Q&s)',
      heading: 'Slide 4 Heading',
      paragraph: 'This is the fourth slide description.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  useEffect(() => {
    slideInterval.current = setInterval(nextSlide, 3000); // 3 minutes
    return () => clearInterval(slideInterval.current);
  }, []);

  useEffect(() => {
    if (slideInterval.current) {
      clearInterval(slideInterval.current);
      slideInterval.current = setInterval(nextSlide, 3000);
    }
  }, [currentSlide]);

  return (
    <div className="slider-container">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentSlide ? 'active' : ''}`}
          key={index}
          style={{ backgroundImage: slide.backgroundImage }}
        >
          <div className="content">
            <h2 className="slide-heading">{slide.heading}</h2>
            <p>{slide.paragraph}</p>
          </div>
        </div>
      ))}
      <button className="prev-button" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next-button" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Slider;
