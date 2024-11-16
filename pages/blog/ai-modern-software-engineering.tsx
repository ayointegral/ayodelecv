import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

const AiModernSoftwareEngineering = () => {
  const relatedPosts = [
    {
      title: "AI-Powered Threat Detection in Cybersecurity",
      link: "/blog/ai-threat-detection",
    },
    {
      title: "Ethics and AI: Balancing Innovation with Responsibility",
      link: "/blog/ethics-and-ai",
    },
  ];

  return (
    <>
      <Head>
        <title>The Role of AI in Modern Software Engineering</title>
        <meta
          name="description"
          content="Discover how AI-powered tools and techniques are reshaping software engineering to improve productivity and quality."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">The Role of AI in Modern Software Engineering</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover how AI-powered tools and techniques are reshaping software engineering to improve productivity and quality.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 mb-12">
            <Image
              src="/images/ai-software-engineering.jpg"
              alt="AI in Modern Software Engineering"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          {/* Table of Contents */}
          <nav className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li><a href="#introduction" className="text-blue-500 hover:underline">Introduction</a></li>
              <li><a href="#ai-in-development" className="text-blue-500 hover:underline">AI in Software Development</a></li>
              <li><a href="#productivity" className="text-blue-500 hover:underline">Improving Productivity</a></li>
              <li><a href="#challenges" className="text-blue-500 hover:underline">Challenges and Limitations</a></li>
              <li><a href="#future" className="text-blue-500 hover:underline">Future of AI in Engineering</a></li>
              <li><a href="#conclusion" className="text-blue-500 hover:underline">Conclusion</a></li>
            </ul>
          </nav>

          {/* Content Sections */}
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Artificial intelligence (AI) has revolutionised countless industries, and software engineering is no exception...
            </p>
          </section>

          <section id="ai-in-development" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">AI in Software Development</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              AI tools assist developers in writing cleaner code, detecting bugs early, and even optimising algorithms...
            </p>
          </section>

          <section id="productivity" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Improving Productivity</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>AI-driven code suggestions (e.g., GitHub Copilot).</li>
              <li>Automated testing and debugging.</li>
              <li>Project management tools that leverage AI for task prioritisation.</li>
            </ul>
          </section>

          <section id="challenges" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Challenges and Limitations</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              While AI offers immense potential, challenges like over-reliance on AI tools, ethical concerns, and limitations in creativity remain...
            </p>
          </section>

          <section id="future" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Future of AI in Engineering</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The future of AI in software engineering includes deeper integrations, more powerful automation tools, and ethical frameworks for innovation...
            </p>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              AI is not just a tool; it's a transformative force shaping the future of software engineering. By embracing AI responsibly, developers can unlock new levels of efficiency and creativity...
            </p>
          </section>

          {/* Related Posts */}
          <section id="related-posts" className="mt-12">
            <h2 className="text-3xl font-bold mb-6">Related Posts</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              {relatedPosts.map((post, index) => (
                <li key={index}>
                  <a href={post.link} className="text-blue-500 hover:underline">
                    {post.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* Author Section */}
          <section id="author" className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-2">About the Author</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Ayodele Ajayi is a Senior DevOps Engineer passionate about leveraging AI for software innovation and efficiency.
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Want to stay updated on the latest trends in AI and software engineering? Subscribe to our newsletter!
            </p>
            <a
              href="/subscribe"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600"
            >
              Subscribe Now
            </a>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AiModernSoftwareEngineering;
