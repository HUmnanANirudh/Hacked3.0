import TeamCards from "./TeamCards"
import { memo } from "react"
const Judges = () => {
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Krishna"} img={"/assets/Krishna.png"} about={"Sealing the judging squad and flexing PR skills."}/>
            <TeamCards name={"Kavya"} img={"/assets/Kavya.png"} about={"Making the tough calls and finding the right evaluators, I've got it all covered!"}/>
        </div>
    )
}
export default memo(Judges);