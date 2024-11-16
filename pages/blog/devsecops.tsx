import Head from 'next/head';
import Navigation from '../../components/Navigation';
import Footer from '../../components/Footer';
import Image from 'next/image';

const DevSecOps = () => {
  const relatedPosts = [
    {
      title: "Secure by Design: Embedding Cybersecurity in Every Phase of SDLC",
      link: "/blog/secure-by-design",
    },
    {
      title: "Zero Trust Architecture: A New Paradigm for Cybersecurity",
      link: "/blog/zero-trust-architecture",
    },
  ];

  return (
    <>
      <Head>
        <title>DevSecOps: Integrating Security into Continuous Delivery</title>
        <meta
          name="description"
          content="Discover how DevSecOps embeds security into CI/CD pipelines, creating a seamless, secure software delivery process."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4">DevSecOps: Integrating Security into Continuous Delivery</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Discover how DevSecOps embeds security into CI/CD pipelines, creating a seamless, secure software delivery process.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative w-full h-64 mb-12">
            <Image
              src="/images/devsecops.jpg"
              alt="DevSecOps in Continuous Delivery"
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
              <li><a href="#what-is-devsecops" className="text-blue-500 hover:underline">What is DevSecOps?</a></li>
              <li><a href="#principles" className="text-blue-500 hover:underline">Principles of DevSecOps</a></li>
              <li><a href="#tools" className="text-blue-500 hover:underline">DevSecOps Tools</a></li>
              <li><a href="#benefits" className="text-blue-500 hover:underline">Benefits of DevSecOps</a></li>
              <li><a href="#challenges" className="text-blue-500 hover:underline">Challenges in Implementation</a></li>
              <li><a href="#conclusion" className="text-blue-500 hover:underline">Conclusion</a></li>
            </ul>
          </nav>

          {/* Content Sections */}
          <section id="introduction" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Introduction</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Traditional software delivery often treats security as an afterthought. DevSecOps changes this by integrating security at every stage of the development and delivery pipeline...
            </p>
          </section>

          <section id="what-is-devsecops" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">What is DevSecOps?</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              DevSecOps is the practice of integrating security practices and tools directly into the DevOps process, ensuring that security is part of the development lifecycle from the start...
            </p>
          </section>

          <section id="principles" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Principles of DevSecOps</h2>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Shift security left: Address security issues early in the development cycle.</li>
              <li>Automate security checks to maintain the speed of CI/CD pipelines.</li>
              <li>Foster collaboration between developers, security teams, and operations.</li>
              <li>Continuously monitor for vulnerabilities and threats.</li>
            </ul>
          </section>

          <section id="tools" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">DevSecOps Tools</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Common tools used in DevSecOps include:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
              <li>Static Application Security Testing (SAST) tools like SonarQube and Veracode.</li>
              <li>Dynamic Application Security Testing (DAST) tools such as OWASP ZAP.</li>
              <li>Container security tools like Aqua Security and Twistlock.</li>
              <li>Infrastructure-as-Code (IaC) security tools like Checkov and Terraform Cloud.</li>
            </ul>
          </section>

          <section id="benefits" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of DevSecOps</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              By integrating security into DevOps workflows, organisations can reduce vulnerabilities, improve compliance, and maintain fast release cycles without compromising security...
            </p>
          </section>

          <section id="challenges" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Challenges in Implementation</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Implementing DevSecOps requires overcoming challenges such as resistance to change, tool integration complexity, and the need for specialised training for development teams...
            </p>
          </section>

          <section id="conclusion" className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Conclusion</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              DevSecOps is an essential practice for modern software delivery. By embedding security into every phase of the pipeline, organisations can deliver robust, secure software without sacrificing speed or agility...
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
              Ayodele Ajayi is a Senior DevOps Engineer passionate about integrating security into DevOps workflows and fostering secure software development practices.
            </p>
          </section>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-4">
              Want to learn more about DevSecOps and secure CI/CD pipelines? Subscribe for more insights and updates.
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

export default DevSecOps;
