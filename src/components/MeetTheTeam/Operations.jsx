import TeamCards from "./TeamCards"
import { memo } from "react";
const Operations = () => {
    return(
        <div className="flex flex-col md:flex-row md:gap-20 justify-center md:justify-evenly items-center">
            <TeamCards name={"Tanmay"} img={"/assets/Tanmay.png"} about={"After 10, I’m all in: coordinating chaos, perfecting operations, and delivering roasts sharper than my timelines."}/>
            <TeamCards name={"Ayush"} img={"/assets/Ayush.png"} about={"Building the backbone, I make sure that everything gets the momentum it needs."} github={"https://github.com/Ayush1075"} linkedin={"https://www.linkedin.com/in/ayush-gupta-07612928b/"}/>
        </div>
    )
}
export default memo(Operations);