import { logos } from "@/assets/data"

export default function LogoSection() {

    
    return(
        <div className="flex flex-wrap  md:gap-12 items-center justify-center">
            {logos.map((logo,index)=><img key={index} src={logo} alt="logo" className="w-32 h-32 object-contain mx-8" />)}

        </div>
    )
}