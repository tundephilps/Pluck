import React, { useState } from "react";
import Hero from "../components/Homepage/Hero";

import TrendingGames from "../components/Homepage/TrendingGames";

import NewChallenges from "../components/Homepage/NewChallenges";

import HighestPayout from "../components/Homepage/HighestPayout";

import { FaFire, FaTrophy, FaCoins } from "react-icons/fa";
import KnowMoreSection from "../components/Homepage/KnowMore";

const Homepage = () => {
  const [activeTab, setActiveTab] = useState("trending");

  const tabContent = {
    trending: <TrendingGames />,
    challenges: <NewChallenges />,
    payouts: <HighestPayout />,
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white ">
      <Hero />
      <div className=" space-y-6  h-full w-full  py-8  lg:px-12 px-2 mx-auto">
        <div className="flex">
          <button
            className={`px-4 py-3 flex items-center space-x-2 lg:text-sm text-[10px] focus:outline-none ${
              activeTab === "trending"
                ? "border-b-2 border-orange-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("trending")}
          >
            <FaFire className="text-orange-500" />
            <span>Trending Games</span>
          </button>

          <button
            className={`px-4 py-3 flex items-center space-x-2 lg:text-sm text-[10px] focus:outline-none ${
              activeTab === "challenges"
                ? "border-b-2 border-purple-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("challenges")}
          >
            <span className="text-purple-500">
              <FaTrophy />
            </span>
            <span>New Challenges</span>
          </button>

          <button
            className={`px-4 py-3 flex items-center space-x-2 lg:text-sm text-[10px] focus:outline-none ${
              activeTab === "payouts"
                ? "border-b-2 border-yellow-500"
                : "text-gray-400 hover:text-gray-200"
            }`}
            onClick={() => setActiveTab("payouts")}
          >
            <span className="text-yellow-500">
              <FaCoins />
            </span>
            <span>Highest Payouts</span>
          </button>
        </div>
        <div className=" overflow-y-auto overscroll-y-auto min-h-[70vh]">
          {tabContent[activeTab]}
        </div>
      </div>
      <KnowMoreSection />
    </div>
  );
};

export default Homepage;
