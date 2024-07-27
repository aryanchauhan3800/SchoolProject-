import React from 'react';
import { motion } from 'framer-motion';

const Students = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Section Title */}
      <section className="text-center mb-12">
        <motion.h1
          className="text-4xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Students
        </motion.h1>
        <motion.p
          className="text-lg font-semibold text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Information about student life, including extracurricular activities, clubs, and societies. Achievements and accolades of the students. Student council and leadership opportunities.
        </motion.p>
      </section>

      {/* Life at Springdale */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Life at Springdale</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <img
              src="https://www.narayanaschools.in/blog/wp-content/uploads/2023/08/01-3.jpg"
              alt="Extracurricular Activities"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-teal-500">Extracurricular Activities</h3>
              <p className="text-gray-700">
                Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img
              src="https://thelistingmagazine.co.uk/wp-content/uploads/2023/11/INSTA-club-and-soc-directory.jpg"
              alt="Clubs and Societies"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-teal-500">Clubs and Societies</h3>
              <p className="text-gray-700">
                Literary Society, Environmental Club, Astronomy Club, Coding Club
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <img
              src="https://img.freepik.com/premium-vector/flat-style-vector-collection-sport-recreation-competition-objects-isolated-white-set-sports-activities-illustrations-team-games-first-place-collection-sport-items_520826-954.jpg"
              alt="Sports Activities"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2 text-teal-500">Sports and Recreation</h3>
              <p className="text-gray-700">
                Various sports events and recreational activities are organized regularly to promote physical fitness and teamwork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Accolades */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Achievements and Accolades</h2>
        <div className="space-y-6">
          <div className="flex items-center space-x-6">
            <img
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTEyL3Jhd3BpeGVsb2ZmaWNlM18xOTUwc192aW50YWdlX2NvbWljX2lsbHVzdHJhdGlvbl9zdHlsZV9vZl90cm9waF85NmE0NzZmMC00NTM4LTQ4OGUtOTY3NS1iZjI4N2Q0ZmEzM2QuanBn.jpg"
              alt="Achievements and Accolades"
              className="w-48 h-48 object-cover rounded-lg shadow-md"
            />
            <p className="text-gray-700">
              Our students have achieved numerous awards and accolades in various fields, showcasing their talents and hard work.
              <ul className="list-disc pl-5 mt-2">
                <li>John Smith - National Level Math Olympiad Winner</li>
                <li>Sarah Lee - Gold Medalist in State Swimming Championship</li>
                <li>Tech Innovators Club - Winners of Inter-School Robotics Competition</li>
              </ul>
            </p>
          </div>
        </div>
      </section>

      {/* Student Council and Leadership */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-4 text-gray-900">Student Council and Leadership</h2>
        <div className="flex items-center space-x-6">
          <img
            src="https://www.natstuco.org/wp-content/uploads/2023/12/Service-Red%E2%80%8B-1024x1024.png"
            alt="Student Council"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
          <div>
            <p className="text-gray-700">
              Our student council provides leadership opportunities and helps in the overall development of the students by engaging them in various school activities and decision-making processes.
              <ul className="list-disc pl-5 mt-2">
                <li>President: Amy Parker, Grade 12</li>
                <li>Vice President: Rajiv Mehta, Grade 11</li>
                <li>Secretary: Lisa Wong, Grade 10</li>
              </ul>
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-6 mt-8">
          <img
            src="https://3.files.edl.io/b71e/19/08/01/164950-c4f6e9b0-7bcb-4b80-b71f-3c62b2299d9c.jpg"
            alt="Leadership Programs"
            className="w-48 h-48 object-cover rounded-lg shadow-md"
          />
          <p className="text-gray-700">
            Leadership programs are designed to cultivate essential skills and prepare students for future challenges.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Students;
