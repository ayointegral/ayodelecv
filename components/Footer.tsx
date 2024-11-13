// components/Footer.tsx
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="https://github.com/ayointegral"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://linkedin.com/in/ayoinc"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <div className="text-gray-600 dark:text-gray-400 text-sm text-center">
            Copyright © {new Date().getFullYear()} • Ayodele Ajayi - an
            experienced leader in technology
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
