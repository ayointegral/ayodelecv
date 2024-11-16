// pages/blog.tsx
import Head from "next/head";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Secure by Design: Embedding Cybersecurity in Every Phase of SDLC",
      description:
        "Explore how to integrate cybersecurity throughout the software development lifecycle to build secure and robust software systems.",
      image: "/images/secure-by-design.jpg",
      date: "November 16, 2024",
      slug: "secure-by-design",
      category: "Information Security",
    },
    {
      id: 2,
      title: "The Role of AI in Modern Software Engineering",
      description:
        "How AI-powered tools and techniques are reshaping software engineering to improve productivity and quality.",
      image: "/images/ai-software-engineering.jpg",
      date: "November 10, 2024",
      slug: "ai-modern-software-engineering",
      category: "AI",
    },
    {
      id: 3,
      title: "Zero Trust Architecture: A New Paradigm for Cybersecurity",
      description:
        "Understand how Zero Trust principles are redefining cybersecurity and safeguarding modern infrastructures.",
      image: "/images/zero-trust.jpg",
      date: "November 5, 2024",
      slug: "zero-trust-architecture",
      category: "Information Security",
    },
    {
      id: 4,
      title: "AI-Powered Threat Detection in Cybersecurity",
      description:
        "Learn how machine learning and AI are transforming cybersecurity threat detection and response.",
      image: "/images/ai-threat-detection.jpg",
      date: "October 25, 2024",
      slug: "ai-threat-detection",
      category: "AI",
    },
    {
      id: 5,
      title: "DevSecOps: Integrating Security into Continuous Delivery",
      description:
        "Discover how DevSecOps is embedding security into CI/CD pipelines and revolutionising software delivery.",
      image: "/images/devsecops.jpg",
      date: "October 15, 2024",
      slug: "devsecops",
      category: "Software Engineering",
    },
    {
      id: 6,
      title: "Ethics and AI: Balancing Innovation with Responsibility",
      description:
        "Explore the ethical challenges of AI and how to align innovation with societal values and responsibility.",
      image: "/images/ethics-ai.jpg",
      date: "October 5, 2024",
      slug: "ethics-and-ai",
      category: "AI",
    },
  ];

  return (
    <>
      <Head>
        <title>Blog - AI, Software Engineering, and Information Security</title>
        <meta
          name="description"
          content="Explore insights on AI, software engineering, and information security. Stay updated with innovative practices and expert advice."
        />
      </Head>

      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        <main className="max-w-6xl mx-auto px-6 py-12">
          {/* Hero Section */}
          <div className="mb-16 text-center">
            <h1 className="text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Stay ahead in AI, software engineering, and information security
              with expert insights and practical advice.
            </p>
          </div>

          {/* Blog Posts Section */}
          <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <div
                key={post.id}
                className="bg-gray-50 dark:bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-500 mb-2">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold mb-2">{post.title}</h2>
                  <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.description}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-blue-500 font-medium hover:underline"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            ))}
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Blog;
