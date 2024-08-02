import { routes } from "@/data/navigationRoutes";
import Navbar from "@/layout/Navbar/Navbar";
import { classNames } from "@/utility/classNames";
import dynamic from "next/dynamic";
import { Orbitron, Zen_Dots } from "next/font/google";
import { ReactNode } from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
});

// const zenDots = Zen_Dots({
//   subsets: ["latin"],
//   variable: "--zen-dots-font",
//   weight: "400",
//   display: "swap",
// });

const Footer = dynamic(() => import("@/layout/Footer"), { ssr: true });

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <main className={classNames("min-h-screen", orbitron.className)}>
        <Navbar routes={routes} />
        {props.children}
        <SpeedInsights />
        <Footer />
      </main>
    </>
  );
}
