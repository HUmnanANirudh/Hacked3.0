import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const TeamCards = ({ name, img }) => {
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-full flex flex-col justify-center items-center">
        {!loaded && (
          <div
            className="w-52 h-52 bg-gray-200 rounded-full animate-pulse"
            alt="Loading"
          ></div>
        )}
        <img
          src={img}
          alt={name}
          loading="lazy"
          onLoad={handleImageLoad}
          className={`w-52 bg-[#37375e] rounded-full transition-opacity duration-500 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="flex flex-col text-center justify-center items-center gap-3">
          <div className="text-xl font-semibold">{name}</div>
          <div className="flex justify-center items-center gap-5">
            <BsGithub size={30} />
            <FaLinkedin size={30} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
