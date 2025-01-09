import React from "react";

const Hero = () => {
  return (
    <section id="home" className="relative bg-black text-white min-h-screen flex items-center justify-center">
      <div className="absolute top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat" 
           style={{ backgroundImage: "url('/src/assets/images/Pro-headshot-removebg.png')" }}>
        {/* Fading effect using gradient */}
        <div className="w-full h-full bg-gradient-to-b from-black to-transparent opacity-60" />
      </div>

      <div className="container mx-auto text-center px-4 relative z-10">
        {/* Introduction */}
        <p className="text-2xl md:text-4xl font-bold text-gray-300">
          Hi, I am{" "}
          <span className="text-gold font-serif">Abimbola Jolayemi</span> from
          Nigeria.
        </p>

        {/* Title */}
        <h1 className="text-xl md:text-3xl mt-4 font-semibold text-gold">
          Software Engineer
        </h1>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 space-x-4">
          <a
            href="#projects"
            className="bg-gold text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-500 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="bg-transparent border-[2px] border-gold text-gold px-6 py-3 rounded-lg hover:bg-gold hover:text-black transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
