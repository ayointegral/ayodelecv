// pages/_app.tsx
import { ThemeProvider } from "next-themes";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Navigation from "../components/Navigation";
import "../styles/globals.css";
import type { AppProps } from "next/app";

/**
 * The App function serves as the main entry point for the application.
 * It wraps the page component with a ThemeProvider and includes global components like Navigation, SpeedInsights, and Analytics.
 *
 * @param {Object} props The properties passed to the App function.
 * @param {React.ComponentType} props.Component The page component to render.
 * @param {Object} props.pageProps The properties passed to the page component.
 */
export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="relative">
        <Navigation />
        {/* Add padding to prevent overlap with the fixed navigation */}
        <main className="pt-16">
          <Component {...pageProps} />
        </main>
      </div>
      <SpeedInsights />
      <Analytics />
    </ThemeProvider>
  );
}
