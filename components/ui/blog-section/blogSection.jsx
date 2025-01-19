import { Button } from "../button"
import EachBlog from "./eachBlog"
import { blogs } from "@/assets/data"
export default function BlogSection() {


    return(
        <div className="p-6 xl:p-12 flex flex-col items-center gap-6">
            <span className="text-sm font-normal text-[#EB8D15]">EXPLORE OUR BLOGS</span>
            <h2 className="text-[32px]  text-[#272D37] font-bold ">Accelerate Digital Transformation</h2>

            <div className="flex flex-wrap  items-center justify-center ">
                {blogs.map((blog, index)=>(
                    <EachBlog key={index} {...blog}/>
                ))}
            </div>
            <Button className='bg-[#1C4670] text-base font-medium px-6 py-6'>Show more blogs</Button>

        </div>
    )
}