'use client';

import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Get In <span className="text-green-500">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
          Let's work together! Feel free to reach out for opportunities or collaborations
        </p>

        <div className="bg-zinc-950 rounded-xl p-8 border border-zinc-800 max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-white text-center">Contact Info</h3>

          <div className="space-y-6">
            <a
              href="mailto:peliganrhenzdaived@gmail.com"
              className="flex items-center space-x-4 text-gray-400 hover:text-green-500 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                <Mail className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">peliganrhenzdaived@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/rhenzdaived"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-400 hover:text-green-500 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                <Github className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">GitHub</p>
                <p className="font-medium">github.com/rhenzdaived</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rhenzdaived"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 text-gray-400 hover:text-green-500 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center group-hover:bg-green-500/20 transition-colors flex-shrink-0">
                <Linkedin className="text-green-500" size={24} />
              </div>
              <div>
                <p className="text-sm text-gray-500">LinkedIn</p>
                <p className="font-medium">linkedin.com/in/rhenzdaived</p>
              </div>
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Rhenz Peligan | All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
