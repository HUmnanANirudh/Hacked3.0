import React from "react";
import "./WhatIsHacked.css";

function WhatIsHacked() {
  return (
    <section className="p-6 flex justify-center items-center bg-[#090a37] min-h-[80vh]" id = "WhatIsHacked">
      <div className="md:flex-row w-11/12 flex gap-3 flex-col items-center">
        <div className="w-full md:w-2/5">
          <img src="/assets/images/what-is-hacked.webp" alt="" />
        </div>
        <div className="flex w-full md:w-3/5 flex-col mx-3">
          <h1 className="text-4xl text-center font-bold">
            What is Hacked 3.0?
          </h1>
          <p className="my-3 text-md md:text-xl leading-relaxed text-justify">
            Hacked 3.0 is a 24-hour hackathon at BML Munjal University's 67th
            Milestone fest, uniting students from diverse disciplines to
            brainstorm, prototype, and solve real-world problems inspired by the
            UN’s Sustainable Development Goals. With a mission to foster
            collaboration, skill-building, and impactful innovation, the event
            offers mentorship, workshops, and hands-on experience in a dynamic
            environment. Open to beginners and experts alike, participants can
            compete for cash prizes, certificates, and networking opportunities.
            Held at BML Munjal University, Gurgaon, it’s a thrilling space for
            creativity, teamwork, and sustainable change.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhatIsHacked;
