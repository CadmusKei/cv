"use client";

export default function Background({ children }) {

  return (
      <div className="flex flex-col space-y-5 justify-center items-start p-6 w-full h-screen">
        {children}
      </div>
  );
}
