import { figureData } from "@/assets/data"
export default function ExperienceSection(){

    

    const FigureComponent = ({count,title})=>{
        return(
            <div className="flex flex-col justify-center items-center">
            <div className="flex justify-start textGradient">
                <span className="text-[42px] font-extrabold">{count}</span>
                <span className="text-[24px] font-extrabold mt-1">+</span>
            </div>
            <span className="text-base font-extrabold uppercase">{title}</span>
        </div>
        )
    }
    return(
        <div className="flex flex-col items-center gap-6 p-20">
            <span className="text-sm font-normal text-[#EB8D15] uppercase">Why Register karo</span>
            <h2 className="text-[32px]  text-[#272D37] font-bold ">Some Numbers are important</h2>
            <div className="flex flex-wrap items-center justify-center gap-16">
               {figureData.map((data,index)=><FigureComponent key={index} {...data}/>)}
            </div>
        </div>
    )
}