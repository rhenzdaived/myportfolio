'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 text-white">
          Rhenz Peligan
        </h1>
        <p className="text-2xl sm:text-3xl md:text-4xl text-green-500 font-semibold mb-6">
          IT Intern | 4th Year IT Student
        </p>
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          "Aspiring IT professional eager to gain hands-on experience in emerging technologies."
        </p>
        <button
          onClick={scrollToProjects}
          className="inline-flex items-center px-8 py-4 bg-green-500 hover:bg-green-600 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-500/50"
        >
          View Projects
          <ArrowDown className="ml-2" size={20} />
        </button>
      </div>
    </section>
  );
}
