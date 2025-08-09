import React from "react";
import { FaRegStar, FaUserCircle } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { RiCalendar2Line, RiMedal2Fill } from "react-icons/ri";

export default function ProfileCard() {
  return (
    <div className="w-full">
      <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg w-full">
        <div className="flex flex-col items-center space-x-4">
          <div className="border-4 border-[#22c55e] rounded-full ">
            <FaUserCircle className="text-6xl text-white" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white pt-2">
              @NaijaSharpGuy
            </h2>
            <p className="text-sm text-gray-400 text-center">Level: 1</p>
          </div>
        </div>
        <button className="mt-4 w-full bg-[#00f5ff] hover:bg-cyan-700 py-2 rounded-xl text-white font-semibold">
          Edit Profile
        </button>
      </div>

      <div className="mt-6">
        <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-white pb-4">Recent Activity</h3>
          <p className="text-[#d1d5d8] inline-flex justify-between w-full text-xs">
            Total Games Played: <span className="font-semibold">23</span>
          </p>
          <p className="text-[#d1d5d8] inline-flex justify-between w-full text-xs">
            Total Wins: <span className="font-semibold">14</span>
          </p>
          <p className="text-[#d1d5d8] inline-flex justify-between w-full text-xs">
            Total Winnings:{" "}
            <span className="font-semibold text-cyan-400 text-lg">
              ₦140,000
            </span>
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg">
          <h3 className="font-bold text-lg text-white">Achievements</h3>
          <div className="mt-2 bg-gray-700 p-2 px-4 rounded flex items-center gap-2">
            <FaRegStar className="text-yellow-500 text-xl" />
            <div>
              <p className="text-white">Beginner Plucker - </p>
              <span className="text-xs text-[#9ca3af]">
                Awarded for playing your first game
              </span>
            </div>
          </div>
          <div className="mt-2 bg-gray-700 p-2 px-4 rounded flex items-center gap-2">
            <RiMedal2Fill className="text-purple-500 text-xl" />
            <div>
              <p className="text-white">Top 10% Winner - </p>
              <span className="text-xs text-[#9ca3af]">
                Finished in the top 10%
              </span>
            </div>
          </div>
          <div className="mt-2 bg-gray-700 p-2 px-4 rounded flex items-center gap-2">
            <RiCalendar2Line className="text-green-500 text-xl" />
            <div>
              <p className="text-white">5 Games in a week </p>
              <span className="text-xs text-[#9ca3af]">
                Finished in the top 10%
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
