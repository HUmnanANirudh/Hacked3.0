import TeamCards from "./TeamCards"
import { memo } from "react";
const Operations = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Tamnay"} img={"/assets/Tanmay.png"}/>
            <TeamCards name={"Ayush"} img={"/assets/Ayush.png"}/>
        </div>
    )
}
export default memo(Operations);