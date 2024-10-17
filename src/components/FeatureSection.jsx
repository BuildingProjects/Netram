import React from "react";

const features = [
  {
    id: 1,
    title: "Feature 1",
    description: "This is the description of feature 1.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Feature+1",
  },
  {
    id: 2,
    title: "Feature 2",
    description: "This is the description of feature 2.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Feature+2",
  },
  {
    id: 3,
    title: "Feature 3",
    description: "This is the description of feature 3.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Feature+3",
  },
  {
    id: 4,
    title: "Feature 4",
    description: "This is the description of feature 4.",
    imageUrl: "https://via.placeholder.com/300x200.png?text=Feature+4",
  },
];

function FeatureSection() {
  return (
    <div className='py-12 bg-gradient-to-r from-cyan-500 to-blue-500'>
      <div className='container mx-auto px-4'>
        <h2 className='text-4xl md:text-4xl font-bold text-center text-white mb-8'>
          Product Features
        </h2>

        {/* Feature Cards Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
          {features.map((feature) => (
            <div
              key={feature.id}
              className='bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:scale-105'
            >
              <img
                src={feature.imageUrl}
                alt={feature.title}
                className='w-full h-48 object-cover rounded-t-lg'
              />
              <div className='p-4'>
                <h3 className='text-lg font-bold text-cyan-600'>
                  {feature.title}
                </h3>
                <p className='text-gray-600 mt-2'>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FeatureSection;
