import React from "react";

const About = () => {
  return (
    <div className='min-h-screen bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center py-20'>
      {/* About Section as a Card */}
      <section className='bg-white p-12 md:p-16 rounded-2xl shadow-2xl max-w-6xl mx-auto relative overflow-hidden'>
        {/* Background Image */}
        <div className="absolute inset-0 opacity-10 bg-[url('/path-to-background-pattern.png')] bg-cover rounded-2xl"></div>

        {/* Flex Container for Image and Text */}
        <div className='relative z-10 flex flex-col md:flex-row items-center'>
          {/* Image Section */}
          <div className='w-full md:w-1/2 mb-8 md:mb-0 flex justify-center'>
            <div className='bg-white rounded-lg shadow-lg overflow-hidden'>
              <img
                src='src/assets/about.png'
                alt='Netram - Enhancing perception for the visually impaired'
                className='w-full transition-transform duration-500 hover:scale-105 hover:shadow-xl'
              />
            </div>
          </div>

          {/* Text Section */}
          <div className='w-full md:w-1/2 px-6 text-center md:text-left'>
            <h2 className='text-4xl md:text-5xl font-extrabold mb-4 text-blue-500 leading-tight'>
              About <span className='text-cyan-600'>Netram</span>
            </h2>
            <div className='text-gray-700 mb-4 text-lg leading-relaxed space-y-4'>
              <p>
                Netram is a cutting-edge software solution designed to enhance the
                perception of individuals who are visually impaired. Our mission
                is to bridge the gap between accessibility and technology by
                providing an intuitive tool that transforms how the blind perceive
                the world around them.
              </p>
              <p>
                Using advanced algorithms, Netram translates visual data into
                audible feedback, helping users navigate their environment,
                recognize objects, and interpret text with ease.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
