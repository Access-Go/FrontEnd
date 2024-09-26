// components/Carousel.jsx
import { useState } from 'react';

const Carousel = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slides */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="min-w-full flex justify-center">
            <div className="relative border w-[215px] h-[257px] rounded">
              <img 
                src={slide.img} 
                alt={`Imagen de ${slide.label}`} 
                className="w-full h-full object-cover rounded"
              />
              <div className="absolute bottom-0 left-0 p-2 bg-gradient-to-t from-black to-transparent w-full text-white">
                <h4 className="text-[15px] font-bold">{slide.label}</h4>
                <div className="flex items-center mb-1">
                  {Array(slide.rating).fill().map((_, i) => (
                    <img 
                      key={i} 
                      src="/estrellita.svg" 
                      alt="star" 
                      className="w-4 h-4 mr-[3px]" 
                    />
                  ))}
                </div>
                <p className="text-[10px] mt-2">{slide.access}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
