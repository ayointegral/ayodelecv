// pages/about.tsx
import Head from 'next/head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Image from 'next/image';
// Ensure proper lucide-react imports
import { Star, Users, Music, Brain, HeartHandshake } from 'lucide-react';

const AboutMe = () => {
  // Define core values
  const coreValues = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Integrity",
      description: "Maintaining unwavering ethical standards and transparency in all interactions. I believe in doing the right thing, even when no one is watching, and building trust through consistent honest behavior and accountability.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Innovation",
      description: "Actively pursuing cutting-edge solutions and continuously learning new technologies. I focus on staying ahead of the curve to create smarter, more efficient solutions that drive real business value and improve user experiences.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Community Involvement",
      description: "Deeply committed to knowledge sharing and mentoring others in the tech community. I believe in contributing to the growth of others through active participation in tech communities, sharing expertise, and supporting both professional and personal development.",
    },
  ];

  // Define passions beyond work
  const passions = [
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Family",
      description: "As a devoted husband and loving father, my family is my greatest joy and motivation. I cherish every moment spent with my wife and children, watching them grow and creating lasting memories together.",
    },
    {
      icon: <Music className="w-6 h-6" />,
      title: "Music",
      description: "Finding harmony in melodies and expressing worship through piano playing. Music has been a constant companion in my life, allowing me to connect with God and share joy with others.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Faith",
      description: "I am a committed disciple of Jesus Christ and an active member of Kharis Church, led by Rev. Dr. David Antwi. My faith guides my decisions as a husband, father, and professional.",
    },
  ];

  return (
    <>
      <Head>
        <title>About - Ayodele Ajayi</title>
        <meta name="description" content="Learn more about Ayodele Ajayi and his experience in DevSecOps and Cloud Architecture" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">
            About Me
          </h1>
          <p className="text-lg">Coming soon...</p>
        </main>

        <Footer />
      </div>
    </>
  );
}