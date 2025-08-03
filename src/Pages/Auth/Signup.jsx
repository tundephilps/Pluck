import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaTrophy, FaHandshake, FaMoneyBillWave } from "react-icons/fa";
import Skill1 from "../../assets/Skill1.png";

import Skill2 from "../../assets/Skill2.png";
import Skill3 from "../../assets/Skill3.png";
import backgroundImage from "../../assets/Man.png";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Panel */}
      <div className="w-full md:w-1/2 bg-[#031a1b] text-white flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-bold mb-2 text-center">
            Create Your Account
          </h2>
          <p className="text-sm text-gray-400 mb-6 text-center">
            Let the game begin! Just a few details to get you started.
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
              <label className="text-xs block mb-1">Full name</label>
              <input
                type="text"
                placeholder="Enter full name"
                className="w-full px-3 py-2 rounded-md bg-[#111827] border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Username</label>
              <input
                type="text"
                placeholder="Enter username"
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Email address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="text-xs block mb-1">Create password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#06B6D4] hover:bg-cyan-700 text-white py-2 rounded-md"
            >
              Sign Up
            </button>
            <p className="text-xs text-center">
              Already have an Account?{" "}
              <Link to="/Login" className="text-[#22d3ee]">
                Login..
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
          <h2 className="text-4xl font-bold mb-4">
            Join the arena of champions
          </h2>
          <p className="text-xs mb-6 max-w-lg items-center mx-auto">
            Ready to improve your smarts? Signup for Plucked and compete for
            real cash prizes. Fair play is our promise, your victory is the
            goal.
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

export default SignupPage;
