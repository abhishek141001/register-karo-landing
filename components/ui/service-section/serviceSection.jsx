import { Button } from "../button"
import EachService from "./eachService"
import { services } from "@/assets/data"

export default function ServiceSection() {

   

    return(
        <div className="px-10 py-6 xl:px-20  xl:py-12 flex flex-col gap-4 items-center  text-center bg-[#FAFAFA]">
            <span className="text-[#EB8D15] text-sm font-thin">WELCOME TO REGISTERKARO.IN</span>
            <h2 className="text-[32px] font-bold">Explore Our Services</h2>
            <div className="flex flex-wrap justify-center items-center">
            {services.map((service, index) => (
                <EachService key={index} title={service.title} description={service.description} image={`service-icons/${service.title}.svg`} url="/services"/>
            ))}
            </div>
            <Button className='bg-[#1C4670] text-base font-medium px-6 py-6'>See all services</Button>
        
        </div>
    )
}