import TeamCards from "./TeamCards"
import { memo } from "react";
const Sponsorship = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Mukund"} img={"/assets/Mukund.png"} about={"Leveling up every collaboration, because why settle for less?"}/>
            <TeamCards name={"Vanshita Mehta"} img={"/assets/Vanshita.png"} about={"Turning tight budgets into big breakthroughs—frugal innovation is my superpower!"}/>
        </div>
    )
}
export default memo(Sponsorship);