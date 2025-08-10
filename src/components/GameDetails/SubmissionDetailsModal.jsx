import React from "react";

const SubmissionDetailsModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex  items-center justify-center bg-black bg-opacity-60">
      <div className="bg-[#0D0D0D] text-white p-6  max-w-6xl text-center rounded-xl shadow-lg animate-fadeIn">
        <div className="flex justify-between items-center mb-2">
          <p></p>
          <button onClick={onClose} className="text-white text-2xl">
            &times;
          </button>
        </div>

        <h2 className="text-xl font-semibold">📝 Question</h2>
        <p className="mb-4">“Rename Lagos based on its current vibe.”</p>

        <p className="mb-2">
          📅 <strong>Submitted On:</strong>
          <br />
          April 26, 2025 at 02:41 PM
        </p>
        <p className="mb-2">
          ✍️ <strong>Your Answer:</strong>
          <br />
          “Chaotic Hustletropolis”
        </p>
        <p className="mb-2">
          💎 <strong>Game Type:</strong>
          <br />
          Paid Challenge (₦500 seed — Payout: ₦10,000)
        </p>
        <p className="mb-2">
          ✅ <strong>Status:</strong> Submitted & Locked ✅
        </p>
        <p className="mb-2">
          🕐 <strong>Time Left to Game End:</strong> 03h 12m remaining
        </p>
        <p className="mb-4">
          📩 <strong>Result Notification:</strong>
          <br />
          You’ll receive an update via Notification & Email when results are
          out.
        </p>

        <div className="flex flex-col gap-2">
          <button
            onClick={onClose}
            className="bg-[#00DAE4] hover:bg-cyan-600 py-2 text-black rounded-md text-sm font-medium"
          >
            Back to Games
          </button>
          <button className="bg-[#1a1a1a] text-gray-300 hover:bg-gray-700 py-2 rounded-md text-sm">
            Go to Tournaments
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubmissionDetailsModal;
