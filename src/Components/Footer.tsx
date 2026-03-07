import logo from "../assets/images/logo.png";

import visa from "../assets/images/Visa.png";
import mastercard from "../assets/images/mastercard.png";
import paypal from "../assets/images/Paypal.png";
import applepay from "../assets/images/applepay.png";
import googlepay from "../assets/images/googlepay.png";

import { Twitter, Facebook, Instagram, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white mt-14">

      {/* Logo */}
      <div className="flex justify-center pt-10">
        <img
          src={logo}
          alt="Majora"
          className="h-24 object-contain"
        />
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Contact */}
          <div>
            <h3 className="text-yellow-500 text-lg font-cormorant mb-4">
              Contact Us
            </h3>

            <p className="text-sm text-gray-400 mb-4">
              Need Help?
            </p>

            <p className="text-sm text-gray-400 leading-relaxed mb-6">
              For any queries, please feel free to contact us on
              support@majora.com or call us at +01 2345678945
            </p>

            {/* Social Icons */}
            <div className="flex gap-4">

              <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                <Twitter size={16} />
              </div>

              <div className="bg-yellow-500 text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                <Facebook size={16} />
              </div>

              <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                <Instagram size={16} />
              </div>

              <div className="bg-white text-black p-2 rounded-full cursor-pointer hover:scale-110 transition">
                <Github size={16} />
              </div>

            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-yellow-500 text-lg font-cormorant mb-4">
              About
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-yellow-500 text-lg font-cormorant mb-4">
              Shop
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h3 className="text-yellow-500 text-lg font-cormorant mb-4">
              Policy
            </h3>

            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
              <li className="hover:text-white cursor-pointer">Lorem ipsum</li>
            </ul>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6">

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">

            {/* Copyright */}
            <p className="text-sm text-gray-400">
              Majora ©2025–2026, All Rights Reserved
            </p>

            {/* Payment Icons */}
          

<div className="flex gap-1 md:gap-3 items-center">
  {[
    { src: visa, alt: "visa" },
    { src: mastercard, alt: "mastercard" },
    { src: paypal, alt: "paypal" },
    { src: applepay, alt: "applepay" },
    { src: googlepay, alt: "googlepay" },
  ].map((logo, index) => (
    <div
      key={index}
      className="bg-white  rounded-md flex items-center justify-center w-[60px] h-[28px]"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className="max-h-[18px] w-auto object-cover"
      />
    </div>
  ))}
</div>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;