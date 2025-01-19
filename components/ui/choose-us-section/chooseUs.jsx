export default function ChooseUs() {

    const features = [
        {
            id: 1,
            icon: "😊",
            title: "Guaranteed Satisfaction",
            description:
                "We ensure that you stay 100% satisfied with our offered services.",
            bgColor: "bg-blue-50",
            iconColor: "text-blue-500",
        },
        {
            id: 2,
            icon: "🛡️",
            title: "Confidential & Safe",
            description: "All your private information is safe with us.",
            bgColor: "bg-red-50",
            iconColor: "text-red-500",
        },
        {
            id: 3,
            icon: "✅",
            title: "No Hidden Fee",
            description:
                "Everything is put before you with no hidden charges or conditions.",
            bgColor: "bg-green-50",
            iconColor: "text-green-500",
        },
        {
            id: 4,
            icon: "👨‍💼",
            title: "Expert CA/CS Assistance",
            description:
                "Prompt support from our in-house expert professionals.",
            bgColor: "bg-red-50",
            iconColor: "text-red-500",
        },
        {
            id: 5,
            icon: "🛡️",
            title: "Confidential & Safe",
            description: "All your private information is safe with us.",
            bgColor: "bg-red-50",
            iconColor: "text-red-500",
        },
    ];

    return (
        <div className="p-4 md:p-10 xl:p-20 flex flex-col items-start ">
            <div className="flex flex-col md:flex-row justify-between w-full">
                <div className="flex flex-col gap-6 w-[45%]">
                    <h2 className="text-sm font-normal text-[#EB8D15]">
                        Why RegisterKaro.in
                    </h2>
                    <h3 className="text-[32px]  text-[#272D37] font-bold">
                        Why Choose Register Karo
                    </h3>
                    <p className="text-gray-600 mb-8 ">
                        It is with consistent services and results that build trust with the
                        people and that in turn help us to serve the business better.
                    </p>
                </div>
                <div className="flex flex-wrap  justify-end">
                    <div

                        className={` w-[290px] px-4 mb-6 flex`}
                    >
                        <div
                            className={`bg-blue-50 p-6 rounded-lg text-center flex-1`}
                        >
                            <div
                                className={`text-blue-500 text-4xl mb-4`}
                                aria-label="Feature Icon"
                            >
                                😊
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Guaranteed Satisfaction
                            </h4>
                            <p className="text-gray-600">We ensure that you stay 100% satisfied with our offered services.</p>
                        </div>
                    </div>
                    <div

                        className={`w-[290px] px-4 mb-6 flex`}
                    >
                        <div
                            className={`bg-red-50 p-6 rounded-lg text-center flex-1`}
                        >
                            <div
                                className={`text-red-500 text-4xl mb-4`}
                                aria-label="Feature Icon"
                            >
                                🛡️
                            </div>
                            <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                Confidential & Safe
                            </h4>
                            <p className="text-gray-600">All your private information is safe with us.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex flex-wrap justify-start lg:justify-end  w-full">

                <div

                    className={` w-[290px] px-4 mb-6 flex`}
                >
                    <div
                        className={`bg-green-50 p-6 rounded-lg text-center flex-1`}
                    >
                        <div
                            className={`text-green-500 text-4xl mb-4`}
                            aria-label="Feature Icon"
                        >
                            ✅
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            No Hidden Fee
                        </h4>
                        <p className="text-gray-600">Everything is put before you with no hidden charges or conditions.</p>
                    </div>
                </div>
                <div

                    className={` w-[290px] px-4 mb-6 flex`}
                >
                    <div
                        className={`bg-red-50 p-6 rounded-lg text-center flex-1`}
                    >
                        <div
                            className={`text-red-500 text-4xl mb-4`}
                            aria-label="Feature Icon"
                        >
                            👨‍💼
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Expert CA/CS Assistance
                        </h4>
                        <p className="text-gray-600">Prompt support from our in-house expert professionals.</p>
                    </div>
                </div>
                <div

                    className={` w-[290px] px-4 mb-6 flex`}
                >
                    <div
                        className={`bg-red-50 p-6 rounded-lg text-center flex-1`}
                    >
                        <div
                            className={`text-red-500 text-4xl mb-4`}
                            aria-label="Feature Icon"
                        >
                            🛡️
                        </div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">
                            Confidential & Safe
                        </h4>
                        <p className="text-gray-600">All your private information is safe with us.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};



