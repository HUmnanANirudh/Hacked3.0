import TeamCards from "./TeamCards"
import { memo } from "react";
const Off_Marketing = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Aditya"} img={"/assets/Aditya.png"}/>
        </div>
    )
}
export default memo(Off_Marketing);