import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import EachTestimonial from "./eachTestimonial"



export default function TestimonialSection() {

    const testimonials = [
        {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQEfYoJxdIN1fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724933283200?e=1743033600&v=beta&t=xxxDKBJoiW9nnReWQZ8Av73aH_vw_z0jRAiKTXzfQJY',
            name: 'John Doe',
            designation: 'CEO',
            company: 'Google',
            country: 'USA',
            discription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ',
            rating: 5,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQEfYoJxdIN1fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724933283200?e=1743033600&v=beta&t=xxxDKBJoiW9nnReWQZ8Av73aH_vw_z0jRAiKTXzfQJY',
            name: 'John Doe',
            designation: 'CEO',
            company: 'Google',
            country: 'USA',
            discription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ',
            rating: 5,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQEfYoJxdIN1fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724933283200?e=1743033600&v=beta&t=xxxDKBJoiW9nnReWQZ8Av73aH_vw_z0jRAiKTXzfQJY',
            name: 'John Doe',
            designation: 'CEO',
            company: 'Google',
            country: 'USA',
            discription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ',
            rating: 5,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQEfYoJxdIN1fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724933283200?e=1743033600&v=beta&t=xxxDKBJoiW9nnReWQZ8Av73aH_vw_z0jRAiKTXzfQJY',
            name: 'John Doe',
            designation: 'CEO',
            company: 'Google',
            country: 'USA',
            discription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ',
            rating: 5,
        },
        {
            img: 'https://media.licdn.com/dms/image/v2/D5603AQEfYoJxdIN1fA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724933283200?e=1743033600&v=beta&t=xxxDKBJoiW9nnReWQZ8Av73aH_vw_z0jRAiKTXzfQJY',
            name: 'John Doe',
            designation: 'CEO',
            company: 'Google',
            country: 'USA',
            discription: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure sint amet occaecat cupidatat non proident ea commodo consequat aute irure sint amet occaecat cupidatat non proident ',
            rating: 5,
        },
    ]




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