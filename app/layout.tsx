
import type { Metadata } from "next";
import "./globals.css";
import { useEffect, useState } from "react";
// change color theme


export const metadata: Metadata = {
  title: "FlickFusion",
  description: "A Movie Streaming Service",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body className="bg-primary-light dark:bg-bg-primary-dark">
        {children}
      </body>
    </html>
  );
}
