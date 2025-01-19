import { Avatar, AvatarFallback, AvatarImage } from "./avatar"

export default function EachTestimonial({ img, name, designation, country, company, discription, rating }) {
    return (
        <div className="flex flex-col items-start gap-4 w-lg bg-white rounded-md p-6">
            <div className="flex justify-between w-full">
                <img src="testimonialIcon.svg" alt="icon" className="w-12" />
                <div className="flex gap-2 items-center">
                    {Array.from({ length: rating }, (_, index) => (
                        <img
                            key={index}
                            src="/hero-icons/goldenStar.svg"
                            alt="star"
                            className="h-5 w-5"
                        />
                    ))}

                </div>
            </div>
            <p>{discription}</p>
            <div className="flex gap-2">
                <Avatar>
                    <AvatarImage src={img} />
                    <AvatarFallback>{name}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-bold text-md">{name}</span>
                    <span className="text-sm">{designation} • {company} • {country}</span>
                </div>


            </div>
        </div>

    )
}