import TeamCards from "./TeamCards"
import {memo} from "react"
const Content = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Khushi"} img={"/assets/Khushi.png"}/>
        </div>
    )
}
export default memo(Content);