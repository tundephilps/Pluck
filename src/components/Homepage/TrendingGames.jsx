import React from "react";

import { BsCircleFill, BsHourglassSplit } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { FaArrowsDownToPeople, FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore, MdOutlineMessage } from "react-icons/md";
import { IoPeople, IoTimeOutline } from "react-icons/io5";
import Leaf from "../../assets/Leaf.png";
import Smile from "../../assets/Smile.png";
import { Link, useNavigate } from "react-router-dom";

const TrendingGames = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white grid lg:grid-cols-3 grid-cols-1 w-full z-50">
      {/* Card */}
      <div className="bg-gradient-to-br from-[#171b34] to-[#063b40] border-cyan-400 border rounded-lg overflow-hidden p-4 text-white shadow-md shadow-cyan-300">
        {/* Header */}
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-black px-3 py-0.5 text-xs rounded flex items-center gap-1">
            <span>LIVE</span>
            <span className="text-gray-400">•</span>
            <span>Tournament</span>
          </div>
        </div>

        {/* Challenge Icon */}
        <div className="mb-3">
          <img src={Leaf} />
        </div>

        {/* Challenge Title */}
        <h2 className="text-xl font-semibold mb-4 text-start">
          "Rename Lagos based on its current vibe"
        </h2>

        {/* Instructions */}
        <div className="flex gap-3 mb-6">
          <div className="mt-1">
            <img src={Smile} />
          </div>
          <div className="text-sm text-gray-400 text-start">
            Keep answers short, max 20 words. Creativity + humor gets higher
            ratings.
          </div>
        </div>

        {/* Challenge Details */}
        <div className="flex items-center justify-between text-xs text-[#cccccc] mb-4">
          <div>
            <div className="flex items-center gap-1">
              <FaMoneyBill1Wave className="text-gray-400" />
              <span>₦500</span>
              <span>•</span>
              <span>Paid</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <MdOutlineCreditScore className="text-gray-400" />
                <span>10,000</span>
              </div>

              <div className="flex items-center gap-1">
                <IoPeople className="text-gray-400" />
                <span>4/5 Left</span>
              </div>
            </div>
          </div>
          {/* Action Button */}

          <Link to="/GameDetails">
            <button className="bg-[#00DAE4] hover:bg-cyan-700 cursor-pointer  text-black font-medium text-sm py-2 px-4 rounded-md">
              Pluck in
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingGames;
