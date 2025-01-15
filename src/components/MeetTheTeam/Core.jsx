import TeamCards from "./TeamCards";

const Core = () =>{
    return(
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-10 gap-y-1">
            
            <TeamCards img={"/assets/AdityaRastogi.png"} name={"Aditya Rastogi"} about={"Anxious yet adorable—panics hard, but wins harder with a smile that lights up the room."} github={"http://github.com/AdityaR-Dev98"} linkedin={"http://linkedin.com/in/aditya-rastogi-960116226"}/>
            <TeamCards img={"/assets/AdityaBansal.png"} name={"Aditya bansal"} about={"Silent coder, life debugger—perfecting systems and situations, even in the sleep."} github={"http://github.com/SimplyAditya"} linkedin={"http://linkedin.com/in/aditya-bansal-developer"}/>
            <TeamCards img={"/assets/Gaurangi.png"} name={"Gaurangi"} about={"Fierce on the outside, sweet on the inside—precision and perfection are always my vibe."} github={"https://github.com/MoonLitMatrix13"} linkedin={"https://www.linkedin.com/in/gaurangi-8b7901242/"}/>
            <TeamCards img={"/assets/Shrey.png"} name={"Shrey Jaiswal"} about={"Turning problems into punchlines—too cool to freak out, but ready to freak out the odds."} github={"https://github.com/jaisw07"} linkedin={"https://www.linkedin.com/in/shrey-jaiswal-1a7724272/"}/>
            <TeamCards img={"/assets/Priyal.png"} name={"Priyal Khullar"} about={"Powered by caffeine and pure passion— my calm exterior hides a workaholic on a mission to make everything better."} github={"https://github.com/priyalkhullar"} linkedin={"https://www.linkedin.com/in/priyal-khullar"}/>
            <TeamCards img={"/assets/Tanya.png"} name={"Tanya"} about={"Keeping the sass high and the chaos low—your go-to guru for flawless coordination."} github={"https://github.com/Tanyaa0610"} linkedin={"https://www.linkedin.com/in/tanya0610"}/>
        </div>       
    )
}
export default Core;