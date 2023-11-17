import type { Metadata } from "next";
import "../globals.css";
import localFont from "next/font/local";
import { ReactLenis, useLenis } from "@studio-freight/react-lenis";
import { LenisProvider } from "./components/lenis-provider";
import { LenisScroller } from "./components/lenis-scroller";
import Footer from "./components/footer";
import Header from "./components/header";
import SlideMenu from "./components/SlideMenu";

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
        <Header />
        <SlideMenu />
        {/* <LenisProvider
					options={{
						lerp: 0.1,
						wheelMultiplier: 0.8,
						smoothWheel: true,
					}}
				> */}
        <div className="main-content">{children}</div>
        {/* </LenisProvider> */}
        {/*<LenisScroller /> */}
        <Footer />
      </body>
    </html>
  );
}
