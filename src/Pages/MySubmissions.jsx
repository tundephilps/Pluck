import React from "react";
import SubmissionsCard from "../components/GameDetails/SubmissionsCard";

const MySubmissions = () => {
  return (
    <div>
      <div className="min-h-screen bg-cover bg-center text-white relative z-0">
        <div className=" space-y-6  h-full w-full z-20 py-20">
          <div className="w-full  pt-40 lg:px-12 px-6 text-white">
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              {/* Left Side */}
              <div>
                <h1 className="text-2xl font-semibold">
                  <span className="text-white">📝 My Submissions</span>{" "}
                </h1>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 grid-cols-1 pt-6 gap-4">
              <SubmissionsCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySubmissions;
