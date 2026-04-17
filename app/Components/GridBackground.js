"use client";
import { useEffect, useState } from "react";

export default function GridBackground({ children, cols = 5, rows = 3 }) {
  const [gridSize, setGridSize] = useState({ large: 120, small: 24 });

  useEffect(() => {
    function calculateGrid() {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const large = Math.min(w / cols, h / rows);
      setGridSize({ large, small: large / 5 });
    }

    calculateGrid();
    window.addEventListener("resize", calculateGrid);
    return () => window.removeEventListener("resize", calculateGrid);
  }, [cols, rows]);

  return (
    <div
      className="min-h-screen w-full"
      style={{
        backgroundColor: "#eaeaea",
        backgroundImage: `
          linear-gradient(#b0b7c3 1px, transparent 1px),
          linear-gradient(90deg, #b0b7c3 1px, transparent 1px),
          linear-gradient(#d1d5db 1px, transparent 1px),
          linear-gradient(90deg, #d1d5db 1px, transparent 1px)
        `,
        backgroundSize: `
          ${gridSize.large}px ${gridSize.large}px,
          ${gridSize.large}px ${gridSize.large}px,
          ${gridSize.small}px ${gridSize.small}px,
          ${gridSize.small}px ${gridSize.small}px
        `,
        backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
      }}
    >
      {children}
    </div>
  );
}