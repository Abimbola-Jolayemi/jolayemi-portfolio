import React, { useState } from "react";

const About = () => {
  const [activeTab, setActiveTab] = useState(null);

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <section id="about" className="bg-[#f4f4f4] text-black py-16 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <div className="max-w-5xl mx-auto">
  <p className="text-lg md:text-xl text-gray-700 mb-6 font-playfair">
    Hi, I’m <span className="text-gold font-bold">Abimbola Jolayemi</span>, a
    passionate <span className="font-bold">Software Engineer</span> from
    Lagos, <span className="text-gold">Nigeria</span>. I am a versatile
    engineer skilled in frontend technologies like HTML, CSS, JavaScript,
    and ReactJS, and backend development using MERN Stack, Java,
    JavaScript, and Python. I specialize in designing RESTful APIs and
    building scalable, user-centric web applications. I also have experience in <span className="font-bold">Quality Assurance (QA)</span>, where I focus on ensuring software reliability through thorough testing, including manual and automated testing. I’ve worked with tools like Jest, Postman, JUnit, Pytest and Unittest to improve software quality, and I am always refining my approach to detecting and resolving issues early in the development lifecycle. My journey as a software developer is driven by a
    desire to solve real-world problems and continually improve my
    skillset with the latest technologies.
  </p>
</div>


        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center space-x-8 mb-8">
          <div
            className={`cursor-pointer font-semibold text-xl hover:underline hover:decoration-4 hover:decoration-gold ${
              activeTab === 0 ? "text-gold" : "text-gray-700"
            }`}
            onClick={() => toggleTab(0)}
          >
            Skills
          </div>
          <div
            className={`cursor-pointer font-semibold text-xl hover:underline hover:decoration-4 hover:decoration-gold ${
              activeTab === 1 ? "text-gold" : "text-gray-700"
            }`}
            onClick={() => toggleTab(1)}
          >
            Experience
          </div>
          <div
            className={`cursor-pointer font-semibold text-xl hover:underline hover:decoration-4 hover:decoration-gold ${
              activeTab === 2 ? "text-gold" : "text-gray-700"
            }`}
            onClick={() => toggleTab(2)}
          >
            Education
          </div>
          <div
            className={`cursor-pointer font-semibold text-xl hover:underline hover:decoration-4 hover:decoration-gold ${
              activeTab === 3 ? "text-gold" : "text-gray-700"
            }`}
            onClick={() => toggleTab(3)}
          >
            Certifications
          </div>
        </div>

        {/* Tab Content */}
        <div className="space-y-6">
          {activeTab === 0 && (
            <div className="text-lg text-gray-700">
              <ul className="list-disc list-inside">
                <li>HTML, CSS, JavaScript</li>
                <li>ReactJS, Node.js, Express</li>
                <li>Python, Java, GoLang</li>
                <li>Test-Driven Development</li>
                <li>Jest, Junit, Postman, Unittest, Pytest</li>
                <li>SQL (Relational Databases)</li>
                <li>MongoDB (Non-Relational Databases)</li>
                <li>RESTful API Development</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>
          )}

          {activeTab === 1 && (
            <div className="text-lg text-gray-700">
              <ul>
                <li className="mb-4">
                  <strong>Software Engineering Trainee</strong>
                  <br />
                  <span className="text-gold">Semicolon Africa</span>
                  <br />
                  <span className="text-gray-600">2023 - Present</span>
                  <br />
                  Lagos, Nigeria
                </li>

                <li className="mb-4">
                  <strong>Web Development Trainee</strong>
                  <br />
                  <span className="text-gold">GoMyCode Nigeria</span>
                  <br />
                  <span className="text-gray-600">2022 - 2023</span>
                  <br />
                  Lagos, Nigeria
                </li>

                <li className="mb-4">
                  <strong>Frontend Development Trainee</strong>
                  <br />
                  <span className="text-gold">Stutern</span>
                  <br />
                  <span className="text-gray-600">2021 - 2022</span>
                  <br />
                  Remote
                </li>
              </ul>
            </div>
          )}

          {activeTab === 2 && (
            <div className="text-lg text-gray-700">
              <ul>
                <li className="mb-4">
                  <strong>Bachelor of Science in Biochemistry</strong>
                  <br />
                  <span className="text-gold">Adekunle Ajasin University, Akungba-Akoko</span>
                  <br />
                  <span className="text-gray-600">2018 - 2023</span>
                  <br />
                  Ondo State, Nigeria
                </li>
              </ul>
            </div>
          )}

          {activeTab === 3 && (
            <div className="text-lg text-gray-700">
              <ul>
                <li className="mb-4">
                  <strong>Certified Frontend Web Developer</strong>
                  <br />
                  <a
                    href="https://diploma.gomycode.app/?id=31713560489681206"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gold underline"
                  >
                    Web Development Essentials, GoMyCode.
                  </a>
                  <br />
                  <span className="text-gray-600">April, 2023.</span>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default About;
