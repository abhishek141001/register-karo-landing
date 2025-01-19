export default function ClientLogoSection() {

    const clientLogos = [
        {
            id: 1,
            img: "client-logo/client-1.svg"
        },
        {
            id: 2,
            img: "client-logo/client-2.svg"
        },
        {
            id: 3,
            img: "client-logo/client-3.svg"
        },
        {
            id: 4,
            img: "client-logo/client-4.svg"
        },
        {
            id: 5,
            img: "client-logo/client-5.svg"
        },
    ]

    return (
        <div className="flex flex-col items-center justify-center text-center gap-12 p-10 xl:p-20">
            <h2 className="text-[22px] font-bold">Trusted By Over 100+ Startups and freelance business</h2>
            <div className="flex flex-wrap lg:flex-row gap-12 justify-center items-center">
                {clientLogos.map((logo) => (
                    <img key={logo.id} src={logo.img} alt="client logo" className="w-36" />
                ))}
            </div>

        </div>
    )
}