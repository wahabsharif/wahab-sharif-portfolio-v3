import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
// import { SpeedInsights } from "@vercel/speed-insights/next";

// Import the types for Next.js
/// <reference types="@vercel/next/global" />

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <MainLayout>
          <AnimatePresence mode="wait" initial={false}>
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
      <Analytics />
      {/* <SpeedInsights /> */}
    </>
  );
}