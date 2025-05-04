
import React from 'react';

const testimonials = [
  {
    name: 'Smith Thompson',
    role: 'Founder, ThriveCo',
    quote:
      'Working with Friday was a game-changer. His strategic insights helped us unlock new growth opportunities within weeks.',
    avatar: 'src/assets/headshot-1.jpg',
  },
  {
    name: 'James Okoro',
    role: 'Startup Coach',
    quote:
      'Friday is an absolute professional. From planning to execution, everything was smooth, fast, and high-quality.',
    avatar: 'src/assets/headshot-3.jpg',
  },
  {
    name: 'Maria Lopez',
    role: 'Marketing Consultant',
    quote:
      'His understanding of branding and web presence is unmatched. Our clients keep praising the new website!',
    avatar: 'src/assets/headshot-2.jpg',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-6 lg:px-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          What Clients Say
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-xl mx-auto">
          Real stories from real people I’ve worked with — hear what they’re saying.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm italic">
                “{testimonial.quote}”
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
