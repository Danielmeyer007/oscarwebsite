"use client";

import Header from "./components/header";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center bg-gradient-to-r from-blue-500 to-purple-600 text-white py-24 px-6">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to Xybercoin
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl">
          Powering the Future of Decentralized Finance with Speed, Security, and
          Scalability.
        </p>
        <Link href="#purchase">
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-xl hover:bg-gray-200 transition">
            Get Xybercoin Now
          </button>
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">About Xyber</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg">
          Xybercoin is a next-generation cryptocurrency designed to
          revolutionize transactions, empower DeFi platforms, and provide
          lightning-fast, low-cost transfers globally. Join us at the forefront
          of innovation.
        </p>
      </section>

      {/* Map Road Section */}
      <section id="maproad" className="py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-6 text-purple-600">
          Map Road of Xyber
        </h2>
        <ul className="space-y-4 max-w-3xl mx-auto text-gray-600 text-lg">
          <li>🚀 Q2 2025: Launch Xybercoin Token & Whitepaper Release</li>
          <li>🛡️ Q3 2025: Security Audits & Strategic Partnerships</li>
          <li>🌍 Q4 2025: Global Exchange Listings & Wallet Integrations</li>
          <li>💎 2026+: DeFi Ecosystem Growth, Staking, and NFTs Launch</li>
        </ul>
      </section>

      {/* White Paper Section */}
      <section id="whitepaper" className="py-20 px-6 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">White Paper</h2>
        <p className="max-w-3xl mx-auto text-gray-600 text-lg mb-6">
          Dive deep into the technology, vision, and mission behind Xybercoin.
          Read our detailed whitepaper for all the insights.
        </p>
        <a
          href="/whitepaper.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          View White Paper
        </a>
      </section>

      {/* Purchase Section */}
      <section
        id="purchase"
        className="py-20 px-6 text-center bg-gradient-to-r from-purple-500 to-blue-600 text-white"
      >
        <h2 className="text-4xl font-bold mb-6">Purchase Xybercoin</h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          Get ready to own the future. Purchase Xybercoin securely and be part
          of the revolution.
        </p>
        <button className="bg-white text-purple-600 font-bold px-8 py-4 rounded-xl hover:bg-gray-200 transition">
          Buy Now
        </button>
      </section>
    </main>
  );
}
