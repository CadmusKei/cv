"use client";

export default function Background({ children }) {

  return (
      <div className="flex justify-center items-start p-6 w-full h-screen">
        {children}
      </div>
  );
}
