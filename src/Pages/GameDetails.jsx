import React, { useState } from "react";
import { FaTrophy, FaUsers, FaClock } from "react-icons/fa";
import Cross from "../assets/Cross.png";
import MoreLikeThis from "../components/GameDetails/MoreLikeThis";
import AnswerInputModal from "../components/GameDetails/AnswerInputModal";

const GameDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="py-28">
      <section className=" p-4 md:p-12  text-white">
        <h2 className="text-lg font-semibold mb-4  items-center gap-2 pb-8">
          <span className="inline-flex gap-4 text-3xl">
            About Game <img src={Cross} />{" "}
          </span>
        </h2>

        <div className="border border-cyan-500 rounded-xl p-6 bg-gradient-to-br from-[#0a0f33] to-[#000b12] relative">
          {/* Top label */}
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-cyan-500 text-xs text-black font-semibold px-2 py-1 rounded-md">
              LIVE
            </span>
            <span className="text-gray-300 font-semibold">Tournament</span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold mb-2">
            "Rename Lagos based on its current vibe"
          </h3>

          {/* Subtitle */}
          <p className="text-sm text-gray-400 mb-4">
            5 consecutive questions. Creativity + humor gets higher ratings.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-300 mb-6">
            <div className="flex items-center gap-2">
              <FaTrophy className="text-cyan-400" />
              <span>6000 • Paid</span>
            </div>
            <div className="flex items-center gap-2">
              <FaUsers className="text-cyan-400" />
              <span>10,000+</span>
            </div>
            <div className="flex items-center gap-2">
              <FaClock className="text-cyan-400" />
              <span>02h 45m</span>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-cyan-400 hover:bg-cyan-300 text-black px-6 py-2 rounded-full font-medium flex items-center gap-2"
          >
            Submit Your Answer <span className="text-lg">➜</span>
          </button>
          {isOpen && <AnswerInputModal setIsOpen={setIsOpen} />}
        </div>
      </section>

      <MoreLikeThis />
    </div>
  );
};

export default GameDetails;
