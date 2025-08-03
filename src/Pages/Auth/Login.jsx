import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTrophy, FaHandshake, FaMoneyBillWave } from "react-icons/fa";
import Skill1 from "../../assets/Skill1.png";

import Skill2 from "../../assets/Skill2.png";
import Skill3 from "../../assets/Skill3.png";
import backgroundImage from "../../assets/Man.png";

import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[#031a1b] text-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <img src={Logo} className="mx-auto pb-4 h-14" />
          <h2 className="text-3xl font-bold mb-2 text-center">
            Welcome Back, Champion
          </h2>
          <p className="text-sm text-gray-400 mb-6 text-center">
            Login to continue your winning streak.
          </p>

          <button className="flex items-center text-white justify-center w-full bg-[#2663eb]  py-2 px-4 rounded-md mb-4 ">
            <FcGoogle className="text-xl mr-2" />
            Continue with Google
          </button>

          <p className="text-center text-gray-500 text-[8px] mb-4">
            OR LOG IN WITH EMAIL
          </p>

          <form className="space-y-4">
            <div>
              <label className="text-xs block mb-1">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <div className="inline-flex items-center justify-between w-full">
                <label className="text-xs block mb-1">Password</label>

                <Link
                  to="/ForgotPassword"
                  className="text-xs text-[#22d3ee] block mb-1"
                >
                  Forgot Password?
                </Link>
              </div>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <Link to="/Home">
              <button className="w-full mt-8 bg-[#06B6D4] hover:bg-cyan-700 text-white py-2 rounded-md">
                Login
              </button>
            </Link>
            <p className="text-xs text-center">
              Not a Plucker Yet?{" "}
              <Link to="/Signup" className="text-[#22d3ee]">
                Sign up Now..
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Right Panel */}
      <div
        className="hidden md:flex w-1/2 bg-cover bg-center relative items-center justify-center"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 h-full w-full justify-center  flex flex-col rounded-lg text-center text-white ">
          <h2 className="text-4xl font-bold mb-4">Where Skill Meets Reward</h2>
          <p className="text-xs mb-6 max-w-lg items-center mx-auto">
            Plucked is the ultimate test of knowledge and nerve. Compete in
            fair, transparent contests, answer questions, and win real cash
            prizes. Our commitment to integrity ensures a level playing field
            for all.
          </p>
          <div className="flex justify-around text-sm">
            <div className="flex flex-col  items-center">
              <img src={Skill1} />
              <p className=""> Win Big </p>
            </div>
            <div className="flex flex-col items-center">
              <img src={Skill2} /> Fair Play
            </div>
            <div className="flex flex-col items-center">
              <img src={Skill3} />
              Real Cash
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
