import React, { useState } from 'react';

// Sample Data
const galleryData = {
  photos: [
    { src: 'https://nalandaschool.org/wp-content/uploads/2023/05/children-education-1-1024x742.jpg', alt: 'Students participating in various sports events.' },
    { src: 'https://img.freepik.com/free-photo/children-doing-experiments-laboratory_23-2148891879.jpg', alt: 'Students presenting their science projects.' },
    { src: 'https://www.manipal.edu/content/dam/manipal/mu/kmc-manipal/images/galleryImage/KMCMpltrial/c6.jpg', alt: 'Students performing in the cultural fest.' },
    { src: 'https://img.freepik.com/premium-photo/glimpse-into-classroom-future-teacher-student-interaction-generative-ai_895561-6307.jpg', alt: 'A glimpse of our interactive classrooms.' },
    { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEBnWherLJWGMlDP_8W-rKoS0Gb1yr178rXg&s', alt: 'Students reading and studying in the school library.' }
  ],
  videos: [
    { src: 'https://www.youtube.com/embed/0TRQAAzhyV8', title: 'Virtual tour of Springdale Public School.' },
    { src: 'https://www.youtube.com/embed/rbnXcdN31nA?start=25', title: 'Highlights from the Annual Function 2023.' }
  ]
};

const Gallery = () => {
  const [selectedType, setSelectedType] = useState('photos'); // Default to 'photos'

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Gallery Title */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-gray-900">Gallery</h1>
        <p className="text-lg text-gray-700">
          Photo and video gallery showcasing school events, activities, and infrastructure.
        </p>
        <div className="mt-4">
          <button
            onClick={() => setSelectedType('photos')}
            className={`px-4 py-2 mr-2 rounded ${selectedType === 'photos' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
          >
            Photos
          </button>
          <button
            onClick={() => setSelectedType('videos')}
            className={`px-4 py-2 rounded ${selectedType === 'videos' ? 'bg-red-600 text-white' : 'bg-gray-200'}`}
          >
            Videos
          </button>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="space-y-12">
        {selectedType === 'photos' && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryData.photos.map((photo, index) => (
              <div key={index} className="relative group">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-auto object-cover rounded-lg shadow-md"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-white text-center text-sm">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedType === 'videos' && (
          <div className="space-y-4">
            {galleryData.videos.map((video, index) => (
              <div key={index} className="relative">
                {video.src.includes('youtube.com') ? (
                  <iframe
                    width="100%"
                    height="400" // Adjust height to make the video larger
                    src={video.src}
                    title={video.title}
                    frameBorder="0"
                    allowFullScreen
                    className="rounded-lg shadow-md"
                  ></iframe>
                ) : (
                  <video
                    controls
                    autoPlay
                    muted
                    src={video.src}
                    className="w-full h-auto rounded-lg shadow-md"
                    style={{ height: '400px' }} // Adjust height to make the video larger
                  >
                    Your browser does not support the video tag.
                  </video>
                )}
                <p className="mt-2 text-gray-700">{video.title}</p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Gallery;
