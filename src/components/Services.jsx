
import React from 'react';
import { Briefcase, ClipboardList, BarChart2 } from 'lucide-react';

const services = [
  {
    title: '1:1 Strategy Sessions',
    icon: <Briefcase className="w-6 h-6 text-indigo-600" />,
    description:
      'Tailored business strategies to help you identify opportunities and overcome growth barriers.',
    link: '/contact',
  },
  {
    title: 'Growth Planning Workshops',
    icon: <BarChart2 className="w-6 h-6 text-indigo-600" />,
    description:
      'Collaborative planning sessions to map out your business growth roadmap with clear milestones.',
    link: '/contact',
  },
  {
    title: 'Brand Audit & Review',
    icon: <ClipboardList className="w-6 h-6 text-indigo-600" />,
    description:
      'Detailed analysis of your current branding, messaging, and online presence with action steps.',
    link: '/contact',
  },
];

const Services = () => {
  return (
    <section className="bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          My Services
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          I help entrepreneurs, coaches, and small business owners gain clarity, build systems, and grow with purpose.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
              <a
                href={service.link}
                className="text-indigo-600 hover:underline font-medium text-sm"
              >
                Book Now →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

