import { useRouter } from "next/router";
import Head from "next/head";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import Image from "next/image";

// Blog data for dynamic routing
const blogPosts = [
  {
    slug: "secure-by-design",
    title: "Secure by Design: Embedding Cybersecurity in Every Phase of SDLC",
    date: "November 16, 2024",
    image: "/images/secure-by-design.jpg",
    content: `
      <p>Cybersecurity is a critical pillar of technological development and operational security in the rapidly evolving digital landscape.</p>
      <p>The Software Development Life Cycle (SDLC) offers a structured framework for developing software, but cybersecurity must be embedded from the start. This blog explores strategies and practices for integrating security throughout the SDLC.</p>
      <h2>Why Integrate Security Early?</h2>
      <p>Proactive integration of security reduces risks and costs while building user trust.</p>
    `,
  },
  {
    slug: "ai-modern-software-engineering",
    title: "The Role of AI in Modern Software Engineering",
    date: "November 10, 2024",
    image: "/images/ai-software-engineering.jpg",
    content: `
      <p>AI-powered tools are reshaping software engineering by improving productivity and automating tasks.</p>
      <p>Discover how AI assists with debugging, testing, and even project management for better development outcomes.</p>
    `,
  },
  {
    slug: "zero-trust-architecture",
    title: "Zero Trust Architecture: A New Paradigm for Cybersecurity",
    date: "November 5, 2024",
    image: "/images/zero-trust.jpg",
    content: `
      <p>Zero Trust Architecture (ZTA) ensures that every access request is verified, reducing risks of breaches.</p>
      <p>This blog discusses ZTA principles, benefits, and practical implementation strategies.</p>
    `,
  },
  {
    slug: "ai-threat-detection",
    title: "AI-Powered Threat Detection in Cybersecurity",
    date: "October 25, 2024",
    image: "/images/ai-threat-detection.jpg",
    content: `
      <p>AI and machine learning are revolutionising cybersecurity by enabling real-time threat detection and faster incident response.</p>
      <p>Learn about anomaly detection, predictive analytics, and challenges in AI-based systems.</p>
    `,
  },
  {
    slug: "devsecops",
    title: "DevSecOps: Integrating Security into Continuous Delivery",
    date: "October 15, 2024",
    image: "/images/devsecops.jpg",
    content: `
      <p>DevSecOps embeds security into the DevOps process, creating a seamless, secure CI/CD pipeline.</p>
      <p>Explore best practices, tools, and cultural shifts needed for successful DevSecOps adoption.</p>
    `,
  },
  {
    slug: "ethics-and-ai",
    title: "Ethics and AI: Balancing Innovation with Responsibility",
    date: "October 5, 2024",
    image: "/images/ethics-ai.jpg",
    content: `
      <p>AI innovation must balance societal values, data privacy, and transparency.</p>
      <p>Discuss the ethical challenges in AI development and the frameworks for responsible innovation.</p>
    `,
  },
];

const BlogPost = () => {
  const router = useRouter();
  const { slug } = router.query;

  // Find the specific blog post using the slug
  const blogContent = blogPosts.find((post) => post.slug === slug);

  // Handle case where no blog post matches the slug
  if (!blogContent) {
    return (
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-12">
          <p className="text-center text-gray-500">
            Blog post not found. Please check the URL.
          </p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{blogContent.title} - Ayodele Ajayi</title>
        <meta
          name="description"
          content={blogContent.content.substring(0, 150)}
        />
      </Head>
      <div className="min-h-screen bg-white dark:bg-slate-900 text-gray-900 dark:text-white">
        <Navigation />
        <main className="max-w-4xl mx-auto px-6 py-12">
          {/* Blog Header */}
          <h1 className="text-4xl font-bold mb-4">{blogContent.title}</h1>
          <p className="text-gray-500 mb-8">{blogContent.date}</p>
          {/* Featured Image */}
          <div className="relative w-full h-64 mb-8">
            <Image
              src={blogContent.image}
              alt={blogContent.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          {/* Blog Content */}
          <div
            className="prose prose-lg dark:prose-invert"
            dangerouslySetInnerHTML={{ __html: blogContent.content }}
          />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default BlogPost;
