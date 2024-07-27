import React from 'react';
import { motion } from 'framer-motion';
import { Carousel } from 'react-responsive-carousel';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import 'react-lazy-load-image-component/src/effects/blur.css'; // Import lazy load image effects

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* School Introduction */}
      <section className="text-center mb-12">
        <motion.img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv7RV3MO-Oem9g1-dxh10Mxo5Vo4OVDFnhDQ&s" // Replace with the path to your logo
          alt="Springdale Public School Logo"
          className="mx-auto mb-4 w-32 h-32 object-cover rounded-full border-4 border-teal-500"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          className="text-4xl font-bold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Springdale Public School
        </motion.h1>
        <motion.p
          className="text-lg font-semibold text-gray-700 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to Springdale Public School, where we nurture young minds for a brighter future.
        </motion.p>
        <div className="mt-8">
          <button
            className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition duration-300"
            onClick={() => window.scrollTo({ top: document.getElementById('highlights').offsetTop, behavior: 'smooth' })}
          >
            Discover Our Highlights
          </button>
        </div>
      </section>

      {/* Carousel/Banner Highlights */}
      <section id="highlights" className="mb-12">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          autoPlay={true}
          interval={5000}
          showThumbs={false}
          emulateTouch={true}
          swipeable={true}
          className="rounded-lg shadow-lg"
        >
          <div className="relative">
            <LazyLoadImage
              src="https://www.thetonsbridge.com/wp-content/uploads/2022/12/Annual-Sports-Day-1200x600.webp"
              alt="Annual Sports Day"
              className="rounded-lg"
              effect="blur"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
              Annual Sports Day - Celebrating Excellence in Sports
            </p>
          </div>
          <div className="relative">
            <LazyLoadImage
              src="https://lionspublicschool.com/wp-content/uploads/2023/10/DSC_3717.jpg"
              alt="Science Exhibition"
              className="rounded-lg"
              effect="blur"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
              Science Exhibition - Showcasing Student Innovations
            </p>
          </div>
          <div className="relative">
            <LazyLoadImage
              src="https://sundayguardianlive.com/wp-content/uploads/2019/09/IGen-Plus.jpg"
              alt="Cultural Fest"
              className="rounded-lg"
              effect="blur"
            />
            <p className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white text-center py-2 rounded-b-lg">
              Cultural Fest - Embracing Diversity and Creativity
            </p>
          </div>
        </Carousel>
      </section>

      {/* Quick Links */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Quick Links</h2>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="/about" className="block bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition duration-300">
            About Us
          </a>
          <a href="/acadmics" className="block bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition duration-300">
            Academics
          </a>
          <a href="/admissions" className="block bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition duration-300">
            Admissions
          </a>
          <a href="/faculty" className="block bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition duration-300">
            Faculty
          </a>
          <a href="/students" className="block bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition duration-300">
            Students
          </a>
          <a href="/gallery" className="block bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition duration-300">
            Gallery
          </a>
          <a href="/contactus" className="block bg-teal-400 text-white px-6 py-3 rounded-md hover:bg-teal-500 transition duration-300">
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
};

export default Home;
