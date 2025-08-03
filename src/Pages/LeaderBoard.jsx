import React from "react";
import { FaTrophy, FaGamepad } from "react-icons/fa";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import {
  MdGames,
  MdCurrencyBitcoin,
  MdTheaterComedy,
  MdHome,
  MdShuffle,
  MdCalendarToday,
  MdTrendingUp,
  MdMic,
  MdKeyboardArrowDown,
} from "react-icons/md";
import { TbMedal } from "react-icons/tb";
import LeaderboardTable from "../components/Leaderboard/LeaderBoardTable";

const LeaderBoard = () => {
  return (
    <div>
      <div className=" lg:px-12 px-4 py-12 mx-auto">
        {/* Title & Description */}
        <h2 className="text-2xl font-semibold mb-2 pt-24 text-white">
          Leaderboard
        </h2>
        <p className="text-sm text-gray-300 flex items-center gap-2 mb-1">
          <FaTrophy className="text-yellow-400" />
          Compete. Climb. Conquer.
        </p>
        <p className="text-xs text-gray-500 mb-6">
          Top Pluckers are crowned every Monday at 12:00 AM WAT.
        </p>

        {/* Filters */}
        <div className="mx-auto pb-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1 mb-4">
            {[
              {
                label: "All Games",
                icon: <MdGames className="w-4 h-4" />,
                active: true,
              },
              {
                label: "Crypto",
                icon: <MdCurrencyBitcoin className="w-4 h-4" />,
              },
              {
                label: "Culture",
                icon: <MdTheaterComedy className="w-4 h-4" />,
              },
              { label: "Lifestyle", icon: <MdHome className="w-4 h-4" /> },
              { label: "Random", icon: <MdShuffle className="w-4 h-4" /> },
            ].map(({ label, icon, active }) => (
              <button
                key={label}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  active
                    ? "bg-cyan-400 text-black"
                    : "text-white hover:bg-teal-600"
                }`}
              >
                {icon}
                {label}
              </button>
            ))}
          </div>

          {/* Dropdown Filters */}
          <div className="flex flex-wrap gap-2">
            {[
              {
                label: "Select Week",
                icon: <MdCalendarToday className="w-4 h-4" />,
              },
              { label: "Month", icon: <MdCalendarToday className="w-4 h-4" /> },
              { label: "Season", icon: <MdTrendingUp className="w-4 h-4" /> },
              { label: "Top 100", icon: <TbMedal className="w-4 h-4" /> },
            ].map(({ label, icon }) => (
              <button
                key={label}
                className="flex items-center gap-2 px-4 py-2 rounded-full text-sm bg-white/20 text-white hover:bg-slate-600 transition-colors"
              >
                {icon}
                {label}
                <MdKeyboardArrowDown className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
        <LeaderboardTable />
      </div>
    </div>
  );
};

export default LeaderBoard;
