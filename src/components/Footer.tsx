import React from 'react';
import { Eye, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Namratha S
            </h3>
            <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
              Computer Science student passionate about Java, Full Stack Development (MERN), and IoT. I believe in lifelong learning and solving real-world problems through tech.
            </p>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex items-center justify-center space-x-2 text-gray-400 mb-4">
              <Eye className="w-4 h-4" />
              <span className="text-sm">
                Thank you for visiting! This portfolio logs anonymous visits for viewer insights only. No personal data is collected.
              </span>
            </div>

            <div className="flex items-center justify-center space-x-2 text-gray-500">
              <span className="text-sm">Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span className="text-sm">by Namratha</span>
              <span className="text-sm">© {new Date().getFullYear()}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
