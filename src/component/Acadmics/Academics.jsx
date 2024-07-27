import React from 'react';

const Academics = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Academics Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Academics</h2>

        {/* Curriculum */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Curriculum</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Primary Grades */}
            <div className="bg-blue-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-blue-800">Primary (Grades 1-5)</h4>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>

            {/* Secondary Grades */}
            <div className="bg-green-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-green-800">Secondary (Grades 6-10)</h4>
              <ul className="list-disc list-inside text-lg text-gray-700">
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>

            {/* Senior Secondary Grades */}
            <div className="bg-red-100 p-6 rounded-lg shadow-lg">
              <h4 className="text-xl font-semibold mb-2 text-red-800">Senior Secondary (Grades 11-12)</h4>
              <div className="mb-4">
                <h5 className="text-lg font-semibold mb-2">Science Stream</h5>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li>Physics</li>
                  <li>Chemistry</li>
                  <li>Biology</li>
                  <li>Mathematics</li>
                  <li>Computer Science</li>
                  <li>English</li>
                </ul>
              </div>
              <div>
                <h5 className="text-lg font-semibold mb-2">Commerce Stream</h5>
                <ul className="list-disc list-inside text-lg text-gray-700">
                  <li>Accountancy</li>
                  <li>Business Studies</li>
                  <li>Economics</li>
                  <li>Mathematics</li>
                  <li>English</li>
                </ul>
              </div>
            </div>

          </div>
        </div>

        {/* Teaching Methodologies */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4 text-center">Teaching Methodologies</h3>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg flex items-center">
            <div className="flex-shrink-0 mr-4">
              <svg
                className="w-12 h-12 text-yellow-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.84 6.84A12.083 12.083 0 0112 14zm0 0v5a12.083 12.083 0 01-.84 6.84A12.083 12.083 0 0112 14zm0 0L5.84 10.578A12.083 12.083 0 0112 14zm0 0v5a12.083 12.083 0 00.84 6.84A12.083 12.083 0 0112 14z"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-700">
              We use a blend of traditional and modern teaching techniques to cater to different learning styles.
            </p>
          </div>
        </div>

        {/* Educational Resources */}
        <div>
          <h3 className="text-2xl font-semibold mb-4 text-center">Educational Resources</h3>
          <div className="bg-purple-100 p-6 rounded-lg shadow-lg flex items-center">
            <div className="flex-shrink-0 mr-4">
              <svg
                className="w-12 h-12 text-purple-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2z"
                />
              </svg>
            </div>
            <p className="text-lg text-gray-700">
              Digital classrooms, interactive learning modules, and access to online educational platforms.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Academics;
