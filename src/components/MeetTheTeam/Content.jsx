import TeamCards from "./TeamCards"
import {memo} from "react"
const Content = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Khushi"} img={"/assets/Khushi.png"} about={"From witty one-liners to blog goldmines, my toolkit has it all!"} github={"https://github.com/khushi-goyal23"} linkedin={"https://www.linkedin.com/in/khushi-goyal-4aab25280/"}/>
        </div>
    )
}
export default memo(Content);