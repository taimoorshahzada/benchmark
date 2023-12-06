import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { LenisProvider } from "./components/lenis-provider";
import { LenisScroller } from "./components/lenis-scroller";
import Footer from "./components/footer";
import Header from "./components/header";
import SlideMenu from "./components/SlideMenu";
import { LazyMotion, domAnimation, m } from "framer-motion";

const moderat = localFont({
  src: [
    {
      path: "./assets/fonts/Moderat-Regular.woff2",
      weight: "400",
    },
    {
      path: "./assets/fonts/Moderat-Regular.woff",
      weight: "400",
    },
    {
      path: "./assets/fonts/Moderat-Medium.woff2",
      weight: "500",
    },
    {
      path: "./assets/fonts/Moderat-Medium.woff",
      weight: "500",
    },
  ],
  variable: "--font-moderat",
});

export const metadata: Metadata = {
  title: "Benchmark Homes",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
		<html lang="en" className={`${moderat.variable} font-sans`}>
			<body>
				<div
					id="glass"
					className="fixed top-0 left-0 bg-white bg-opacity-20 backdrop-blur-lg h-screen w-full z-[10] transition duration-300 invisible opacity-0"
				></div>
				<Header />
				<SlideMenu />

				<div className="main-content">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
