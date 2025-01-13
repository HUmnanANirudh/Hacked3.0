import TeamCards from "./TeamCards"
import { memo } from "react"
const Judges = () => {
    return(
        <div className="flex flex-col md:gap-20 md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards name={"Krishna"} img={"/assets/Krishna.png"} about={"Sealing the judging squad and flexing PR skills."} github={"https://github.com/Krishnamundra11"} linkedin={"https://www.linkedin.com/in/krishna-mundra-270427298/"}/>
            <TeamCards name={"Kavya"} img={"/assets/Kavya.png"} about={"Making the tough calls and finding the right evaluators, I've got it all covered!"} github={"https://github.com/kavyag1205/"} linkedin={"https://www.linkedin.com/in/kavya-goswami-39a8442ab/"}/>
        </div>
    )
}
export default memo(Judges);