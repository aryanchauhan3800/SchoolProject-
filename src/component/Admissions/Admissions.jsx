import React from 'react';
import { FaFileDownload, FaCalendarAlt } from 'react-icons/fa';

const Admissions = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Admission Process */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Admissions</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold mb-4">Admission Process</h3>
          <p className="text-lg text-gray-700 mb-4">
            Admission forms are available for download. Submit the completed form along with required documents at the school office.
          </p>
        </div>
      </section>

      {/* Admission Criteria */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Admission Criteria</h3>
        <p className="text-lg text-gray-700 mb-4">
          Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.
        </p>
      </section>

      {/* Important Dates */}
      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li><FaCalendarAlt className="inline mr-2 text-teal-500" /> Admission Form Availability: March 1st</li>
          <li><FaCalendarAlt className="inline mr-2 text-teal-500" /> Last Date for Submission: March 31st</li>
          <li><FaCalendarAlt className="inline mr-2 text-teal-500" /> Entrance Test: April 15th</li>
        </ul>
      </section>

      {/* Downloadable Forms */}
      <section>
        <h3 className="text-2xl font-semibold mb-4">Downloadable Admission Forms</h3>
        <ul className="list-disc list-inside text-lg text-gray-700">
          <li>
            <a
              href="https://drive.google.com/file/d/1ObBufHoKsrn07csmN55jsx8TTnLueW_w/view?usp=drive_link" // Replace with the actual URL to your PDF
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-teal-500 hover:underline"
            >
              <FaFileDownload className="text-xl" />
              <span>View Admission Form</span>
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/file/d/1ObBufHoKsrn07csmN55jsx8TTnLueW_w/view?usp=drive_link" // Replace with the actual URL to your PDF
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-teal-500 hover:underline"
            >
              <FaFileDownload className="text-xl" />
              <span>View Another Form</span>
            </a>
          </li>
          {/* Add more downloadable links as needed */}
        </ul>
      </section>
    </div>
  );
};

export default Admissions;
