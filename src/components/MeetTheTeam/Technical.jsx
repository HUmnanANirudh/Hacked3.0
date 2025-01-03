import TeamCards from "./TeamCards"
import { memo } from "react";
const Technical = () =>{
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Gaurav Ghosh"} img={"/assets/gaurav.webp"}/>
            <TeamCards name={"Sejal Gupta"} img={"/assets/sejal.webp"}/>
        </div>
    )
}
export default memo(Technical);