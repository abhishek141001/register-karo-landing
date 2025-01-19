import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "./carousel"
import EachTestimonial from "./eachTestimonial"
import  {testimonials} from '@/assets/data'



export default function TestimonialSection() {





    return (
        <div className="flex flex-col justify-center py-20 p-4 md:pl-20 bg-[#1C4670] relative">

            <Carousel
                opts={{
                    align: "start",
                }}
                className="w-full"
            >
                <div className="flex justify-between items-center pr-20">
                    <h2 className="text-white text-[32px] font-bold">What peoples says about us </h2>
                    <div className="flex gap-2 items-center w-fit">
                        <CarouselPrevious className='hover:bg-orange-400' />
                        <CarouselNext />
                    </div>
                </div>
                <CarouselContent className=''>
                    {testimonials.map((testimonial, index) => (
                        <CarouselItem key={index} className="basis-full md:basis-[42%] ">
                            <EachTestimonial {...testimonial} />
                        </CarouselItem>
                    ))}
                </CarouselContent>

            </Carousel>

        </div>
    )
}