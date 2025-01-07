import TeamCards from "./TeamCards"
import {memo} from "react"
const Coverage = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Lakshay"} img={"/assets/Lakshay.png"} about={"Coverage game so GOAT, even AI takes notes."} github={"https://github.com/Lakshay0916"} linkedin={"https://www.linkedin.com/in/lakshay-singhal-075710227/"}/>
        </div>
    )
}
export default memo(Coverage);