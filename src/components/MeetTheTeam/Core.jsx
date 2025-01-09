import TeamCards from "./TeamCards";

const Core = () =>{
    return(
        <div className="flex flex-col md:flex-row justify-center md:justify-evenly items-center">
            <TeamCards img={"/assets/AdityaBansal.png"} name={"Aditya bansal"} about={"Silent coder, life debugger—perfecting systems and situations, even in the sleep."} github={"http://github.com/SimplyAditya"} linkedin={"http://linkedin.com/in/aditya-bansal-developer"}/>
            <TeamCards img={"/assets/AdityaRastogi.png"} name={"Aditya Rastogi"} about={"Anxious yet adorable—panics hard, but wins harder with a smile that lights up the room."} github={"http://github.com/AdityaR-Dev98"} linkedin={"http://linkedin.com/in/aditya-rastogi-960116226"}/>
            <TeamCards img={"/assets/Gaurangi.png"} name={"Gaurangi"} about={"Fierce on the outside, sweet on the inside—precision and perfection are always my vibe."}/>
        </div>       
    )
}
export default Core;