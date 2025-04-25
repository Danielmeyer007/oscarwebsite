import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-black text-white font-[family-name:var(--font-geist-sans)] overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cybercoin.jpeg" // Optional: Your background image
          alt="Background"
          layout="fill"
          objectFit="cover"
          className="opacity-20"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-6 py-20 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Welcome to the future of Web3, DeFi, GameFi.
        </h1>
        <p className="text-md sm:text-lg text-gray-300 mb-2">
          Whitepapers out <strong>9/25/2025</strong>
        </p>
        <p className="text-gray-400 max-w-xl mb-10">
          This is the Official website for the <strong>Xyber™️</strong> Coin.
          Here you will find general information including all of our products.
        </p>

        {/* External Links */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="/xybercoin"
            className="bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
          >
            XYBERCOIN
          </a>
          <a
            href="/xyber-chrome"
            className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
          >
            XYBER $CHROME
          </a>
          <a
            href="/xyber-bnp"
            className="border border-white py-2 px-6 rounded-full hover:bg-white hover:text-black transition"
          >
            XYBER $BNP
          </a>
          <a
            href="/swap-xybercoins"
            className="bg-green-500 text-black py-2 px-6 rounded-full hover:bg-green-600 transition"
          >
            SWAP XYBERCOINS
          </a>
        </div>

        {/* Subscribe Section */}
        <div className="w-full max-w-md bg-white rounded-xl p-6 text-black">
          <h2 className="text-xl font-bold mb-2">Subscribe</h2>
          <p className="text-sm mb-4 text-gray-700">
            Sign up to be the first to know about our soft launch events.
          </p>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-2 border rounded-lg text-sm"
              required
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-lg font-semibold hover:bg-gray-800 transition"
            >
              SIGN UP
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
