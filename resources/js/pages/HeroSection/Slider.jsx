import React,{useEffect, useState} from 'react';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
      {
        id: 1,
        image: 'https://www.aazbd.com/wp-content/uploads/2024/10/Gunsmith-Cats.jpg',
        title: 'Slide 1',
        description: 'This is the description for Slide 1.',
      },
      {
        id: 2,
        image: 'https://www.aazbd.com/wp-content/uploads/2024/10/Gunsmith-Cats.jpg',
        title: 'Slide 2',
        description: 'This is the description for Slide 2.',
      },
      {
        id: 3,
        image: 'https://via.placeholder.com/800x300?text=Slide+3',
        title: 'Slide 3',
        description: 'This is the description for Slide 3.',
      },
    ];
  
    const handlePrev = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
      console.log(currentIndex);
    };

    
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    };

    useEffect(()=>{
      const interval = setInterval(()=>{
        handleNext();
      },1000)

      return () => clearInterval(interval);
    },[])
    return (

        <div className="relative w-full h-screen overflow-hidden">
        <div
          className="flex transition-transform duration-700"
          // style={{ width: `${slides.length * 100}vw`, transform: `translateX(-${currentIndex * 100}vw)` }}
        >
          {slides.map((slide,index) => (
            <div key={slide.id} className={`w-full h-screen flex flex-col justify-center items-center ${index===currentIndex?'flex':'hidden'}`} >
              <img
                src={slide.image}
                alt={slide.title}
                className="object-cover md:w-full h-full"
              />
              <div className="absolute bottom-20 text-white text-center">
                <h2 className="text-4xl font-bold text-black">{slide.title}</h2>
                <p className="mt-2 text-lg">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
  
        {/* Navigation Buttons */}
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black rounded-full p-2 text-white hover:bg-gray-700"
        >
          &#10094;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black rounded-full p-2 text-white hover:bg-gray-700"
        >
          &#10095;
        </button>
  
        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[#FFA500]' : 'bg-gray-300'}`}
            ></button>
          ))}
        </div>
      </div>
  );
};



export default Slider;