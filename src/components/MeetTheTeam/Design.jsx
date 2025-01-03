import TeamCards from "./TeamCards"
import { memo } from "react";
const Design = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Suvanesh"} img={"/assets/Suvansh.png"}/>
        </div>
    )
}
export default memo(Design);