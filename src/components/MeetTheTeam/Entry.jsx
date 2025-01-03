import TeamCards from "./TeamCards"
import { memo } from "react";
const Entry = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Shreaya"} img={"/assets/Shreya.png"}/>
        </div>
    )
}
export default memo(Entry);