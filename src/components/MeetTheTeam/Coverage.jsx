import TeamCards from "./TeamCards"
import {memo} from "react"
const Coverage = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Lakshay"} img={"/assets/Lakshay.png"}/>
        </div>
    )
}
export default memo(Coverage);