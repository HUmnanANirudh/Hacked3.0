import TeamCards from "./TeamCards"
import { memo } from "react";
const Entry = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Shreya"} img={"/assets/Shreya.png"} about={"Smart, punctual, and sharp—balancing work with top-notch academics and spot-on critiques."} github={"https://github.com/shreyak7717"} linkedin={"https://www.linkedin.com/in/shreya-khandelwal-78a591281/"}/>
        </div>
    )
}
export default memo(Entry);