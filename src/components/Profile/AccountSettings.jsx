import React from "react";
import { FaTrash } from "react-icons/fa";
import { MdVerified } from "react-icons/md";

export default function AccountSettings() {
  return (
    <div className=" space-y-6">
      <div className="p-4 rounded flex justify-between items-center bg-gradient-to-r from-[#2563EB] to-[#22C55E]">
        <div>
          <h2 className="text-lg font-bold text-white">Upgrade to Verified!</h2>
          <p className="text-xs text-white max-w-sm">
            Unlock exclusive tournaments, priority support, and a shiny verified
            badge next to your name.
          </p>
        </div>
        <button className="bg-[#00f5ff] text-black text-xs px-4 py-2 rounded-md font-semibold">
          Upgrade Now
        </button>
      </div>

      <div className="bg-[#1f2937] p-6 rounded-lg shadow-md w-full space-y-6">
        {/* Section Title */}
        <h2 className="text-white text-xl font-semibold">Account Settings</h2>

        {/* Email */}
        <div className="flex items-center justify-between border-b border-[#374151] pb-4">
          <div>
            <p className="text-sm text-gray-400">Email address</p>
            <p className="text-white text-sm mt-1">naijasharpguy@email.com</p>
          </div>
          <button className="text-[#3B82F6] text-sm font-medium hover:underline">
            Change
          </button>
        </div>

        {/* Phone */}
        <div className="flex items-center justify-between border-b border-[#374151] pb-4">
          <div>
            <p className="text-sm text-gray-400">Phone Number</p>
            <p className="text-white text-sm mt-1">+234 812 345 6789</p>
          </div>
          <button className="text-[#3B82F6] text-sm font-medium hover:underline">
            Change
          </button>
        </div>

        {/* Password */}
        <div className="space-y-2">
          <p className="text-white text-sm font-medium">Password</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="password"
              placeholder="New password"
              className="bg-[#1F2937] text-sm text-white p-2 rounded border border-[#374151] outline-none placeholder-gray-500"
            />
            <input
              type="password"
              placeholder="Confirm password"
              className="bg-[#1F2937] text-sm text-white p-2 rounded border border-[#374151] outline-none placeholder-gray-500"
            />
          </div>
          <div className="flex items-center justify-between mt-2">
            <a href="#" className="text-[#3B82F6] text-sm hover:underline">
              Forgot your password?
            </a>
            <button className="bg-[#06B6D4] hover:bg-[#0891B2] text-black text-xs font-medium px-4 py-2 rounded">
              Save Password
            </button>
          </div>
        </div>

        {/* Delete Account */}
        <div className="pt-4 border-t border-[#374151]">
          <p className="text-red-400 text-sm font-semibold">Delete Account</p>
          <p className="text-gray-400 text-xs mt-1">
            Once you delete your account, there is no going back. Please be
            certain.
          </p>
          <button className="mt-3 inline-flex gap-2 items-center text-xs bg-red-600 hover:bg-red-700 text-white text-sm font-medium px-4 py-2 rounded">
            <FaTrash /> Delete My Account
          </button>
        </div>
      </div>
    </div>
  );
}
