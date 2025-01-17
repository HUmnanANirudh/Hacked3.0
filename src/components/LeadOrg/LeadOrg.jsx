import React from "react";
import Card from "./Card";

function LeadOrg() {
  return (
    <section id="#contact" className="md:my-40 my-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-10">
        <div className="flex flex-col md:items-start items-center justify-center w-full md:w-1/2 p-4 gap-10 md:gap-2">
          <h2 className="text-3xl font-bold ">CONTACT US</h2>
          <p className="text-xl text-center md:text-start">
            For more information about the hackathon, feel free to reach out to us through the provided contact details. We're here to assist you with any queries or support you need!
          </p>
          <a href="mailto:contact@hacked67thmilestone.com" className="text-blue-600 hover:underline">
            <h3 className="text-lg font-semibold">
              Email: <span className="lowercase">contact@hacked67thmilestone.com</span>
            </h3>
          </a>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-6 items-center gap-20 md:gap-8 w-full md:w-1/2">
          <Card img={"/assets/Shrey.png"} name={"Shrey"} number={"+91 88823 45939"} email={"shrey.jaiswal.23cse@bmu.edu.in"} />
          <Card img={"/assets/Priyal.png"} name={"Priyal"} number={"+91 93154 72949"} email={"priyal.khullar.23cse@bmu.edu.in"} />
        </div>
      </div>
    </section>
  );
}

export default LeadOrg;
