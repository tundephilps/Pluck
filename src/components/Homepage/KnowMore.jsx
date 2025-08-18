import { motion } from "framer-motion";
import Know1 from "../../assets/Know1.png";
import Know2 from "../../assets/Know2.png";
import Know3 from "../../assets/Know3.png";

export default function KnowMoreSection() {
  const features = [
    {
      icon: <img src={Know1} className="h-12" alt="Epic Tournaments" />,
      title: "Tournaments",
      description:
        "Join tournaments with low entry and big rewards. We celebrate not just winners but also Pluckers who bring the most humor to the game.",
      learnMore: "Learn More",
    },
    {
      icon: <img src={Know2} className="h-12" alt="Lightning Rounds" />,
      title: "VIP",
      description:
        "Become a Very Important Plucker. unlock tournaments, unlimited gameplay, verified status, custom support, and first access to upcoming rewards.",
      learnMore: "Unlock Access",
    },
    {
      icon: <img src={Know3} className="h-12" alt="Elite Rewards" />,
      title: "Plucked",
      description:
        "One out of every five Pluckers is randomly selected by our encrypted software, with no human involvement, ensuring a completely fair and transparent game that continues automatically with fresh rounds.",
      learnMore: "Pluck in",
    },
  ];

  return (
    <div className="pb-12 lg:px-12 px-4">
      <div className="mx-auto">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-white text-2xl font-bold flex items-center gap-2">
            Know More
            <div className="w-6 h-6 bg-cyan-400 rounded"></div>
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-[#171b34] to-[#063b40] border-cyan-400 border rounded-lg overflow-hidden p-4 text-white shadow-md shadow-cyan-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              {/* Icon */}
              <motion.div
                className="mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {feature.icon}
              </motion.div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-3 text-start">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#9CA3AF] text-xs leading-relaxed mb-4 text-start">
                {feature.description}
              </p>

              {/* Learn More Button */}
              <motion.button
                whileHover={{ x: 5 }}
                transition={{ type: "tween", duration: 0.3 }}
                className="text-cyan-400 text-sm font-medium hover:text-cyan-300 transition-colors duration-200 flex items-center gap-1"
              >
                {feature.learnMore}
                <span className="text-lg">→</span>
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
