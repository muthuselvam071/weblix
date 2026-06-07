"use client";

import { useEffect } from "react";
import "./globals.css";
import Lenis from "lenis";

export default function RootLayout({ children }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <html lang="en">
      <head>
        <title>WEBLIX | Premium Web Development & Digital Solutions</title>
        <meta name="description" content="WEBLIX crafts premium websites that build businesses. Founded by Mathan Raj." />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}