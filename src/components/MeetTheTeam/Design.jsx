import TeamCards from "./TeamCards"
import { memo } from "react";
const Design = () => {
    return(
        <div className="flex justify-center items-center">
            <TeamCards name={"Suvanesh"} img={"/assets/Suvansh.png"} about={"Overloaded with work but never out of ideas—pure creativity drives my hustle."} github={"https://github.com/Suvanshsehgal"} linkedin={"https://www.linkedin.com/in/suvansh-sehgal-721a6831b/"}/>
        </div>
    )
}
export default memo(Design);