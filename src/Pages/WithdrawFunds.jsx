import React from "react";

import { FaInfoCircle } from "react-icons/fa";
import WithdrawalComponent from "../components/Withdraw/WithdrawFunds";
import WalletHistory from "../components/Withdraw/WalletHistory";
import { Link } from "react-router-dom";

const WithdrawFunds = () => {
  return (
    <div className="grid lg:grid-cols-3 lg:px-32 px-4 py-28 gap-4  w-full">
      <div className="space-y-8 lg:col-span-2">
        <WithdrawalComponent />
        <WalletHistory />
      </div>
      <div>
        <div className="w-full p-6 rounded-xl text-white bg-gradient-to-br from-sky-400 to-purple-400 shadow-lg">
          <h2 className="text-sm text-black mb-2">Current Balance</h2>
          <div className="text-4xl text-black font-bold mb-6">₦650.00</div>
          <div className="flex w-full mx-auto items-center justify-center">
            <Link to="/TopUp">
              <button className="bg-white/30 text-white/70   font-semibold py-2 px-8 rounded transition-colors duration-200 mb-6">
                Top up wallet
              </button>
            </Link>
          </div>

          <div className="flex items-start text-sm text-black mb-4 pt-20">
            <FaInfoCircle className="mr-2 mt-1" />
            You must maintain a minimum balance of ₦100 to join paid games.
          </div>
          <Link to="/WithdrawFunds">
            <div className=" bg-[#00f5ff] hover:bg-cyan-400 text-center font-semibold py-2 px-4 rounded w-full cursor-pointer">
              Withdraw Funds
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WithdrawFunds;
