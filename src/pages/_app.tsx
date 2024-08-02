// pages/_app.tsx

import MainLayout from "@/layout/MainLayout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Orbitron, Zen_Dots } from "next/font/google";
import CursorTrailCanvas from "@/components/CursorTrailCanvas";

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--orbitron-font",
  weight: ["400", "500", "700"],
});

const zenDots = Zen_Dots({
  subsets: ["latin"],
  variable: "--zen-dots-font",
  weight: "400",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <style jsx global>{`
        :root {
          --orbitron-font: ${orbitron.style.fontFamily};
          --zen-dots-font: ${zenDots.style.fontFamily};
        }
      `}</style>
      <ThemeProvider attribute="class" defaultTheme="dark">
        <MainLayout>
          <AnimatePresence mode="wait" initial={false}>
            <CursorTrailCanvas
              color="hsla(183, 64%, 27%, 0.4)"
              className="fixed inset-0 z-50 w-full h-full pointer-events-none"
            />
            <Component key={router.asPath} {...pageProps} />
          </AnimatePresence>
        </MainLayout>
      </ThemeProvider>
      {process.env.NODE_ENV === "production" && <SpeedInsights />}
      <Analytics />
    </>
  );
}
