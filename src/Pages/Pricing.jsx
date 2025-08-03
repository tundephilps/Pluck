// src/components/MembershipCard.jsx
import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import HowItWorks from "../components/Pricing/HowItWorks";
import FAQ from "../components/Pricing/FAQ";
import PromoBanner from "../components/Pricing/PromoBanner";

const benefits = [
  "Play unlimited games every day",
  "Early invites to tournaments",
  "Priority leaderboard placement",
  "Access bigger prize pools",
  "Get an instant Verified badge",
  "No ads in premium games",
];

const MembershipCard = () => {
  return (
    <div
      className="text-white py-12 pt-[20vh] lg:px-24 px-4 min-h-screen bg-cover bg-center"
      //   style={{ backgroundImage: `url(${background})` }}
    >
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold">
          Unlock <span className="text-teal-400">Unlimited</span> Pluckin'
        </h1>
        <p className="text-teal-200 mt-2 flex justify-center items-center gap-2">
          <MdVerified className="text-xl" /> Become a Verified Member for just
          ₦1,000/month
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="mt-10 flex flex-col md:flex-row gap-6 justify-center items-center">
        {/* Monthly */}
        <div className="bg-[#1f1f1f] rounded-xl p-6 w-full  shadow-lg">
          <div className="flex justify-between items-center mb-2">
            <p className="flex items-center gap-1">
              Verified Member <MdVerified className="text-teal-400" />
            </p>
            <span className="text-sm text-[#34d399] font-semibold">
              POPULAR
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-4">
            ₦1,000 <span className="text-base font-medium">/ month</span>
          </h2>
          <button className="w-full bg-[#34d399] text-black font-semibold py-2 rounded-md hover:bg-teal-300 transition">
            Upgrade Now
          </button>
        </div>

        {/* Annual */}
        <div className="bg-[#1f1f1f] rounded-xl p-6 w-full  shadow-lg relative">
          <div className="absolute top-[-10px] right-[-10px] bg-[#8B5CF6] text-white text-xs font-bold px-2 py-1 rounded-md">
            SAVE ₦2000
          </div>
          <p className="flex items-center gap-1">
            Verified Annual <MdVerified className="text-teal-400" />
          </p>
          <h2 className="text-3xl font-bold mb-4 mt-2">
            ₦10,000 <span className="text-base font-medium">/ year</span>
          </h2>
          <button className="w-full bg-teal-400 text-black font-semibold py-2 rounded-md hover:bg-teal-300 transition">
            Upgrade Now
          </button>
        </div>
      </div>

      <HowItWorks />

      {/* Benefits */}
      <div className="bg-[#1f1f1f]  p-4 mt-12 rounded-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5  mx-auto  px-4">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex items-start gap-3  rounded-lg p-4">
              <FaCheckCircle className="text-teal-400 mt-1" />
              <span>{benefit}</span>
            </div>
          ))}
        </div>
      </div>
      <FAQ />
      <PromoBanner />
    </div>
  );
};

export default MembershipCard;
