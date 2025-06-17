import React from 'react';
import { ExternalLink, Github, ActivitySquare, ClipboardCheck, Code, Layers } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      icon: <ActivitySquare className="w-8 h-8" />,
      title: 'DiaTracker – Diabetes Prediction System',
      type: 'Machine Learning',
      year: '2025',
      description: 'Built ML models (Logistic Regression, Decision Tree, Random Forest) to predict diabetes risk. Evaluated with accuracy, precision, and recall using Matplotlib and Tableau.',
      color: 'from-blue-500 to-blue-600',
      tags: ['ML', 'Visualization', 'Healthcare']
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: 'Todo App (MERN Workshop)',
      type: 'Full Stack',
      year: '2025',
      description: 'Developed with React.js and Hooks including add, delete, and filter functionalities. Used localStorage for data persistence.',
      color: 'from-purple-500 to-purple-600',
      tags: ['React', 'Hooks', 'localStorage']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Employee Management System (MERN Workshop)',
      type: 'Web App',
      year: '2025',
      description: 'CRUD application using React, Axios, and React Router with a mock backend. Practiced modular UI and API integration.',
      color: 'from-emerald-500 to-emerald-600',
      tags: ['React', 'CRUD', 'API']
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'Portfolio Website',
      type: 'Static Website',
      year: '2025',
      description: 'Responsive website created using HTML, CSS, Bootstrap. Deployed using GitHub Pages as part of the MERN workshop project.',
      color: 'from-orange-500 to-orange-600',
      tags: ['HTML', 'CSS', 'Bootstrap']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Projects demonstrating my technical capabilities across machine learning, frontend, and full-stack development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                    {project.type}
                  </div>
                  <div className="text-lg font-bold text-gray-900">
                    {project.year}
                  </div>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                {project.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm font-medium rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium transition-colors duration-200">
                  <ExternalLink size={16} />
                  <span>View Details</span>
                </button>
                <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200">
                  <Github size={16} />
                  <span>Source Code</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
