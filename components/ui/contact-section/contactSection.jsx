import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactSection() {
    return(
        <div className="p-4 md:p-10 lg:p-20 flex flex-col items-center gap-8 gradientBg text-center">
            <span className="text-sm font-normal text-white">1% OF THE INDUSTRY</span>
            <h2 className="text-[32px]  text-white font-bold ">Welcome to your new digital reality. Now.</h2>
            <div className="flex w-auto  md:w-[500px] items-center rounded-lg">
      <Input type="email" placeholder="Email" className='rounded-none'/>
      <Button type="submit" className='rounded-none bg-[#FFA229]'>Submit</Button>
    </div>
    <div className="flex text-white gap-6">
        <div className="flex gap-2">
            <img src="tick.svg" alt="icon" className="w-4 md:w-auto"/>
            <span className="text-xs md:text-base">Instant result</span>
        </div>
        <div className="flex gap-2">
            <img src="tick.svg" alt="icon" className="w-4 md:w-auto"/>
            <span className="text-xs md:text-base">User-friendly interface</span>
        </div>
        <div className="flex gap-2">
            <img src="tick.svg" alt="icon" className="w-4 md:w-auto"/>
            <span className="text-xs md:text-base">Personalized customization</span>
        </div>

    </div>
        </div>
    )
}