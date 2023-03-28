import { Layout } from "@/components";
import "@/styles/globals.css";
import { GoogleAnalytics } from "nextjs-google-analytics";

export default function App({ Component, pageProps }) {
  return (
    <GoogleAnalytics
      gaMeasurementId={NEXT_PUBLIC_GA_MEASUREMENT_ID}
      trackPageViews
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GoogleAnalytics>
  );
}
