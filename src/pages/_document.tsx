import { Html, Head, Main, NextScript } from "next/document";

/**
 * Represents the main HTML document structure for a Next.js application.
 * This function sets up the HTML, Head, and body sections.
 *
 * @returns A JSX element representing the HTML document.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
