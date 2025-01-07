import TeamCards from "./TeamCards"
import { memo } from "react";
const On_Marketing = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Molly"} img={"/assets/Molly.png"} about={"Silent but strategic, making marketing magic happen one move at a time."}/>
            <TeamCards name={"Vanshika V."} img={"/assets/Vanshika.png"} about={"Cool under pressure, smooth in execution—handling life and online marketing like a pro."}/>
        </div>
    )
}
export default memo(On_Marketing);