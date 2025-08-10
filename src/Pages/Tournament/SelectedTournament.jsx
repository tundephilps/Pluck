import { useState } from "react";
import { FaTrophy, FaMoneyBillWave, FaClock } from "react-icons/fa";
// import Dog1 from "../../assets/Dog1.png";

// import Paint1 from "../../assets/Paint1.png";

// import Paint2 from "../../assets/Paint2.png";
// import Dog2 from "../../assets/Dog2.png";
import { Link } from "react-router-dom";

export default function SelectedTournament() {
  const [agree, setAgree] = useState(false);

  return (
    <div className="min-h-screen bg-black py-12 text-white flex flex-col items-center p-6 relative">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2 pt-12">
          <FaTrophy className="text-yellow-400" /> Tournament Hub
        </h1>
      </div>

      {/* <img
        src={Dog1}
        className="bottom-0 absolute left-0 h-[500px] z-10"
        alt=""
      />

      <img
        src={Paint1}
        className="bottom-0 absolute left-0 h-[900px] -z-0"
        alt=""
      />

      <img
        src={Dog2}
        className="bottom-0 absolute right-0 h-[500px] z-10"
        alt=""
      />
      <img
        src={Paint2}
        className="bottom-0 absolute right-0 h-[900px] -z-0"
        alt=""
      /> */}
      {/* Tournament Card */}
      <div className="bg-[#0D0D0D] border-4 border-[#00dae4] rounded-lg p-6 w-full max-w-3xl shadow-lg relative z-30">
        {/* Tournament Title */}
        <div className="mb-4 text-center">
          <h2 className="text-lg font-semibold">
            🎮 Tournament: Street Slang Showdown — Gen Z Edition
          </h2>
        </div>

        {/* Game Info */}
        <div className="mb-6 text-center">
          <h3 className="text-md font-bold mb-2">
            💡 Game: Street Slang Showdown
          </h3>
          <div className="space-y-2 text-sm text-center text-[#988c8c]">
            <div className="flex items-center justify-center gap-2 text-center">
              <FaMoneyBillWave className="text-green-400" /> Entry Fee: ₦300
            </div>
            <div className="flex items-center justify-center gap-2">
              🥇 Prize Pool: ₦600
            </div>
            <div className="flex items-center justify-center gap-2">
              <FaClock className="text-purple-400" /> Ends In: 1 Day 19 Hours
            </div>
          </div>
        </div>

        {/* Rules Note */}
        <p className="text-xs text-gray-400 mb-6 text-center">
          📋 Pluck's Note: "Offensive entries will be disqualified. Be
          creative!"
        </p>

        {/* Upload or Text Input */}
        <div className="mb-2">
          <textarea
            className="w-full p-3 rounded-md bg-black border border-gray-700 text-sm"
            placeholder="Type your answer here..."
            rows="4"
          ></textarea>
        </div>

        {/* Agreement Checkbox */}

        <p className="text-xs text-yellow-400 mb-4">
          ⚠️ Only one submission allowed. Maximum: 20 words. Once submitted, no
          edits.
        </p>

        <div className="flex items-center  justify-center mx-auto text-center gap-4 mb-6">
          <div className="flex items-center  text-xs">
            <span>✨ Confirm the Payment</span>
          </div>

          {/* Wallet Info */}
          <div className="flex items-center text-sm ">
            <div>💳 Your Wallet Balance: ₦650</div>
          </div>
        </div>
        {/* Confirm Button */}

        <div className="inline-flex items-center gap-8 w-full">
          <Link className="w-full" to="/SuccessfulSubmission">
            <button className="w-full py-2 rounded-md text-black bg-[#00DAE4] hover:bg-cyan-700 font-semibold ">
              ✅ Confirm & Submit
            </button>{" "}
          </Link>

          <button className="w-full py-2 rounded-md text-white bg-transparent border hover:bg-cyan-700 font-semibold ">
            ❌ Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
