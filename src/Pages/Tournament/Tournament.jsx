import React, { useState } from "react";

import { FaTrophy, FaGamepad } from "react-icons/fa";

import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore, MdOutlineMessage } from "react-icons/md";
import { IoTimeOutline } from "react-icons/io5";
import Leaf from "../../assets/Leaf.png";
import Smile from "../../assets/Smile.png";
import { useNavigate } from "react-router-dom";
import Card from "../../components/Tournament/Card";
import AllTournaments from "../../components/Tournament/AllTournaments";
import PastTournaments from "../../components/Tournament/PastTournaments";
import CardSwiper from "../../components/Tournament/CardSwiper";

const tabs = [
  { id: "all", label: "All Tournaments", icon: "🔥" },
  { id: "past", label: "Past Tournaments", icon: "🎯" },
];
const tabComponents = {
  all: <AllTournaments />,
  past: <PastTournaments />,
};

const Tournament = () => {
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();

  const handleGameDetails = () => {
    navigate("/GameDetails"); // this routes to the homepage
  };

  return (
    <div className=" lg:px-12 px-4 py-12 mx-auto">
      <p className="text-2xl font-semibold mb-2 pt-24 text-white flex items-center gap-2">
        <FaTrophy className="text-yellow-400" />
        Tournament Hub
      </p>

      <p className="text-xs text-gray-500 mb-6">
        Ready to test your creativity and climb the ranks?
      </p>

      {/* <div className="text-white grid lg:grid-cols-3 grid-cols-1 w-full z-50">
     
        <Card />
      </div> */}
      <CardSwiper />

      {/* Tabs */}
      <div className="flex gap-6 items-center text-sm font-medium  pt-8  mx-auto  overflow-x-auto whitespace-nowrap">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 relative pb-1.5 transition ${
              activeTab === tab.id
                ? "text-white"
                : "text-white/40 hover:text-white/70"
            }`}
          >
            {tab.icon}
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-cyan-400 rounded" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="py-6  mx-auto ">{tabComponents[activeTab]}</div>
    </div>
  );
};

export default Tournament;
