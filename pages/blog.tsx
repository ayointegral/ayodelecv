import Head from 'next/head';
import Navigation from '../components/Navigation';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog - Ayodele Ajayi</title>
        <meta name="description" content="Technical insights and experiences in DevSecOps, Cloud Architecture, and Security" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen">
        <Navigation />
        
        <main className="max-w-4xl mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-4">
            Blog
          </h1>
          <p className="text-lg">Coming soon...</p>
        </main>
      </div>
    </>
  );
}