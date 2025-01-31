import { Inter } from "next/font/google";
import "./globals.css";
import SparklesIcon from "@/components/SparklesIcon";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black min-h-screen text-[#F7FAFC]`}>
        <main className="p-4 max-w-2xl mx-auto">
          <header className="flex justify-between my-2 sm:my-8">
            <Link href="/" className="flex gap-1 text-[#FF8C42] hover:text-[#FFAB73]">
              <SparklesIcon />
              <span>EpicCaptions</span>
            </Link>
            <nav className="flex items-center gap-2 sm:gap-6 text-[#FF8C42] text-sm sm:text-base">
              <Link href="/" className="hover:text-[#FFAB73]">Home</Link>
              <Link href="/pricing" className="hover:text-[#FFAB73]">Pricing</Link>
              <Link href="mailto:contact@epiccaptions.com" className="hover:text-[#FFAB73]">Contact</Link>
            </nav>
          </header>
          {children}
        </main>
      </body>
    </html>
  );
}
