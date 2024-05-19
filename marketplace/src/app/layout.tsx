"use client";

import "@near-wallet-selector/modal-ui/styles.css";
import { Inter } from "next/font/google";
import "../styles.css";
import "./globals.css";

import { MintbaseWalletContextProvider } from "@mintbase-js/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "@/components/header";
import { mbjs } from "@mintbase-js/sdk";

const inter = Inter({ subsets: ["latin"] });

function getCallbackUrl(isDev: boolean) {
  let callbackUrl = "";

  if (typeof window !== "undefined") {
    callbackUrl =
      isDev || window?.location?.host.includes("localhost")
        ? `http://${window?.location.host}`
        : ``; // Fixed the callback URL ending
  }

  return callbackUrl;
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  const isDev = process.env.NEXT_PUBLIC_ENV === "dev";

  mbjs.config({
    network: process.env.NEXT_PUBLIC_NETWORK || "testnet",
  });

  const MintbaseWalletSetup = {
    contractAddress: process.env.NEXT_PUBLIC_CONTRACT_NAME,
    network: "mainnet",
    callbackUrl: getCallbackUrl(isDev),
  };

  return (
    <QueryClientProvider client={queryClient}>
      <MintbaseWalletContextProvider {...MintbaseWalletSetup}>
        <html lang="en">
          <body className={inter.className}>
            {/* <SocialMedias /> */}
            <Header />
            <div className="min-h-screen">{children}</div>
          </body>
        </html>
      </MintbaseWalletContextProvider>
    </QueryClientProvider>
  );
}
