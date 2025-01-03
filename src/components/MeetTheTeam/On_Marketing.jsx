import TeamCards from "./TeamCards"
import { memo } from "react";
const On_Marketing = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Molly"} img={"/assets/Molly.png"}/>
            <TeamCards name={"Vanshika V."} img={"/assets/Vanshika.png"}/>
        </div>
    )
}
export default memo(On_Marketing);