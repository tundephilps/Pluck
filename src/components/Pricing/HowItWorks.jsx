import React, { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import {
  FaCreditCard,
  FaUniversity,
  FaWallet,
  FaRegCreditCard,
} from "react-icons/fa";

const items = [
  {
    title: "Pay securely via",
    icon: <FaRegCreditCard className="text-blue-400 text-xl" />,
    content:
      "Choose your preferred secure payment method to complete your purchase.",
  },
  {
    title: "Debit/Credit Card",
    icon: <FaCreditCard className="text-blue-400 text-xl" />,
    content: "Enter your card details safely to process the payment instantly.",
  },
  {
    title: "Bank Transfer",
    icon: <FaUniversity className="text-blue-400 text-xl" />,
    content:
      "Use your bank app or internet banking to transfer funds directly.",
  },
  {
    title: "Wallet Balance",
    icon: <FaWallet className="text-blue-400 text-xl" />,
    content:
      "Pay quickly using your wallet balance without entering card details.",
  },
];

const HowItWorks = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleItem = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className=" to-black py-12  text-white">
      <div className=" mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">How It Works</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-[#1A1A1A] rounded-xl p-4 cursor-pointer transition hover:bg-[#2A2A2A]"
              onClick={() => toggleItem(index)}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  {item.icon}
                  <span className="text-lg font-semibold">{item.title}</span>
                </div>
                <MdKeyboardArrowDown
                  className={`text-2xl transform transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                />
              </div>
              {activeIndex === index && (
                <div className="mt-4 text-gray-300">{item.content}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
