export default function DownloadApp() {
    return (
        <div className="p-20 bg-[#1C4670] flex flex-col xl:flex-row text-white max-h-[500px] relative overflow-hidden">
            <div className="flex flex-col gap-8 w-[50%] lg:w-[40%]">
                <h2 className="text-[32px] font-bold">Manage Your Services by your Mobile Phone</h2>
                <p>Download our app to manage and track your services. Our app enables you to stay in touch with our experts and aids you in tracking your progress. </p>
                <div className="mt-2 flex flex-col gap-2">
                    <span>Get the App</span>
                    <div className="flex gap-2">
                        <div className="flex gap-2 px-4 py-2 rounded-sm bg-white items-center justify-center">
                            <img src="app-store-icon/apple.svg" alt='apple logo' className="w-8 h-8" />
                            <div className="flex flex-col  text-black">
                                <span className="text-[11px]">Get it On</span>
                                <span className="text-sm font-semibold">App store</span>
                            </div>
                        </div>
                        <div className="flex gap-2 px-4 py-2 rounded-sm bg-white items-center justify-center">
                            <img src="app-store-icon/android.svg" alt='apple logo' className="w-8 h-8" />
                            <div className="flex flex-col  text-black">
                                <span className="text-[11px]">Get it On</span>
                                <span className="text-sm font-semibold">Play store</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex">

                <img className=" w-[36%] xl:w-[46%] 2xl:w-auto h-auto absolute top-60 right-40 xl:top-20 xl:right-64 " src="app-store-icon/Phone.svg" alt="mobile" />
                <img className=" w-[36%] xl:w-[46%] 2xl:w-auto h-auto absolute top-24 -right-24          xl:-right-24 xl:-top-24" src="app-store-icon/Phone.svg" alt="mobile" />

            </div>


        </div>
    )
}