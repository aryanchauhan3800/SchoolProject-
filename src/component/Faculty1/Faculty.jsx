import React from 'react';
import { FaChalkboardTeacher, FaUserTie, FaUser } from 'react-icons/fa';

const facultyMembers = [
  {
    name: "John Doe",
    role: "Principal",
    qualifications: "M.Ed",
    experience: "20 years",
    icon: <FaUserTie className="text-teal-500" />
  },
  {
    name: "Jane Smith",
    role: "Vice Principal",
    qualifications: "M.Sc. in Physics",
    experience: "15 years",
    icon: <FaChalkboardTeacher className="text-teal-500" />
  },
  {
    name: "Emily Johnson",
    role: "English Teacher",
    qualifications: "M.A. in English",
    experience: "10 years",
    icon: <FaChalkboardTeacher className="text-teal-500" />
  },
  {
    name: "Michael Brown",
    role: "Mathematics Teacher",
    qualifications: "M.Sc. in Mathematics",
    experience: "8 years",
    icon: <FaChalkboardTeacher className="text-teal-500" />
  },
  {
    name: "Sophia Davis",
    role: "Science Teacher",
    qualifications: "M.Sc. in Chemistry",
    experience: "12 years",
    icon: <FaChalkboardTeacher className="text-teal-500" />
  },
  {
    name: "David Wilson",
    role: "Computer Science Teacher",
    qualifications: "B.Tech in Computer Science",
    experience: "5 years",
    icon: <FaUser className="text-teal-500" />
  }
];

const Faculty = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Faculty Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Faculty</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {/* Profiles */}
          <h3 className="text-2xl font-semibold mb-4">Profiles</h3>
          <div className="space-y-6">
            {facultyMembers.map((member, index) => (
              <div key={index} className="flex items-start space-x-4 border-b py-4">
                <div className="text-4xl">{member.icon}</div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-lg text-gray-700 mb-1"><strong>Role:</strong> {member.role}</p>
                  <p className="text-lg text-gray-700 mb-1"><strong>Qualifications:</strong> {member.qualifications}</p>
                  <p className="text-lg text-gray-700"><strong>Experience:</strong> {member.experience}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Important Dates */}
          <div className="mt-8">
            <h3 className="text-2xl font-semibold mb-4">Important Dates</h3>
            <p className="text-lg text-gray-700">
              <strong>Announcement of Results:</strong> April 30th
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faculty;
