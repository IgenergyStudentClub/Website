"use client";

import Carousel from "./ui/carousel";
import RC from '/public/graphics/car.jpg'
import SP from '/public/graphics/parking2.jpg'
import RDR from '/public/graphics/radar.jpg'
import formsMock from '/public/graphics/formsMock.jpg'
import academyMock from "/public/graphics/academyMock.jpg"
import cliMock from "/public/graphics/cliMock.jpg"
import access from "/public/graphics/access.jpg"
import loock from "/public/graphics/loock.jpg"
 function CarouselDemo() {
  const slideData = [
    {
      title: "RC Car",
      
      src: RC,
    },
    {
      title: "Smart Park",
      
      src: SP,
    },
          {
      title: "Access Control System",
      src: access,
    },
    {
      title: "Radar System",
      
      src: RDR,
    },
        {
      title: "Loock System",
      
      src: loock,
    },
           {
      title: "eCLI",
      
      src: cliMock,
    },
          {
      title: "IG Academy",
      
      src: academyMock,
    },
      {
      title: "Inscription System",
      src: formsMock,
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
        <h1 className="text-3xl text-white text-center pt-10 font-bold font-[serif]">Projects Corner :</h1>
        <p className="text-white text-center p-10 font-[serif]">We Have Great Projects in electronics and Web </p>
      <Carousel slides={slideData} />
    </div>
  );
}

export default CarouselDemo;