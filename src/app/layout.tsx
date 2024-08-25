
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import web3Onboard from "./web3onboard";
import { Web3OnboardProvider } from "@web3-onboard/react";
import Web3Provider from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Web3Provider>
        <body className={inter.className}>{children}</body>
      </Web3Provider>
    </html>
  );
}
