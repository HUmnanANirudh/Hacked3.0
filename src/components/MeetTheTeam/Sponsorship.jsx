import TeamCards from "./TeamCards"
import { memo } from "react";
const Sponsorship = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:gap-20 md:justify-evenly items-center">
            <TeamCards name={"Mukund"} img={"/assets/Mukund.png"} about={"Leveling up every collaboration, because why settle for less?"} linkedin={"https://www.linkedin.com/in/mukund-madhav-agarwal-777057288/"} github={"https://github.com/Mukund2910"}/>
            <TeamCards name={"Vanshita Mehta"} img={"/assets/Vanshita.png"} about={"Turning tight budgets into big breakthroughs—frugal innovation is my superpower!"} github={"https://github.com/Vanshitamehta06"} linkedin={"https://www.linkedin.com/in/vanshita-mehta-195bab2bb?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}/>
        </div>
    )
}
export default memo(Sponsorship);