import React from "react";
import Socials from "./SideBar/Socials";
import PopularPost from "./SideBar/PopularPost";

const SideBar = () => {
  return (
    <div className="pt-9 space-y-8 text-white">
      <Socials />
      <PopularPost />
    </div>
  );
};

export default SideBar;
