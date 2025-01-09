import TeamCards from "./TeamCards"
import { memo } from "react";
const On_Marketing = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Molly"} img={"/assets/Molly.png"} about={"Silent but strategic, making marketing magic happen one move at a time."} linkedin={"https://www.linkedin.com/in/molly-srivastava-731b8b314?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}/>
            <TeamCards name={"Vanshika V."} img={"/assets/Vanshika.png"} about={"Cool under pressure, smooth in execution—handling life and online marketing like a pro."} github={"https://github.com/Vanshikav31"} linkedin={"https://www.linkedin.com/in/vanshikab93468320"}/>
        </div>
    )
}
export default memo(On_Marketing);