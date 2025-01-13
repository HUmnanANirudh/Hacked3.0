import TeamCards from "./TeamCards"
import { memo } from "react";
const Technical = () =>{
    return(
        <div className="flex flex-col md:flex-row md:gap-20 justify-center md:justify-evenly items-center">
            <TeamCards name={"Gaurav Ghosh"} img={"/assets/gaurav.webp"} about={"Tech wizard in a hurry—confirm it fast, and I’ll deliver even faster."} github={"https://github.com/Gaurav-py-Ghosh"} linkedin={"https://www.linkedin.com/in/gaurav-ghosh-9531132b3/"} />
            <TeamCards name={"Sejal Gupta"} img={"/assets/sejal.webp"} about={"If it’s assigned to me, it’s as good as done—dedication on autopilot."}  github={"https://github.com/priyalkhullar"} linkedin={"https://www.linkedin.com/in/sejal-gupta-943832291/"}/>
        </div>
    )
}
export default memo(Technical);