import { motion } from "framer-motion";
import Vector from "../../assets/Vector.png";
import { IoPlayCircleOutline } from "react-icons/io5";
import { MdSecurity, MdAttachMoney, MdGroup } from "react-icons/md";

const Hero = () => {
  return (
    <motion.div
      className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <motion.p
        className="mb-2 text-[10px] text-cyan-400 tracking-wide uppercase bg-[#076669] p-1 rounded-full"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        Play to Earn
      </motion.p>

      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-2"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        FEED YOUR WALLET
      </motion.h1>

      <motion.h2
        className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] to-[#6B21A8] bg-clip-text text-transparent"
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        WIN BIG DAILY
      </motion.h2>

      <motion.p
        className="text-sm md:text-base text-[#9CA3AF] max-w-xl mx-auto mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Battle against the best minds in lightning-fast quiz tournaments. Enter
        the arena, prove your worth, and claim your share of massive prize
        pools.
      </motion.p>

      <motion.div
        className="flex gap-4 flex-wrap justify-center"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <motion.div
          className="bg-[#00F5FF] text-black cursor-pointer inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-md hover:bg-cyan-300 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <img src={Vector} className="h-4" alt="vector" />
          <p className="text-xs uppercase">Start Your Journey</p>
        </motion.div>

        <motion.div
          className="border-2 inline-flex items-center gap-2 border-cyan-400 text-cyan-300 px-6 py-3 uppercase rounded-md hover:bg-cyan-800 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <IoPlayCircleOutline />
          Watch Demo
        </motion.div>
      </motion.div>

      <motion.div
        className="flex items-center justify-center space-x-8 text-sm text-[#9CA3AF] pt-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
        >
          <MdSecurity className="w-4 h-4 text-[#00F5FF]" />
          <span>Secure Platform</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
        >
          <MdAttachMoney className="w-4 h-4 text-[#00F5FF]" />
          <span>Instant Payouts</span>
        </motion.div>

        <motion.div
          className="flex items-center space-x-2"
          whileHover={{ scale: 1.1 }}
        >
          <MdGroup className="w-4 h-4 text-[#00F5FF]" />
          <span>50K+ Players</span>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
