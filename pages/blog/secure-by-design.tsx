import Head from "next/head";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";

const SecureByDesign = () => {
  const relatedPosts = [
    {
      title: "The Role of AI in Modern Software Engineering",
      link: "/blog/ai-modern-software-engineering",
    },
    {
      title: "Zero Trust Architecture: A New Paradigm for Cybersecurity",
      link: "/blog/zero-trust-architecture",
    },
  ];

  return (
    <>
      <Head>
        <title>
          Secure by Design: Embedding Cybersecurity in Every Phase of SDLC
        </title>
        <meta
          name="description"
          content="Learn how to integrate cybersecurity into every phase of the SDLC for better, safer software development."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Secure by Design: Embedding Cybersecurity in Every Phase of SDLC
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Learn how to integrate cybersecurity into every phase of the SDLC
              to build resilient, secure software systems.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 mb-12">
            <Image
              src="/images/secure-by-design.jpg"
              alt="Secure by Design"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </div>

          {/* Table of Contents */}
          <nav className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Table of Contents</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>
                <a
                  href="#introduction"
                  className="text-blue-500 hover:underline"
                >
                  Introduction
                </a>
              </li>
              <li>
                <a
                  href="#key-concepts"
                  className="text-blue-500 hover:underline"
                >
                  Define Key Concepts
                </a>
              </li>
              <li>
                <a
                  href="#cybersecurity-sdlc"
                  className="text-blue-500 hover:underline"
                >
                  Cybersecurity in SDLC
                </a>
              </li>
              <li>
                <a
                  href="#best-practices"
                  className="text-blue-500 hover:underline"
                >
                  Best Practices
                </a>
              </li>
              <li>
                <a
                  href="#case-studies"
                  className="text-blue-500 hover:underline"
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#conclusion" className="text-blue-500 hover:underline">
                  Conclusion
                </a>
              </li>
            </ul>
          </nav>

          {/* Content Sections */}
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Cybersecurity is a critical pillar of technological development
              and operational security in the rapidly evolving digital
              landscape...
            </p>
          </section>

          <section id="key-concepts" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Define Key Concepts</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Before diving into SDLC integration, it’s essential to understand
              what cybersecurity and SDLC mean...
            </p>
          </section>

          <section id="cybersecurity-sdlc" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Cybersecurity in SDLC</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The intersection of cybersecurity and SDLC represents a strategic
              approach to software development that prioritises security...
            </p>
          </section>

          <section id="best-practices" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Best Practices</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Implement secure coding practices.</li>
              <li>Adopt DevSecOps principles to integrate security early.</li>
              <li>Conduct regular penetration testing and code reviews.</li>
            </ul>
          </section>

          <section id="case-studies" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Case Studies</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore real-world examples of organisations that succeeded or
              failed due to their approach to cybersecurity...
            </p>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Integrating cybersecurity into the SDLC is not just a technical
              necessity but a strategic imperative for organisations today...
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
              Ayodele Ajayi is a Senior DevOps Engineer passionate about
              cybersecurity, cloud architecture, and innovation.
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Want to learn more about secure development practices? Join our
              mailing list for exclusive insights.
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

export default SecureByDesign;
