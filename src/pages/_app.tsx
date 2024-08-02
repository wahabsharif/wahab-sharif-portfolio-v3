import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { AnimatePresence } from "framer-motion";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

const MainLayout = dynamic(() => import("@/layout/MainLayout"), {
  ssr: false,
});
const CursorTrailCanvas = dynamic(
  () => import("@/components/CursorTrailCanvas"),
  {
    ssr: false,
  },
);

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
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
