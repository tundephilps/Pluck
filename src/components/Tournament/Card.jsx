import React from "react";
import { BsHourglassSplit } from "react-icons/bs";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdOutlineCreditScore } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";

import Leaf from "../../assets/Leaf.png";

import Smile from "../../assets/Smile.png";

import Paid from "../../assets/Paid.png";
import Person from "../../assets/Person.png";
import { FaPlus } from "react-icons/fa";

const Card = () => {
  const navigate = useNavigate();

  return (
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
        <div className="inline-flex gap-4">
          <div className="flex items-center gap-1">
            <img src={Paid} className="text-gray-400" />
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
              <img src={Person} className="text-gray-400" />
              <span>4/5 Left</span>
            </div>
          </div>
        </div>
      </div>
      {/* Action Button */}
      <div className="inline-flex gap-4 w-full">
        <Link to="/SelectedTournament" className="w-full">
          <button
            // onClick={handleGameDetails}
            className="bg-[#238636] inline-flex  justify-center items-center gap-2 hover:bg-cyan-700 cursor-pointer  text-white font-medium text-sm py-2 px-4 w-full rounded-md"
          >
            <FaPlus /> Join Tournament
          </button>{" "}
        </Link>
        <Link to="/MySubmissions" className="w-full">
          <button className="bg-[#21262c]  hover:bg-cyan-700 cursor-pointer  text-white font-medium text-sm py-2 px-4 w-full rounded-md">
            View Submission
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
