import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
export default function TopNav() {
    return (
        <div className="flex gap-4 justify-end items-center bg-[#1C4670] py-4 text-white px-4 md:px-10 xl:px-20">
            <div className="flex items-center gap-2"><IoMdMail/> www.registerkaro.com</div>
            <span>|</span>
            <div className="flex items-center gap-2"><FaPhone/> +918447746183</div>
            <span>|</span>
            <div className="flex items-center gap-2">
                <FaInstagram className=" text-white"/>
                <FaFacebook className=" text-white"/>
                <FaTwitter className=" text-white"/>
                <FaPinterest className=" text-white"/>
            </div>
        </div>
    )
}
