import React from "react";
import Socials from "./SideBarComponents/Socials";
import PopularPost from "./SideBarComponents/PopularPost";
import NewsLetter from "./SideBarComponents/NewsLetter";
import MainTags from "./SideBarComponents/MainTags";

const SideBar = () => {
  return (
    <div className="pt-9 space-y-8 text-white">
      <Socials />
      <PopularPost />
      <NewsLetter />
      <MainTags />
    </div>
  );
};

export default SideBar;
