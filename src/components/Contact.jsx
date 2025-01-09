import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Message sent!');
  };

  return (
    <section id="contact" className="py-20 bg-white px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">
          Get in Touch
        </h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg text-black mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-black mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg text-black mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-[40%] bg-gold text-white py-3 rounded-md hover:bg-black hover:text-gold transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-black">Find me on</h3>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/abimbola-jolayemi-8b284b201"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gold transition-all duration-300"
              >
                <i className="fab fa-linkedin fa-2x"></i> LinkedIn
              </a>
              <a
                href="https://github.com/Abimbola-Jolayemi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gold transition-all duration-300"
              >
                <i className="fab fa-github fa-2x"></i> GitHub
              </a>
              <a
                href="https://x.com/ACJolayemi111"
                target="_blank"
                rel="noopener noreferrer"
                className="text-black hover:text-gold transition-all duration-300"
              >
                <i className="fab fa-twitter fa-2x"></i> Twitter
              </a>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-black mb-4">Download My CV</h3>
              <a
                href="/path/to/your/cv.pdf"
                download
                className="w-full bg-gold text-white py-3 px-3 rounded-md hover:bg-black hover:text-gold transition-all duration-300"
              >
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
