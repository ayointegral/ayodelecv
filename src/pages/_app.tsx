import "@/styles/globals.css";
import type { AppProps } from "next/app";

/**
 * A functional component that serves as the root of the application.
 *
 * @param {object} props - The properties passed to the component.
 * @param {React.ComponentType} props.Component - The active page component.
 * @param {object} props.pageProps - The properties specific to the page component.
 * @returns {JSX.Element} The page component with the given properties.
 */
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
