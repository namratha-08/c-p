import React from 'react';
import { Briefcase, Award, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: 'Volunteer – IET Student Chapter',
      company: 'Global Academy of Technology',
      type: 'Event Coordination',
      description: 'Assisted in organizing the Annual General Meeting, managed registrations and coordinated participants.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'MERN Stack Training',
      company: 'MeVi Technologies LLP',
      type: 'Workshop & Training',
      description: 'Built projects like Todo App and EMS using React, Hooks, routing, and API integration.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'MystIQ 2025 – Cleared Rounds 1 & 2',
      company: 'Global Academy of Technology',
      type: 'Technical Competition',
      description: 'Participated in aptitude and surprise task rounds demonstrating logical and problem-solving abilities.',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'TCS TechBytes 2025',
      company: 'College Level Round',
      type: 'Competition',
      description: 'Participated in the college round of TCS TechBytes, showcasing technical aptitude.',
      color: 'from-orange-500 to-orange-600'
    },
    {
      icon: <Calendar className="w-6 h-6" />,
      title: 'IoT Training Workshop',
      company: 'GAT CSE Dept. & NDLI Club',
      type: 'Hands-On Workshop',
      description: 'Worked with ESP32 and Arduino IDE in practical labs on IoT basics and applications.',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: 'IET Ignite Innovation Challenge',
      company: '2024-25 Round 2 Qualifier',
      type: 'Innovation Challenge',
      description: 'Qualified for the idea presentation round, received Certificate of Participation.',
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Experience & Achievements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Highlights of my learning journey through internships, training, volunteering, and competitive events.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:flex-row`}
              >
                <div className={`absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center text-white shadow-lg z-10`}>
                  {experience.icon}
                </div>

                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12 ml-16 md:ml-0' : 'md:pl-12 ml-16 md:ml-0'}`}>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                        {experience.type}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {experience.title}
                    </h3>

                    <h4 className="text-lg font-semibold text-blue-600 mb-4">
                      {experience.company}
                    </h4>

                    <p className="text-gray-600 leading-relaxed">
                      {experience.description}
                    </p>
                  </div>
                </div>

                <div className="hidden md:block w-2/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
