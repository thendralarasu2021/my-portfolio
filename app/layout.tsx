import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // Correct-ana file name inga update panniyaachu

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Thendralarasu S | Portfolio",
  description: "Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
        {children}
      </body>
    </html>
  );
}