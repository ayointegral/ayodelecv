import Head from "next/head";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";

const EthicsAndAI = () => {
  const relatedPosts = [
    {
      title: "The Role of AI in Modern Software Engineering",
      link: "/blog/ai-modern-software-engineering",
    },
    {
      title: "AI-Powered Threat Detection in Cybersecurity",
      link: "/blog/ai-threat-detection",
    },
  ];

  return (
    <>
      <Head>
        <title>Ethics and AI: Balancing Innovation with Responsibility</title>
        <meta
          name="description"
          content="Explore the ethical challenges of AI and how to align innovation with societal values and responsibility."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">
              Ethics and AI: Balancing Innovation with Responsibility
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Explore the ethical challenges of AI and how to align innovation
              with societal values and responsibility.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 mb-12">
            <Image
              src="/images/ethics-ai.jpg"
              alt="Ethics and AI"
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
                  href="#data-privacy"
                  className="text-blue-500 hover:underline"
                >
                  AI and Data Privacy
                </a>
              </li>
              <li>
                <a
                  href="#bias-and-fairness"
                  className="text-blue-500 hover:underline"
                >
                  Bias and Fairness
                </a>
              </li>
              <li>
                <a
                  href="#transparency"
                  className="text-blue-500 hover:underline"
                >
                  Transparency in AI
                </a>
              </li>
              <li>
                <a
                  href="#responsible-ai"
                  className="text-blue-500 hover:underline"
                >
                  Building Responsible AI
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
              As AI continues to revolutionise industries, it also raises
              critical ethical questions. How can we ensure AI development
              respects privacy, avoids bias, and remains transparent?
            </p>
          </section>

          <section id="data-privacy" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">AI and Data Privacy</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Data privacy is one of the most significant concerns in AI.
              Machine learning models require vast amounts of data, often
              including sensitive personal information. Ensuring that data is
              collected and used responsibly is essential...
            </p>
          </section>

          <section id="bias-and-fairness" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Bias and Fairness</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              AI systems can unintentionally perpetuate or even amplify societal
              biases. This section explores how biases arise and how developers
              can work to mitigate them in training data and algorithms...
            </p>
          </section>

          <section id="transparency" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Transparency in AI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Transparency ensures that AI systems are understandable and
              accountable. Explainable AI (XAI) aims to demystify complex
              algorithms and provide insights into their decision-making
              processes...
            </p>
          </section>

          <section id="responsible-ai" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Building Responsible AI</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Responsible AI requires collaboration across
              stakeholders—developers, businesses, and policymakers. This
              section discusses frameworks for ethical AI and best practices for
              balancing innovation with societal good...
            </p>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Ethics in AI is not just a challenge but an opportunity to align
              technological advancements with humanity’s core values. By
              prioritising fairness, transparency, and accountability, we can
              build AI systems that benefit everyone...
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
              exploring the intersection of AI, ethics, and innovation. He
              advocates for responsible technology development.
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Interested in ethical AI development? Subscribe to stay updated on
              the latest trends and discussions.
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

export default EthicsAndAI;
