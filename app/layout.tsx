import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@components/Navbar";
import { SessionProvider} from "next-auth/react";
// change color theme


export const metadata: Metadata = {
  title: "FlickFusion",
  description: "A Movie Streaming Service",
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className="bg-base-800">
        <main className="app">
          <SessionProvider>
            <Navbar />
            {children}
          </SessionProvider>
        </main>
      </body>
    </html>
  );
}
