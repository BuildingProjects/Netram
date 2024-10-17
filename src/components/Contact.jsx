import React from "react";

const Contact = () => {
  return (
    <footer className='bg-gradient-to-r from-cyan-500 to-blue-500 text-gray-300 py-12'>
      <div className='max-w-7xl mx-auto px-6 text-center'>
        <h3 className='text-3xl font-extrabold mb-6 text-white'>Contact Us</h3>
        <p className='text-lg mb-8 text-gray-200'>
          We would love to hear from you! Reach out to us at any of the emails
          below:
        </p>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
          <div>
            <a
              href='mailto:contact@netram.com'
              className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
            >
              contact@netram.com
            </a>
          </div>
          <div>
            <a
              href='mailto:support@netram.com'
              className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
            >
              support@netram.com
            </a>
          </div>
          <div>
            <a
              href='mailto:info@netram.com'
              className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
            >
              info@netram.com
            </a>
          </div>
          <div>
            <a
              href='mailto:feedback@netram.com'
              className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
            >
              feedback@netram.com
            </a>
          </div>
          <div>
            <a
              href='mailto:careers@netram.com'
              className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
            >
              careers@netram.com
            </a>
          </div>
          <div>
            <a
              href='mailto:press@netram.com'
              className='block bg-gray-800 hover:bg-gray-700 text-white py-2 px-4 rounded-lg transition duration-300'
            >
              press@netram.com
            </a>
          </div>
        </div>
        <p className='text-sm mt-8 text-white'>
          © {new Date().getFullYear()} Netram. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
