import Vector from "../../assets/Vector.png";
import { IoPlayCircleOutline } from "react-icons/io5";

import { MdSecurity, MdAttachMoney, MdGroup } from "react-icons/md";

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center text-white px-4">
      <p className="mb-2 text-[10px] text-cyan-400 tracking-wide uppercase bg-[#076669] p-1 rounded-full">
        Play to Earn
      </p>

      <h1 className="text-4xl md:text-6xl font-bold mb-2">
        FEED YOUR WALLET
      </h1>

      <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00F5FF] to-[#6B21A8] bg-clip-text text-transparent">
        WIN BIG DAILY
      </h2>

      <p className="text-sm md:text-base text-[#9CA3AF] max-w-xl mx-auto mb-8">
        Battle against the best minds in lightning-fast quiz tournaments. Enter
        the arena, prove your worth, and claim your share of massive prize
        pools.
      </p>

      <div className="flex gap-4 flex-wrap justify-center">
        <div className="bg-[#00F5FF] text-black cursor-pointer inline-flex items-center gap-2 font-semibold px-6 py-3 rounded-md hover:bg-cyan-300 transition">
          <img src={Vector} className="h-4" />{" "}
          <p className="text-xs uppercase">Start Your Journey</p>
        </div>
        <div className="border-2 inline-flex items-center gap-2 border-cyan-400 text-cyan-300 px-6 py-3 uppercase rounded-md hover:bg-cyan-800 transition">
          <IoPlayCircleOutline /> Watch Demo
        </div>
      </div>

      <div className="flex items-center justify-center space-x-8 text-sm text-[#9CA3AF] pt-8">
        <div className="flex items-center space-x-2">
          <MdSecurity className="w-4 h-4 text-[#00F5FF]" />
          <span>Secure Platform</span>
        </div>

        <div className="flex items-center space-x-2">
          <MdAttachMoney className="w-4 h-4 text-[#00F5FF]" />
          <span>Instant Payouts</span>
        </div>

        <div className="flex items-center space-x-2">
          <MdGroup className="w-4 h-4 text-[#00F5FF]" />
          <span>50K+ Players</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
