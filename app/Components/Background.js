"use client";

export default function Background({ children }) {

  return (
      <div className="relative flex flex-col space-y-5 justify-center items-center w-full h-screen">
        {children}
      </div>
  );
}
