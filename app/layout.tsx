import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Topbar from "./components/Topbar";
import { ClerkProvider } from "@clerk/nextjs";
// import "regenerator-runtime/runtime";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CalBurn",
  description: "An AI Based Fitness ChatBot",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`flex min-h-screen flex-1 flex-col items-center bg-dark-1 px-6 pb-10 pt-28 max-md:pb-32 sm:px-10 ${inter.className}`}
        >
          <Topbar />
          <main className="flex flex-row">
            <section className="main-container">
              <div className="w-full max-w-4xl">{children}</div>
            </section>
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
}
