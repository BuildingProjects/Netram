import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FeatureSection from "./FeatureSection";
import videoSource from "../assets/bg_video.mp4"; // Path to your video file

function HeroSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleVideo = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <div className='relative h-screen w-full flex justify-center items-center'>
        {/* Background Video */}
        <video
          ref={videoRef}
          className='absolute top-0 left-0 h-full w-full object-cover'
          src={videoSource}
          autoPlay
          muted
          loop
        />

        {/* Overlay to darken the video */}
        <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>

        {/* Content */}
        <div className='relative z-10 text-center text-white space-y-8'>
          {/* Heading */}
          <div>
            <h1 className='text-5xl md:text-6xl font-extrabold tracking-tight'>
              Netram
            </h1>
            <p className='mt-4 text-lg md:text-2xl font-light'>
              Empowering the Visually Impaired with Vision Beyond Sight
            </p>
          </div>

          {/* Buttons or Action Section */}
          <div className='flex justify-center gap-10'>
            <Link to='/product'>
              <button className='bg-white text-cyan-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-cyan-100 hover:text-cyan-700 transition duration-300'>
                Get Started
              </button>
            </Link>
            <a href='#about'>
              <button className='bg-transparent border border-white px-8 py-3 rounded-full font-semibold text-white hover:bg-white hover:text-cyan-600 transition duration-300'>
                Learn More
              </button>
            </a>
          </div>
        </div>

        {/* Pause/Play Button */}
        <button
          onClick={toggleVideo}
          className='absolute top-5 right-5 bg-white text-cyan-600 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-cyan-100 transition duration-300 z-20'
        >
          {isPlaying ? "Pause" : "Play"}
        </button>
      </div>
    </>
  );
}

export default HeroSection;
