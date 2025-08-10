import { useState } from "react";
import { FaBell, FaTrash, FaCheck, FaRegBell } from "react-icons/fa";
import { FaTrophy } from "react-icons/fa";

const Notifications = () => {
  const [filter, setFilter] = useState("Game Alert");

  return (
    <div className="min-h-screen py-32 text-white lg:px-12 px-4">
      <h1 className="text-2xl font-bold mb-6 inline-flex items-center gap-2">
        <FaBell className="text-yellow-500" /> Notifications
      </h1>

      <div className="flex justify-end items-center mb-4">
        {/* <div className="flex gap-4 text-sm">
          {[
            "ALL",
            "GAME ALERTS",
            "WALLETS",
            "WALLET UPDATES",
            "SYSTEM MESSAGES",
          ].map((item) => (
            <button
              key={item}
              className={`${
                filter === item
                  ? "border-b-2 border-white font-semibold"
                  : "text-gray-300"
              } pb-1`}
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div> */}

        <div className="flex gap-2">
          <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-3 py-1 rounded text-sm">
            <FaCheck /> Mark All as Read
          </button>
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-sm">
            <FaTrash /> Clear All
          </button>
        </div>
      </div>
      {/* Card */}
      <div className="bg-[#1f2937] hover:bg-[#1f2937]/30 text-white p-4 rounded-md border-l-4 border-yellow-400 shadow-md">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-2">
            <FaTrophy className="text-yellow-400 text-xl" />
            <span className="text-sm bg-yellow-400 text-black px-2 py-0.5 rounded">
              Unread
            </span>
          </div>
          <span className="text-sm text-gray-400">Today, 6:15 PM</span>
        </div>

        <div className="mt-3">
          <h3 className="text-lg font-semibold">New Game Alert!</h3>
          <p className="text-sm mt-1">
            "Rename Lagos Based on Current Vibes" is now LIVE!
          </p>
          <div className="text-sm text-gray-300 mt-2 flex flex-col gap-1">
            <span>
              <strong>#500</strong> - Potential payout:{" "}
              <strong>₦150,000</strong>
            </span>
            <span>Join before 4:00 PM today.</span>
          </div>
          <button className="mt-4 bg-[#3882f6] hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            View Game
          </button>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
