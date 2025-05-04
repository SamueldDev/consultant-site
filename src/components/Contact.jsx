


import React, { useState } from 'react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');

    setTimeout(() => {
      setFormStatus('Message sent successfully!');
    }, 1500); 
  };

  return (
    <section className="bg-white dark:bg-gray-900 py-20" id="contact">
      <div className="container mx-auto px-6 lg:px-20 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 dark:text-white mb-10">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Name</label>
            <input
              type="text"
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Smith Henry"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Email</label>
            <input
              type="email"
              required
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="smith@gmail.com"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Your Message</label>
            <textarea
              required
              rows="5"
              className="w-full p-3 border rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
          >
            Send Message
          </button>

          {formStatus && (
            <p className="text-center mt-4 text-green-600 font-medium">{formStatus}</p>
          )}
        </form>

        {/* Optional: Contact Info */}
        <div className="mt-10 text-center text-gray-600 dark:text-gray-400">
          <p>📧 Email: <a href="mailto:fridaysamuel508@gmail.com" className="underline">consultant@averybrand.com  </a></p>
          <p>📞 Phone: <a href="tel:+2348141796762" className="underline">(123) 456-7890</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
