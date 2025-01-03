import TeamCards from "./TeamCards"
import { memo } from "react";
const Sponsorship = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-stretch">
            <TeamCards name={"Mukund"} img={"/assets/Mukund.png"}/>
            <TeamCards name={"Vanshita Mehta"} img={"/assets/Vanshita.png"}/>
        </div>
    )
}
export default memo(Sponsorship);