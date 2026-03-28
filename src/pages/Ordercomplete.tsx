import React from "react";

const OrderComplete: React.FC = () => {
  return (
    <div className="w-full h-screen bg-[#e9d8c8] flex items-center justify-center">
      <div className="text-center">
        {/* Logo */}
        <h1 className="text-[#c9a14a] text-4xl font-serif mb-4 tracking-wide">
          Majora
        </h1>

        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl font-cormorant tracking-widest text-black mb-4">
          ORDER COMPLETE
        </h2>

        {/* Subtext */}
        <p className="text-lg font-serif text-black mb-8 font-cormorant-infant">
          Thank You For The Purchase
        </p>

        {/* Buttons */}
        <div className="flex justify-center gap-6">
          <button className="bg-black text-white px-6 py-2 rounded-full text-sm tracking-wide hover:opacity-90 transition">
            Shop More
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderComplete;