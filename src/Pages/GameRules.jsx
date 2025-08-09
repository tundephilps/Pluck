import React from "react";
import {
  FaBan,
  FaClock,
  FaUserAlt,
  FaIdCard,
  FaBook,
  FaFlag,
} from "react-icons/fa";

const rules = [
  {
    icon: <FaBan className="text-red-400 text-lg" />,
    title: "No Cheating",
    description:
      "No cheating, exploiting, or use of automated tools is allowed. This includes any third-party software that provides an unfair advantage.",
  },
  {
    icon: <FaClock className="text-blue-400 text-lg" />,
    title: "Time Limits",
    description:
      "Answer submissions must be completed within the countdown timer for each game. Late submissions will not be counted.",
  },
  {
    icon: <FaUserAlt className="text-yellow-400 text-lg" />,
    title: "One Account Per Player",
    description:
      "One player = one account. Creating multiple accounts to gain an advantage may lead to disqualification and forfeiture of winnings.",
  },
  {
    icon: <FaIdCard className="text-green-400 text-lg" />,
    title: "Identity Verification",
    description:
      "Pluck may require ID verification for large winnings before payouts. This is to ensure security and prevent fraud.",
  },
  {
    icon: <FaBook className="text-purple-400 text-lg" />,
    title: "Tournament Specific Rules",
    description:
      "Each tournament may have additional specific rules. Please read the Tournament Notes carefully before joining to understand all requirements.",
  },
  {
    icon: <FaFlag className="text-orange-400 text-lg" />,
    title: "Reporting Unfair Play",
    description:
      "If you notice unfair behavior, report it immediately. We are committed to maintaining a fair and competitive environment.",
  },
];

export default function GameRules() {
  return (
    <div className="min-h-screen  text-white px-6 py-32 md:px-12">
      <div className="max-w-5xl mx-auto bg-white/20 p-6 rounded-lg">
        <h1 className="text-2xl font-semibold flex items-center justify-center gap-2 mb-4 w-full mx-auto text-center">
          🏁 Game Rules & Fair Play
        </h1>
        <p className="text-sm text-gray-300 mb-6 text-center">
          At Pluck, we believe in fair competition. These rules apply to all
          players across all games and tournaments to ensure a level playing
          field for everyone.
        </p>

        <div className="space-y-4">
          {rules.map((rule, idx) => (
            <div
              key={idx}
              className="bg-[#123844] rounded-lg px-4 py-3 flex items-start gap-3 text-sm"
            >
              <div>{rule.icon}</div>
              <div>
                <h3 className="font-semibold mb-1">{rule.title}</h3>
                <p className="text-gray-200">{rule.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
