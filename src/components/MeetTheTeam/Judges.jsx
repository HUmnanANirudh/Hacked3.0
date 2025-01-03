import TeamCards from "./TeamCards"
import { memo } from "react"
const Judges = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Krishna"} img={"/assets/Krishna.png"}/>
            <TeamCards name={"Kavya"} img={"/assets/Kavya.png"}/>
        </div>
    )
}
export default memo(Judges);