
import React from 'react';
import consultant from "../assets/consultant.jpg"

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="lg:w-1/2">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            Helping You Grow, <br className="hidden md:block" />
            One Strategy at a Time.
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-6">
            I'm <span className="font-semibold text-indigo-600 dark:text-indigo-400">Avery Brian</span> — a business consultant who helps entrepreneurs and startups achieve clarity and growth through strategy, coaching, and action.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-lg text-sm font-medium shadow-md transition"
            >
              Book a Call
            </a>
            <a
              href="/about"
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-white px-6 py-3 rounded-lg text-sm font-medium transition hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              Learn More
            </a>
          </div>
        </div>

        
        <div className="lg:w-1/2">
          <img
            src={consultant}
            alt="Consultant Illustration"
            className="w-full h-auto object-cover rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
