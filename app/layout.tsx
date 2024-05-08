import type { Metadata } from "next";
import { Overpass_Mono } from "next/font/google";
import "./globals.css";

const overpassMono = Overpass_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wet Hot American Bummer - Train Clock",
  description: "Lets the folks know when the train is coming.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={overpassMono.className}>{children}</body>
    </html>
  );
}
