import React from "react";
import ProfileCard from "../components/Profile/ProfileCard";
import AccountSettings from "../components/Profile/AccountSettings";

const Profile = () => {
  return (
    <div className="py-32 lg:px-12 px-4">
      <div className="grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 col-span-3">
          <ProfileCard />
        </div>
        <div className="lg:col-span-1 col-span-3">
          <AccountSettings />
        </div>
      </div>
    </div>
  );
};

export default Profile;
