import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";
import { SessionProvider } from "next-auth/react";
// change color theme


export const metadata: Metadata = {
  title: "FlickFusion",
  description: "A Movie Streaming Service",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="">
        <div className="main bg-base-800">
          <div className="gradient" />
        </div>
        <main className="app dark:text-primary-light text-primary-dark h-screen flex flex-col w-[90%] m-auto">
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
