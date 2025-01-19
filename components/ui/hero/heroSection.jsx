import { Button } from "../button";

export default function HeroSection() {
    const stars = 5; // Assuming all 5 stars are filled (can be dynamic)

    const trustItems = [
        {
            img: 'hero-icons/handSake.svg',
            value: '4.5+',
            valueTitle: 'Customer Rating'
        },
        {
            img: 'hero-icons/people.svg',
            value: '20,000+',
            valueTitle: 'Clients'
        },

    ]

    const TrustContainer = ({ img, rating, ratingTitle }) => {
        return (
            <div className="flex gap-2 items-center">
                <img src={img} alt={ratingTitle} className="w-12" />
                <div className="flex flex-col">
                    <span className="textGradient font-extrabold text-3xl">{rating}</span>
                    <span className="text-[#4F4F4F] text-sm">{ratingTitle}</span>


                </div>
            </div>
        )
    }


    return (
        <div className="p-4 py-8 md:p-10 xl:p-20 flex-col  md:flex heroBackground">
            <div className="flex flex-col w-full lg:max-w-[50%] gap-6">
                <div className="flex items-center gap-2">
                    <img src="/hero-icons/goldenStar.svg" alt="gold star" className="h-5 w-5" />
                    <span className="font-bold text-lg">Google Rating</span>


                    <div className="flex items-center gap-1 ml-4">
                        {/* Render all stars dynamically */}
                        {Array.from({ length: stars }, (_, index) => (
                            <img
                                key={index}
                                src="/hero-icons/whiteStar.svg"
                                alt="star"
                                className="h-5 w-5"
                            />
                        ))}
                    </div>
                </div>

                <h2 className="text-5xl font-thin leading-[60px]">Your trusted partner <br></br> for compliance business needs</h2>
                <div className="w-10 h-[1px] bg-[#F60014]"></div>
                <p className="text-xl text-[#4F4F4F]">An online business compliance platform that helps entrepreneurs and other individuals with various, <strong>registrations</strong>, <strong>tax filings</strong> and other<strong> legal matters</strong> .</p>

                <div className="flex gap-12">{
                    trustItems.map((item, index) => (
                        <TrustContainer key={index} img={item.img} rating={item.value} ratingTitle={item.valueTitle} />
                    ))
                }
                </div>
                <div className="flex gap-8">
                    <Button className='bg-[#1C4670] text-white px-8 py-6 text-base font-bold'>Talk an expert</Button>
                    <a href="" className="flex items-center gap-2 text-[#282828] font-semibold text-base"><img src="hero-icons/playIcon.svg" />See how it works</a>
                </div>
            </div>
        </div>
    );
}
