import { Button } from "../button"
import EachService from "./eachService"

export default function ServiceSection() {

    const services = [
        {
            title: "Company Formation",
            description: "Build web-based solutions that enhance customer experience.",
            
        },
        {
            title: "Company Secretarial Services",
            description: "Make data-driven decisions and utilize technology to reach business goals.",
            image: "/images/gst-return.svg"
        },
        {
            title: "Virtual Office Address",
            description: "Foster customer relationships by effectively serving your market.",
            
        },
        {
            title: "Annual Compliance Services",
            description: "Turn your ideas into modern products with our design experts.",
            
        },
        {
            title: "Payroll Services",
            description: "Expand your business across the globe with minimal effort.",
            
        },
        {
            title: "Bookkeeping Services",
            description: "Steering user behaviours with creative design, data insights & technology.",
            
        }
    ]

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