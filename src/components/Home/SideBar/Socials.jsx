import React from "react";
import {
  FaLinkedin,
  FaSquareYoutube,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";

const Socials = () => {
  const socials = [
    {
      name: "Youtube",
      icon: <FaSquareYoutube />,
      count: "56K",
      bg: "bg-[#FF0000]", // YouTube red
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      count: "56K",
      bg: "bg-[#E1306C]", // Instagram pink/purple
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      count: "56K",
      bg: "bg-[#1DA1F2]", // Twitter blue
    },
    {
      name: "Linkedin",
      icon: <FaLinkedin />,
      count: "56K",
      bg: "bg-[#0077B5]", // LinkedIn blue
    },
  ];
  return (
    <div className="bg-white px-4 py-4 rounded-xl">
      <div className="grid grid-cols-2 gap-2 px-4 py-2">
        {socials.map((social, index) => (
          <SingleSocials key={index} {...social} />
        ))}
      </div>
    </div>
  );
};

export default Socials;

const SingleSocials = ({ icon, count, bg }) => {
  return (
    <div
      className={`${bg} flex items-center gap-2 px-1 py-1.5 rounded-md mb-2 text-lg justify-center cursor-pointer hover:scale-102 overflow-hidden duration-300`}
    >
      <span>{icon}</span>
      <span>{count}</span>
    </div>
  );
};
