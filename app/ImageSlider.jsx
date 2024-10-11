"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const ImageSlider = () => {
  const images = [
    '/homeview.jpg',
    '/homeview2.jpg',
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => {
      clearInterval(interval); // Clear interval on component unmount
    };
  }, [images.length]);

  return (
    <div className="mt-32 flex justify-start items-start">
      <div className=" border-blue-500 rounded-lg overflow-hidden shadow-lg ml-24 ">
        <Image
          src={images[currentIndex]} // Use current image from the slider
          alt="Sliding Image"
          width={600}
          height={600}
          className="object-cover object-top"  // Ensure the image is cropped from the top
        />
      </div>
    </div>
  );
};

export default ImageSlider;
