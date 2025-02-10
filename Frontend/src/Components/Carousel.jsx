import { useState, useEffect } from "react";

const images = [
    "https://i.pinimg.com/originals/92/24/9e/92249e4fdefbb5e34c6417228d8194c5.png",
    "https://icms-image.slatic.net/images/ims-web/b41238ff-5203-413f-8b3b-ecef77803c94.jpg",
  "https://i.pinimg.com/originals/92/24/9e/92249e4fdefbb5e34c6417228d8194c5.png",
  "https://icms-image.slatic.net/images/ims-web/b41238ff-5203-413f-8b3b-ecef77803c94.jpg",
  "https://i.pinimg.com/originals/92/24/9e/92249e4fdefbb5e34c6417228d8194c5.png",
  "https://icms-image.slatic.net/images/ims-web/b41238ff-5203-413f-8b3b-ecef77803c94.jpg",

];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full h-64 sm:h-72 xl:h-80 2xl:h-96 overflow-hidden">
      <div className="flex  transition-transform duration-700 ease-in-out transform"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full h-full object-cover " />
        ))}
      </div>

      {/* Previous Button */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ❮
      </button>

      {/* Next Button */}
      <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full">
        ❯
      </button>
    </div>
  );
};

export default Carousel;
