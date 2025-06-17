import React from 'react';
import { Calendar, Code, Database, Cpu, GitBranch } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    {
      icon: <Code className="w-8 h-8" />, 
      title: 'Programming Languages',
      description: 'Java, C, Python, Shell Scripting',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Database className="w-8 h-8" />, 
      title: 'Web Technologies',
      description: 'HTML, CSS, JavaScript, Node.js, Express.js, React.js',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Cpu className="w-8 h-8" />, 
      title: 'Frameworks & Platforms',
      description: 'Advanced Java (Servlets, JSP), .NET Fundamentals, ESP32 (IoT)',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <GitBranch className="w-8 h-8" />, 
      title: 'Tools & Platforms',
      description: 'Git, GitHub, VS Code, Postman, Arduino IDE',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Calendar className="w-8 h-8" />, 
      title: 'Other Skills',
      description: 'DBMS, MERN Stack, Full Stack Development',
      color: 'from-red-500 to-red-600'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            I’m Namratha, a passionate and self-motivated Computer Science student with a  foundation in Java,
            Full Stack Development, and IoT. I enjoy building impactful tech solutions and thrive on continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
