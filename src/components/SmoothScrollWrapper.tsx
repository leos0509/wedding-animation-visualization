import React from "react";
import Lenis from "lenis";

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);

  return (
    <main className="overflow-x-hiddens relative h-screen w-screen overflow-y-auto scroll-smooth">
      {children}
    </main>
  );
};

export default SmoothScrollWrapper;
