import React, { useState } from 'react';

const projects = [
  {
    id: 1,
    title: 'AnonSpace Chats',
    description:
      'AnonSpace is an innovative anonymous chat application designed for users who wish to communicate without revealing their personal information.',
    fullDescription:
      'AnonSpace is an innovative anonymous chat application designed for users who wish to communicate without revealing their personal information. The app allows users to join various chat rooms, interact with others, and engage in private conversations. The app includes features like real-time messaging, user-friendly interfaces, and a clean design that enhances the overall user experience.',
    hostedLink: 'https://anonspace-chat.onrender.com/',
    githubLink: 'https://github.com/Abimbola-Jolayemi/anonspace-chat-room/tree/feature/add-time',
  },
  {
    id: 2,
    title: 'SnipLinks',
    description:
      'SnipLinks is a simple and efficient URL shortener app, built with ReactJS, Java and MySQL, that helps you create short, shareable links with ease.',
    fullDescription:
      'SnipLinks is a simple and efficient URL shortener app, built with ReactJS, Java and MySQL, that helps you create short, shareable links with ease. With SnipLinks, users can shorten long URLs, making them easier to share on social media, in emails, or via messaging apps. The app provides a clean and user-friendly interface, allowing you to quickly manage and track your shortened URLs. It is perfect for those who want to optimize their link-sharing experience and keep their content tidy.',
    hostedLink: 'https://github.com/Abimbola-Jolayemi/Url-shortener-interface',
    githubLink: 'https://github.com/Abimbola-Jolayemi/Url-shortener-API',
  },
  {
    id: 3,
    title: 'TaskBuddy API',
    description:
      'TaskBuddy is a task management app built with ReactJS, Java and MongoDB, designed to help you stay organized by creating, tracking, and managing tasks efficiently.',
    fullDescription:
      'TaskBuddy is a task management app built with ReactJS, Java and MongoDB, designed to help you stay organized by creating, tracking, and managing tasks efficiently. The app features an intuitive and simple interface that allows both individuals and teams to manage tasks effectively. It includes features like task categorization, deadlines, reminders, and notifications, ensuring you never miss a task.',
    hostedLink: 'https://project-three.com',
    githubLink: 'https://github.com/your-github/project-three',
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-black mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg transition-all duration-300">
      <h3 className="text-2xl font-semibold text-black mb-4">{project.title}</h3>
      <p className="text-gray-600 mb-4">
        {isExpanded ? project.fullDescription : project.description}
      </p>
      <div className="text-right">
        <button
          onClick={toggleDescription}
          className="text-blue-500 text-sm"
        >
          {isExpanded ? 'Collapse Description' : 'See Description'}
        </button>
      </div>
      <div className="flex space-x-6 mt-4">
        <a
          href={project.hostedLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold font-semibold py-2 px-4 rounded-md border border-gold hover:bg-gold hover:text-white transition-all duration-200"
        >
          Visit Page
        </a>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gold font-semibold py-2 px-4 rounded-md border border-gold hover:bg-gold hover:text-white transition-all duration-200"
        >
          View GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;
