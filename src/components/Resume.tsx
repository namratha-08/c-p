import React from 'react';
import { Download, FileText, Mail, Linkedin, Github } from 'lucide-react';

const Resume: React.FC = () => {
  const handleDownloadResume = async () => {
    try {
      // 1. Fetch the PDF from public/resume.pdf
      const res = await fetch('/resume.pdf');
      if (!res.ok) throw new Error('Network response was not ok');
      const blob = await res.blob();

      // 2. Create object URL for the blob
      const url = window.URL.createObjectURL(blob);

      // 3. Create a temporary <a> element to trigger the download
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Namratha_Resume.pdf';  // The filename the user will see
      document.body.appendChild(a);
      a.click();

      // 4. Cleanup
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    } catch (err) {
      console.error('Failed to download resume:', err);
      alert('Sorry, could not download resume. Please try again later.');
    }
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Interested in collaborating or learning more about my work? Download my resume or connect with me below.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <FileText className="w-10 h-10 text-white" />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Download My Resume
            </h3>

            <p className="text-gray-600 mb-8">
              A detailed overview of my technical skills, education, and experience.
            </p>

            <button
              onClick={handleDownloadResume}
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume (PDF)</span>
            </button>
          </div>

          <div className="border-t border-gray-200 pt-8">
            <h4 className="text-lg font-semibold text-gray-900 text-center mb-6">
              Connect With Me
            </h4>

            <div className="flex justify-center space-x-6">
              <a
                href="mailto:snamratha107@gmail.com"
                className="flex items-center justify-center w-12 h-12 bg-red-100 text-red-600 rounded-full hover:bg-red-200 transition-colors duration-300"
                title="Email"
              >
                <Mail className="w-5 h-5" />
              </a>

              <a
                href="https://linkedin.com/in/namratha-s-b6bb48316"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full hover:bg-blue-200 transition-colors duration-300"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>

              <a
                href="https://github.com/namratha-08"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-12 h-12 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-300"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
