// components/Navigation.tsx
import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

const NavigationLinks = () => {
  return (
    <div className="flex space-x-8">
      <Link
        href="/"
        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Home
      </Link>
      <Link
        href="/blog"
        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        Blog
      </Link>
      <Link
        href="/about"
        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
      >
        About Me
      </Link>
    </div>
  );
};

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-16 flex items-center justify-between">
          <NavigationLinks />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
