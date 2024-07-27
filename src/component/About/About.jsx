import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://wehco.media.clients.ellingtoncms.com/imports/adg/photos/204765346_Springdale-School-Admin-Offices_t800.jpg?90232451fbcadccc64a17de7521d859a8f88077d"
              alt="image"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12 space-y-6">
            <h2 className="text-3xl text-gray-900 font-bold md:text-4xl text-center">
              About Us
            </h2>
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-blue-800 font-semibold mb-4">History</h3>
              <p className="text-lg text-gray-700">
                Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-green-800 font-semibold mb-4">Vision</h3>
              <p className="text-lg text-gray-700">
                To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
              </p>
            </div>
            <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-yellow-800 font-semibold mb-4">Mission</h3>
              <p className="text-lg text-gray-700">
                To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
              </p>
            </div>
            <div className="bg-red-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-red-800 font-semibold mb-4">Principal's Message</h3>
              <p className="text-lg text-gray-700">
                At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl text-purple-800 font-semibold mb-4">Infrastructure and Facilities</h3>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>State-of-the-art science and computer labs</li>
                <li>Spacious and well-equipped classrooms</li>
                <li>Library with a vast collection of books and digital resources</li>
                <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
