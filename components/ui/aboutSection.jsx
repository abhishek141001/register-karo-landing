import { Button } from "./button";

export default function AboutSection() {
    return (
        <div className="flex flex-col md:flex-row justify-center p-4 lg:p-10 xl:p-20 items-start lg:items-center relative">
            <div className="flex flex-col gap-6 w-full md:w-[50%] items-start">
                <h3 className="text-sm text-[#EB8D15] font-normal">WELCOME TO REGISTERKARO.IN</h3>
                <h2 className="text-[32px]  text-[#FFA229] font-bold "><span className="text-[#272D37]">About</span> Register Karo</h2>
                <div className="aboutImgContainer w-[98.5%] h-[400px]   rounded-md visible lg:hidden"></div>
                <p className="w-[90%]">We have been using Intelegencia as our DevOps vendor for our field service applications over the last couple of years and I’m extremely pleased with
                    their performance, ability to execute, and willingness to adapt in our ever changing environment. Perry is an outstanding leader who is fanatical about
                    customer satisfaction. He has built a solid team which has consistently delivered on projects thereby exceeding everyone’s expectations.<br></br><br></br>

                    I would strongly recommend their services to any organization that is looking for solid, reliable, and predictable outcomes.</p>
                <Button className='bg-[#1C4670] text-base font-medium px-6 py-6'>See all services</Button>
            </div>
            <div className="w-full  md:w-[40%] xl:w-[48%] p-1 h-[390px] relative bgAboutImg rounded-md hidden lg:flex">
            <div className="aboutImgContainer w-[98.5%] h-[400px] absolute bottom-2 right-1 left-1 rounded-md "></div>
            <img src="about-bg/about-bg.svg" alt="bg" className="absolute -right-24"/>
            <img src="about-bg/about-dots.svg" alt="bg" className="absolute -right-20 bottom-[4px] -z-10"/>
            </div>
            
        </div>
    )
}