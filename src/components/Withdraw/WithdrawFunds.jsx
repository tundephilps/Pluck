import React, { useState } from "react";
import { BsBank } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa";
import { FaPhone, FaNairaSign, FaMobileScreenButton } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";

const WithdrawalComponent = () => {
  const [activeMethod, setActiveMethod] = useState("bank");
  return (
    <div>
      <div className="w-full  p-6 bg-[#111827]  rounded-md border-t-2 border-cyan-400 text-white">
        <h2 className="text-2xl font-semibold mb-4">Withdraw Funds</h2>

        <label className="text-sm text-white/80 mb-1 block" htmlFor="amount">
          Amount
        </label>

        <div className="flex items-center bg-slate-800 px-4 py-2 rounded-md">
          <FaNairaSign className="text-white/60 text-lg mr-2" />
          <input
            type="text"
            className="bg-transparent outline-none w-full text-white text-lg font-semibold placeholder-white/40"
          />
        </div>

        <div className=" text-white  space-y-4">
          <p className="text-sm text-white/70 pt-4">Choose withdrawal method</p>

          {/* BANK TRANSFER */}
          <div
            className={`border rounded-lg ${
              activeMethod === "bank" ? "border-cyan-400" : "border-gray-600"
            }`}
          >
            <button
              onClick={() => setActiveMethod("bank")}
              className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`h-4 w-4 rounded-full border ${
                    activeMethod === "bank"
                      ? "bg-cyan-400 border-cyan-400"
                      : "border-white/40"
                  }`}
                />
                <BsBank className="text-[#38bdf8]" />
                <span className="font-medium">
                  Bank Transfer (1–2 business days)
                </span>
              </div>
              <MdKeyboardArrowDown />
            </button>

            {activeMethod === "bank" && (
              <div className="px-4 pb-4 space-y-3">
                <div className="border border-[#374151] p-2 rounded-2xl">
                  <label className="text-sm text-white/70">Bank Name</label>
                  <input
                    type="text"
                    placeholder="Enter bank name"
                    className="w-full mt-1 p-2 rounded-md bg-transparent text-white placeholder-white/50 outline-none"
                  />
                </div>
                <div className="border border-[#374151] p-2 rounded-2xl">
                  <label className="text-sm text-white/70">
                    Account Number
                  </label>
                  <input
                    type="text"
                    placeholder="Enter account number"
                    className="w-full mt-1 p-2 rounded-md bg-transparent text-white placeholder-white/50 outline-none"
                  />
                </div>
                <div className="border border-[#374151] p-2 rounded-2xl">
                  <label className="text-sm text-white/70">Account Name</label>
                  <input
                    type="text"
                    placeholder="Enter account name"
                    className="w-full mt-1 p-2 rounded-md bg-transparent text-white placeholder-white/50 outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* MOBILE WALLET */}
          <div
            className={`border rounded-lg ${
              activeMethod === "wallet" ? "border-cyan-400" : "border-gray-600"
            }`}
          >
            <button
              onClick={() => setActiveMethod("wallet")}
              className="w-full flex items-center justify-between px-4 py-3 focus:outline-none"
            >
              <div className="flex items-center space-x-2">
                <div
                  className={`h-4 w-4 rounded-full border ${
                    activeMethod === "wallet"
                      ? "bg-cyan-400 border-cyan-400"
                      : "border-white/40"
                  }`}
                />
                <FaMobileScreenButton className="text-[#38bdf8]" />
                <span className="font-medium">
                  Mobile Wallet (e.g. Paga, Opay)
                </span>
              </div>
              <MdKeyboardArrowDown />
            </button>

            {activeMethod === "wallet" && (
              <div className="px-4 pb-4 space-y-3">
                <div className="border border-[#374151] p-2 rounded-2xl">
                  <label className="text-sm text-white/70">
                    Wallet Provider
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Opay"
                    className="w-full mt-1 p-2 rounded-md bg-transparent text-white placeholder-white/50 outline-none"
                  />
                </div>
                <div className="border border-[#374151] p-2 rounded-2xl">
                  <label className="text-sm text-white/70">Wallet Number</label>
                  <input
                    type="text"
                    placeholder="Enter wallet number"
                    className="w-full mt-1 p-2 rounded-md bg-transparent text-white placeholder-white/50 outline-none"
                  />
                </div>
                <div className="border border-[#374151] p-2 rounded-2xl">
                  <label className="text-sm text-white/70">Account Name</label>
                  <input
                    type="text"
                    placeholder="Enter account name"
                    className="w-full mt-1 p-2 rounded-md bg-transparent text-white placeholder-white/50 outline-none"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <button className="w-full bg-[#00f5ff] hover:bg-cyan-500 text-black font-semibold py-2 rounded-md transition-all">
            Submit withdraw request
          </button>
        </div>
        {/* Footer Note */}
        <p className="text-xs text-white/60 text-center pt-8">
          Withdrawals are processed within 24–48 hours.
          <br />
          <span className="text-green-400 font-bold">
            <FaNairaSign className="inline text-xs" />
            50
          </span>{" "}
          service fee may apply.
          <br />
          By submitting, you agree to our{" "}
          <span className="underline cursor-pointer">Withdrawal Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default WithdrawalComponent;
