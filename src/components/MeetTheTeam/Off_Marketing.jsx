import TeamCards from "./TeamCards"
import { memo } from "react";
const Off_Marketing = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Aditya"} img={"/assets/Aditya.png"} about={"OG of making anything and everything the talk of the town, literally!"} github={"https://github.com/05Aditya05"} linkedin={"https://www.linkedin.com/in/aaditya-sharma-b0085a338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"}/>
        </div>
    )
}
export default memo(Off_Marketing);