import LandingPage from "@/components/Landing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Basemint - Where E-sports Live",
  description: "Simple Marketplace",
  openGraph: {
    images: ['https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/']
  }
};

export default function Home() {
  return (
    <main
      className="px-2 sm:px-8 md:px-24 py-12"
      style={{
        backgroundImage: 'url(/background5.jpg)', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh' 
      }}
    >
      <LandingPage />
    </main>
  );
}
