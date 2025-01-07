import TeamCards from "./TeamCards"
import { memo } from "react";
const Entry = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Shreaya"} img={"/assets/Shreya.png"} about={"Smart, punctual, and sharp—balancing work with top-notch academics and spot-on critiques."}/>
        </div>
    )
}
export default memo(Entry);