import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="font-sans bg-background-regular dark:bg-background-regular-dark">
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}
