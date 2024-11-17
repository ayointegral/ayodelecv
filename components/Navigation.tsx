// components/Navigation.tsx
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ThemeToggle } from "./ThemeToggle";
import { Home, BookOpen, User } from "lucide-react";

const NavigationLinks = () => {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home", icon: Home },
    { href: "/blog", label: "Blog", icon: BookOpen },
    { href: "/about", label: "About Me", icon: User },
  ];

  return (
    <div className="flex items-center space-x-8">
      {links.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link
            key={href}
            href={href}
            className={`relative flex items-center gap-2 px-3 py-2 rounded-md font-medium text-sm transition-all duration-200 ease-in-out
              ${
                isActive
                  ? "text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20"
                  : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50"
              }
              group
            `}
          >
            <Icon className="w-4 h-4" />
            {label}
            <span
              className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ease-out
                ${isActive ? "w-full" : "w-0 group-hover:w-full"}
              `}
            />
          </Link>
        );
      })}
    </div>
  );
};

const Navigation = () => {
  return (
    <header>
      <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 border-b border-gray-200 dark:border-gray-800 z-50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            <NavigationLinks />
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
