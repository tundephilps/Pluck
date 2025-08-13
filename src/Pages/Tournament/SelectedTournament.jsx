import { useState } from "react";
import { FaTrophy, FaMoneyBillWave, FaClock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion"; // for animations

export default function SelectedTournament() {
  const [currentCard, setCurrentCard] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (currentCard < 5) {
      setCurrentCard((prev) => prev + 1);
    } else {
      navigate("/SuccessfulSubmission");
    }
  };

  return (
    <div className="min-h-[140vh] bg-black py-12 text-white flex flex-col items-center p-6 relative overflow-hidden">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold flex items-center justify-center gap-2 pt-12">
          <FaTrophy className="text-yellow-400" /> Tournament Hub
        </h1>
        <p className="text-sm mt-2 text-gray-400">Card {currentCard} of 5</p>
      </div>

      {/* AnimatePresence handles card transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentCard}
          initial={{ x: 300, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -300, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#0D0D0D] border-4 border-[#00dae4] mt-32 rounded-lg p-6 w-full max-w-3xl shadow-lg absolute"
        >
          {/* Tournament Title */}
          <div className="mb-4 text-center">
            <h2 className="text-lg font-semibold">
              🎮 Tournament {currentCard}: Street Slang Showdown — Gen Z Edition
            </h2>
          </div>

          {/* Game Info */}
          <div className="mb-6 text-center">
            <h3 className="text-md font-bold mb-2">
              💡 Game: Street Slang Showdown
            </h3>
            <div className="space-y-2 text-sm text-[#988c8c]">
              <div className="flex items-center justify-center gap-2">
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

          {/* Rules Warning */}
          <p className="text-xs text-yellow-400 mb-4">
            ⚠️ Only one submission allowed. Maximum: 20 words. Once submitted,
            no edits.
          </p>

          {/* Payment Confirmation */}
          <div className="flex items-center justify-center mx-auto text-center gap-4 mb-6">
            <div className="flex items-center text-xs">
              <span>✨ Confirm the Payment</span>
            </div>
            <div className="flex items-center text-sm">
              <div>💳 Your Wallet Balance: ₦650</div>
            </div>
          </div>

          {/* Buttons */}
          <div className="inline-flex items-center gap-8 w-full">
            <button
              className="w-full py-2 rounded-md text-black bg-[#00DAE4] hover:bg-cyan-700 font-semibold"
              onClick={handleSubmit}
            >
              ✅ Confirm & Submit
            </button>
            <button className="w-full py-2 rounded-md text-white bg-transparent border hover:bg-cyan-700 font-semibold">
              ❌ Cancel
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
