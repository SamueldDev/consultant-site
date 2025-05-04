
import React from 'react';
import consultantImage from "../assets/consultant-2.jpg";

const About = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-20" id="about">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Text content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Avery Johnson
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Avery Johnson is a seasoned business consultant with over 10 years of experience helping businesses scale and thrive. Specializing in strategic coaching, brand development, and growth strategies, Avery empowers entrepreneurs to unlock new opportunities and achieve measurable success.
          </p>

          <p className="text-gray-700 dark:text-gray-300 mb-6">
            "My mission is to help businesses grow by leveraging modern strategies and tools. Whether you're a startup or an established brand, I focus on creating customized plans that lead to tangible results."
          </p>

          <ul className="text-left text-gray-600 dark:text-gray-300 mb-6 list-disc list-inside">
            <li>🧑‍🏫 Services: Business Coaching, Strategy Development, Branding, Leadership Workshops</li>
            <li>📈 Focus: Sustainable growth, client-centric strategies, measurable outcomes</li>
            <li>🌐 Values: Innovation, integrity, results-driven approach</li>
          </ul>

          <a
            href="#contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            📞 Book a Consultation
          </a>
        </div>

        {/* Consultant Profile Image */}
        <div className="lg:w-1/2 flex justify-center">
          <img
            src={consultantImage}
            alt="Avery Johnson"
            className="w-64 h-64 object-cover rounded-full shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
