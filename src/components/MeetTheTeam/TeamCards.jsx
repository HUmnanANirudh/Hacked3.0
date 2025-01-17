import React, { useState } from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";

const TeamCards = ({ name, img, about,linkedin,github }) => {
  const defaultGithub = "https://github.com/";
  const defaulLinkedin = "https://www.linkedin.com/";
  const [loaded, setLoaded] = useState(false);

  const handleImageLoad = () => {
    setLoaded(true);
  };

  return (
    <div className="my-10 md:my-20 w-[280px] h-[280px] rounded-[29px] bg-white/10 backdrop-blur-lg p-[3px] relative shadow-lg transition-all duration-500 ease-in-out hover:rounded-tl-[55px] group border border-white/20">
      {!loaded && (
        <div
          className="w-full h-full bg-gray-200/50 backdrop-blur-3xl rounded-[29px] animate-pulse"
          alt="Loading..."
        ></div>
      )}
      <div className=" absolute w-[calc(100%-6px)] h-[calc(100%-6px)] top-[3px] left[3px] rounded-[29px] overflow-hidden z-10 border-0 border-white/30 transition-all duration-500 ease-in-out delay-75 group-hover:w-[100px] group-hover:h-[100px] group-hover:top-[10px] group-hover:left-[10px] group-hover:rounded-full group-hover:z-30 group-hover:border-[7px] group-hover:shadow-xl hover:scale-125">
        <img
          src={img}
          alt={`team member-${name}`}
          loading="lazy"
          onLoad={handleImageLoad}
          className={` bg-[#37375e]/70 w-full h-full object-cover object-[0_0px] group-hover:object-[0_10px] group-hover:scale-[1.7] transition-all duration-700 ease-in-out${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>
      <div className="absolute bottom-[3px] left-[3px] right-[3px] bg-white/20 backdrop-blur-lg top-[80%] rounded-[29px] z-20 shadow-inner overflow-hidden transition-all duration-500 cubic-bezier(0.645,0.045,0.355,1) group-hover:top-[20%] group-hover:rounded-[80px_29px_29px_29px] group-hover:delay-200 border-t border-white/20">
        <div className="absolute bottom-0 left-6 right-6 h-40">
          <span className="block text-xl text-white font-bold">{name}</span>
          <span className="block text-sm text-white/90">{about}</span>
          <div className="absolute bottom-4 left-0 right-0 flex items-center justify-between">
            <div className="flex gap-4">
            <a href={github||defaultGithub} target="_blank" rel="noopener noreferrer" onError={(e)=>e.target.defaultGithub}>
              <BsGithub
                className="h-5 w-5 fill-white hover:fill-[#f55d56] hover:scale-110 transition-all shadow-sm"
              />
              </a>
              <a href={linkedin||defaulLinkedin} target="_blank" rel="noopener noreferrer" onError={(e)=>e.target.defaulLinkedin}>
              <BsLinkedin
                className="h-5 w-5 fill-white hover:fill-[#f55d56] hover:scale-110 transition-all shadow-sm"
              />
              </a>
            </div>
            
            <a href={linkedin||defaulLinkedin} target="_blank" rel="noopener noreferrer" onError={(e)=>e.target.defaulLinkedin}>
            <button
              className="bg-white text-[#37375e] rounded-full text-xs py-1.5 px-2.5 shadow-sm hover:bg-[#f55d56] hover:text-white transition-colors"
            >
              Follow Me
            </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
