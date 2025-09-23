import React from "react";

const SmoothScrollWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative h-screen w-screen overflow-x-hidden overflow-y-auto scroll-smooth">
      {children}
    </main>
  );
};

export default SmoothScrollWrapper;
