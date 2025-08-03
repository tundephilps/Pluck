import { MdSecurity, MdStar } from "react-icons/md";
import Know1 from "../../assets/Know1.png";

import Know2 from "../../assets/Know2.png";
import Know3 from "../../assets/Know3.png";

export default function KnowMoreSection() {
  const features = [
    {
      icon: <img src={Know1} className="h-12" />,
      title: "Epic Tournaments",
      description:
        "Enter the battlefield of minds with massive tournaments and pools. Rise through the ranks to become a legend.",
      learnMore: "Learn More",
    },
    {
      icon: <img src={Know2} className="h-12" />,
      title: "Lightning Rounds",
      description:
        "20-second intense battles test your reflexes and knowledge. Every second counts in your quest for victory.",
      learnMore: "Learn More",
    },
    {
      icon: <img src={Know3} className="h-12" />,
      title: "Elite Rewards",
      description:
        "Instant withdrawals fit for champions. Unlock elite bonuses ensure your victories are properly rewarded.",
      learnMore: "Learn More",
    },
  ];

  return (
    <div className=" pb-12 lg:px-12 px-4">
      <div className=" mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">
            Know More
            <div className="w-6 h-6 bg-cyan-400 rounded"></div>
          </h2>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#171b34] to-[#063b40] border-cyan-400 border rounded-lg overflow-hidden p-4 text-white shadow-md shadow-cyan-300"
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-start">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#9CA3AF] text-xs leading-relaxed mb-4 text-start">
                {feature.description}
              </p>

              {/* Learn More Link */}
              <button className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1">
                {feature.learnMore}
                <span className="text-lg">→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
