import { IoArrowForwardCircleOutline } from "react-icons/io5";

export default function EachService({title, description, image, url}) {
    return (
        <div className="flex flex-col items-center justify-center lg:w-[33%] h-[320px] gap-6 text-center">
            <img src={image} alt="service" className="w-20 h-20"/>
            <h1 className="font-extrabold text-xl">{title}</h1>
            <p className="text-center text-[17px] max-w-[260px] text-[#282728]">{description}</p>
            <a href={url} className="flex gap-2 items-center font-semibold text-base hover:underline">Learn more <IoArrowForwardCircleOutline/></a>
        </div>
    )
}