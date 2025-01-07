import TeamCards from "./TeamCards"
import {memo} from "react"
const Coverage = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Lakshay"} img={"/assets/Lakshay.png"} about={"Coverage game so GOAT, even AI takes notes."}/>
        </div>
    )
}
export default memo(Coverage);