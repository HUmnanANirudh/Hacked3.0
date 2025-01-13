import React from "react";
import Card from "./Card";
function LeadOrg() {
  return (
    <section id="#contact" className="md:my-40 my-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 px-10">
        <div className="flex flex-col md:items-start items-center justify-center w-full md:w-1/3 p-4 gap-4 md:gap-2">
          <h1 className="text-3xl font-bold ">Contact Us</h1>
          <p className="text-xl text-center md:text-start">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto,
            autem.
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center mt-6 items-center gap-20 md:gap-8 w-full md:w-2/3">
          <Card img={"/assets/Shrey.png"} name={"Shrey"} number={"+91 88823 45939"} email={"shrey.jaiswal.23cse@bmu.edu.in"}/>
          <Card img={"/assets/Priyal.png"} name={"Priyal"} number={"+91 93154 72949"} email={"priyal.khullar.23cse@bmu.edu.in"}/>
        </div>
      </div>
    </section>
  );
}

export default LeadOrg;
