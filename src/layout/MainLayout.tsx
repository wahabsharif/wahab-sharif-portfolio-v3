import { routes } from "@/data/navigationRoutes";
import Navbar from "@/layout/Navbar/Navbar";
import { classNames } from "@/utility/classNames";
import dynamic from "next/dynamic";
import { Montserrat } from "next/font/google";
import { ReactNode } from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
});

const Footer = dynamic(() => import("@/layout/Footer"), { ssr: true });

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={routes} />
        <main>{props.children}</main>
      </div>
      <Footer />
    </>
  );
}
