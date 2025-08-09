import React, { useState } from "react";
import { FaNairaSign } from "react-icons/fa6";
import { FaCreditCard, FaMobileScreenButton } from "react-icons/fa6";

import { BsBank } from "react-icons/bs";

const TopUpComponent = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState("bank");

  const amounts = [1000, 2500, 5000, 10000];

  const methods = [
    { key: "bank", label: "Bank Transfer", icon: <BsBank /> },
    { key: "card", label: "Debit Card", icon: <FaCreditCard /> },
    { key: "ussd", label: "USSD", icon: <FaMobileScreenButton /> },
    {
      key: "paystack",
      label: "Paystack / Flutterwave",
      icon: <FaCreditCard />,
    },
  ];

  return (
    <div className="w-full  p-6 bg-[#111827]  rounded-md border-t-2 border-cyan-400 text-white">
      <h2 className="text-2xl font-semibold mb-4">Top Up Amount Funds</h2>

      <label className="text-sm text-white/80 mb-1 block" htmlFor="amount">
        Enter Amount (Minimum N500)
      </label>

      <div className="flex items-center bg-slate-800 px-4 py-2 rounded-md">
        <FaNairaSign className="text-white/60 text-lg mr-2" />
        <input
          type="text"
          className="bg-transparent outline-none w-full text-white text-lg font-semibold placeholder-white/40"
        />
      </div>

      {/* Selectors */}
      <div className=" space-y-5 pt-8">
        {/* Amount Buttons */}
        <div className="grid grid-cols-4 gap-2 justify-center">
          {amounts.map((amt) => (
            <button
              key={amt}
              onClick={() => setSelectedAmount(amt)}
              className={`px-4 py-2 rounded-md text-sm font-semibold border ${
                selectedAmount === amt
                  ? "bg-cyan-400 text-black border-cyan-400"
                  : "border-gray-600 bg-[#374151] text-white/80 hover:bg-white/10"
              }`}
            >
              + <FaNairaSign className="inline text-xs" />
              {amt.toLocaleString()}
            </button>
          ))}
        </div>

        {/* Payment Methods */}
        <div>
          <p className="text-sm text-white/70 mb-2">Select Payment Method</p>
          <div className="grid grid-cols-2 gap-3">
            {methods.map(({ key, label, icon }) => (
              <button
                key={key}
                onClick={() => setSelectedMethod(key)}
                className={`flex items-center gap-2 border px-4 py-3 rounded-md text-sm font-medium justify-center ${
                  selectedMethod === key
                    ? "border-cyan-400 bg-white/10"
                    : "border-gray-600 bg-transparent hover:bg-white/5 text-white/70"
                }`}
              >
                <div
                  className={`h-4 w-4 rounded-full border ${
                    selectedMethod === key
                      ? "bg-cyan-400 border-cyan-400"
                      : "border-white/40"
                  }`}
                />
                {icon}
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button className="w-full bg-[#00f5ff] hover:bg-cyan-500 text-black font-semibold py-3 rounded-md transition-all">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default TopUpComponent;
