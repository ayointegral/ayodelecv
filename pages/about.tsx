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
        <title>About Me - Ayodele Ajayi | DevOps Engineer, Christian, Family Man</title>
        <meta
          name="description"
          content="Learn about Ayodele Ajayi - DevOps Engineer, Christian, and family man. Discover my journey, values, and passions."
        />
      </Head>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />

        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="mb-16">
            <h1 className="text-4xl font-bold mb-8">About Me: Ayodele Ajayi</h1>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="prose prose-lg dark:prose-invert">
          <p>
            Hello! I&apos;m Ayodele Ajayi, a tech savvy person with a passion for building reliable, scalable systems.
          </p>
          <p className="mt-4">
            My approach combines technical expertise with strong relationship building, allowing me to bridge the
            gap between complex technical solutions and business needs. Through collaborative partnerships with
            development teams and stakeholders, I&apos;ve successfully led multiple digital transformation
            initiatives that not only improved system reliability but also enhanced team productivity and customer
            satisfaction.
          </p>
            <p className="mt-4">
            Beyond technical solutions, I take pride in mentoring junior engineers and fostering a culture of
            continuous learning and innovation. My belief in knowledge sharing and community building has helped
            develop strong, self-sufficient teams that consistently deliver exceptional results.
            </p>
              </div>
              <div className="relative w-[300px] h-[300px]">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-75"></div>
              <Image
              src="/images/about.jpg"
              alt="Ayodele Ajayi"
              width={300}
              height={300}
              className="relative rounded-xl"
              />
              </div>
            </div>
          </div>

          {/* Core Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Core Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {coreValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl hover:scale-105 transform transition duration-300"
                >
                  <div className="text-blue-500 mb-4">{value.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Passions Beyond Work */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Passions Beyond Work</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {passions.map((passion, index) => (
                <div
                  key={index}
                  className="bg-gray-50 dark:bg-slate-800 p-6 rounded-xl hover:scale-105 transform transition duration-300"
                >
                  <div className="text-blue-500 mb-4">{passion.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{passion.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{passion.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Why I Do What I Do */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">Why I Do What I Do</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                At the heart of everything I do is a desire to make a difference. I love seeing the tangible results of
                my work – whether that&apos;s in the form of a system that works flawlessly or a person who feels
                supported and empowered. Helping people achieve their God-given purpose is not just a personal mission
                but a way of life.
              </p>
            </div>
          </section>

          {/* A Lifelong Learner */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold mb-6">A Lifelong Learner</h2>
            <div className="prose prose-lg dark:prose-invert">
              <p>
                One thing that defines me is my openness to learning. Technology evolves rapidly, and I embrace every
                opportunity to stay updated and improve. Beyond that, I aim to grow as a person by listening, adapting,
                and understanding different perspectives.
              </p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutMe;
