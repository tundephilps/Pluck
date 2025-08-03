import {
  MdLocalFireDepartment,
  MdTrendingUp,
  MdStars,
  MdRocket,
  MdSpeed,
  MdVideogameAsset,
  MdFlashOn,
  MdTrendingDown,
} from "react-icons/md";

export default function LeaderboardTable() {
  const leaderboardData = [
    {
      rank: 1,
      player: "@ItsaJisharphoyJuju",
      level: 3,
      totalWinnings: "₦62,500",
      streak: "8 Wins",
      streakIcon: <MdLocalFireDepartment className="w-4 h-4 text-orange-400" />,
      statusBadge: "Gold Champion",
      badgeIcon: "🏆",
      badgeColor: "text-yellow-400",
    },
    {
      rank: 2,
      player: "@BaddestPlucker",
      level: 2,
      totalWinnings: "₦50,000",
      streak: "5 Wins",
      streakIcon: <MdLocalFireDepartment className="w-4 h-4 text-orange-400" />,
      statusBadge: "Silver Contender",
      badgeIcon: "🥈",
      badgeColor: "text-gray-300",
    },
    {
      rank: 3,
      player: "@QuizBabe",
      level: 3,
      totalWinnings: "₦37,500",
      streak: "4 Wins",
      streakIcon: <MdLocalFireDepartment className="w-4 h-4 text-orange-400" />,
      statusBadge: "Bronze Winner",
      badgeIcon: "🥉",
      badgeColor: "text-orange-400",
    },
    {
      rank: 4,
      player: "@GidiGuru",
      level: 2,
      totalWinnings: "₦31,000",
      streak: "3 Wins",
      streakIcon: null,
      statusBadge: "Consistent Climber",
      badgeIcon: <MdTrendingUp className="w-4 h-4" />,
      badgeColor: "text-blue-400",
    },
    {
      rank: 5,
      player: "@StreetWiz",
      level: 1,
      totalWinnings: "₦25,000",
      streak: "2 Wins",
      streakIcon: null,
      statusBadge: "Rookie",
      badgeIcon: <MdStars className="w-4 h-4" />,
      badgeColor: "text-green-400",
    },
    {
      rank: 6,
      player: "@PluckQueen",
      level: 2,
      totalWinnings: "₦20,500",
      streak: "2 Wins",
      streakIcon: null,
      statusBadge: "Steady Player",
      badgeIcon: <MdTrendingUp className="w-4 h-4" />,
      badgeColor: "text-blue-400",
    },
    {
      rank: 7,
      player: "@TacticMaster",
      level: 3,
      totalWinnings: "₦18,000",
      streak: "1 Win",
      streakIcon: null,
      statusBadge: "New Entry",
      badgeIcon: <MdVideogameAsset className="w-4 h-4" />,
      badgeColor: "text-gray-400",
    },
    {
      rank: 8,
      player: "@WahalaNoDay",
      level: 1,
      totalWinnings: "₦16,500",
      streak: "0 Wins",
      streakIcon: null,
      statusBadge: "Needs Boost",
      badgeIcon: <MdRocket className="w-4 h-4" />,
      badgeColor: "text-red-400",
    },
    {
      rank: 9,
      player: "@SharpShooter",
      level: 1,
      totalWinnings: "₦12,000",
      streak: "1 Win",
      streakIcon: null,
      statusBadge: "Rising Talent",
      badgeIcon: <MdFlashOn className="w-4 h-4" />,
      badgeColor: "text-purple-400",
    },
  ];

  const getLevelColor = (level) => {
    switch (level) {
      case 1:
        return "bg-green-600 text-white";
      case 2:
        return "bg-blue-600 text-white";
      case 3:
        return "bg-purple-600 text-white";
      default:
        return "bg-gray-600 text-white";
    }
  };

  return (
    <div className="bg-[#111827] rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full text-white text-sm">
          <thead className="bg-[#202937] text-left font-semibold">
            <tr>
              <th className="px-6 py-4 text-center">#</th>
              <th className="px-6 py-4">Player</th>
              <th className="px-6 py-4">Level</th>
              <th className="px-6 py-4">Total Winnings</th>
              <th className="px-6 py-4">Streak</th>
              <th className="px-6 py-4">Status Badge</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700 text-xs">
            {leaderboardData.map((player) => (
              <tr
                key={player.rank}
                className="hover:bg-slate-700 transition-colors"
              >
                {/* Rank */}
                <td className="px-6 py-4 text-center text-gray-300 font-medium">
                  {player.rank}
                </td>

                {/* Player */}
                <td className="px-6 py-4 font-medium">{player.player}</td>

                {/* Level */}
                <td className="px-2 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-[10px] font-medium ${getLevelColor(
                      player.level
                    )}`}
                  >
                    Level {player.level}
                  </span>
                </td>

                {/* Total Winnings */}
                <td className="px-6 py-4 font-medium">
                  {player.totalWinnings}
                </td>

                {/* Streak */}
                <td className="px-6 py-4 flex items-center gap-2">
                  <span className="text-gray-300">{player.streak}</span>
                  {player.streakIcon}
                </td>

                {/* Status Badge */}
                <td>
                  <div
                    className={`inline-flex whitespace-nowrap items-center gap-2 ${player.badgeColor}`}
                  >
                    {typeof player.badgeIcon === "string" ? (
                      <span className="text-lg">{player.badgeIcon}</span>
                    ) : (
                      player.badgeIcon
                    )}
                    <span className="text-sm font-medium">
                      {player.statusBadge}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
