import AboutMe from "@/Components/AboutMe";
import OtherProject from "@/Components/OtherProject";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Creator({}) {
    return (
        <>
            <MainLayout>
                <div className="h-screen bg-[url('/image/bg-creator.png')] bg-no-repeat bg-cover">
                    <div className="container mx-auto px-4 h-full">
                        <div className="flex h-full relative  overflow-hidden max-sm:flex-col ">
                            <div className="w-1/2 max-sm:w-full max-sm:grid max-sm:grid-rows-3 max-sm:grid-flow-col">
                                <img
                                    className="w-[9.8125rem] h-[9.8125rem] mt-20 ml-20 max-lg:ml-4 max-sm:ml-0 max-sm:w-[5rem] max-sm:h-[5rem] max-sm:row-span-3"
                                    src="/image/circle.png"
                                />
                                <h1 className="font-bold max-sm:col-span-2 max-sm:text-[2.5rem] max-sm:text-right max-sm:mt-20 max-sm:w-auto max-sm:leading-10 text-[6rem] w-[22.8125rem] leading-[6rem] ml-20 max-lg:ml-4 max-lg:mt-4 mt-10 bg-gradient-to-r from-indigo-950 to-sky-400 bg-clip-text text-transparent max-lg:text-[4rem] max-lg:w-[16rem]">
                                    ฐิติวรรณ เฮงจำรัส
                                </h1>
                                <h1 className="text-[1.5rem] ml-20 mt-5 max-sm:mt-2 max-lg:ml-4 max-sm:row-span-2 max-sm:col-span-2 max-sm:text-[1.5rem] max-sm:text-right">
                                    621310345
                                </h1>
                            </div>
                            <div className="w-1/2 max-sm:w-full">
                                <img
                                    src="/image/aommy.png"
                                    className="w-[47.0625rem] absolute bottom-0 left-2/4 z-10 max-lg:left-40 max-sm:left-0 "
                                />
                            </div>
                            <h1 className="text-[11.25rem] max-sm:text-[3.8rem] max-sm:bottom-60 max-sm:hyphens-auto absolute z-0 text-center max-lg:text-left text-stone-400/25 hyphens-none max-lg:bottom-20 bottom-1 max-lg:hyphens-auto text-clip w-full stroke font-extrabold max-lg:text-[8rem] max-lg:w-[48rem] max-sm:w-[24rem]">
                                TRUCK&shy;ROUNDING
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container px-4 mx-auto h-full mb-32">
                    <p className="underline underline-offset-8 uppercase text-[2rem] text-center mt-24">
                        WEB Application
                    </p>
                    <div className="flex gap-4 items-center max-lg:flex-col ">
                        <div className="w-1/2 max-lg:order-last max-lg:w-full ">
                            <img
                                src="/image/Groupcom.png"
                                className="h-full "
                            />
                        </div>
                        <div className="w-1/2 max-lg:w-full max-lg:text-center">
                            <p className="mt-28 font-bold uppercase text-[2rem] text-indigo-950 max-sm:text-[1.75rem]">
                                Animal Game
                            </p>
                            <p className="mt-10 text-blue-400 text-[1.875rem] max-sm:text-[1.75rem]">
                                Design and Development of Physical and Sexual
                                Crimes Alert Application
                            </p>
                            <p className="font-extralight text-[1.875rem]">
                                แอปพลิเคชั่นที่คุณสามารถค้นหาสินค้า
                                หรือโปรโมชั่นที่ใกล้เคียง และสามารถรับโปรโมชั่น
                                ที่คุณต้องการผ่านระบบ QR CODE
                                เพื่อนำไปรับโปรโมชั่นที่ ร้านค้าที่ต้องการได้
                                เพื่ออำนวยสะดวกสบายให้คุณ
                            </p>
                            <p className="mt-7 font-extralight text-[1rem]">
                                Design & Development — Thanatron
                            </p>
                            <div className="flex mt-14 max-lg:place-content-center max-lg:gap-x-4">
                                <div className="w-[6rem] h-[6rem] max-lg:w-auto">
                                    <img src="/image/htmlpic.png" />
                                </div>
                                <div className="w-[6rem] h-[6rem] max-lg:w-auto">
                                    <img src="/image/htmlpic.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 mx-auto h-full">
                    <p className="text-[2rem] max-sm:hidden">FUCTION</p>
                    <p className="text-[3rem] max-w-[41.1875rem] capitalize font-bold text-indigo-950 max-sm:text-[2rem]">
                        functions available on the website.
                    </p>
                    <div className="flex flex-row gap-x-10 md:px-6 md:py-24 py-16 max-lg:flex-col max-lg:gap-y-10">
                        <div className="basis-1/3">
                            <h1 className="text-[8rem] font-bold strokenumber">
                                01
                            </h1>
                            <p className="text-[1.875rem] font-bold uppercase text-teal-600">
                                Shop Management
                            </p>
                            <p className="text-[1.5rem] font-extralight">
                                จัดการร้านค้า สามารถเพิ่มลบหรือแก้ไข
                                สินค้าและโปรโมชันในร้านได้
                            </p>
                        </div>
                        <div className="basis-1/3 max-lg:text-right">
                            <h1 className="text-[8rem] font-bold strokenumber">
                                02
                            </h1>
                            <p className="text-[1.875rem] font-bold uppercase text-teal-600">
                                Shop Management
                            </p>
                            <p className="text-[1.5rem] font-extralight">
                                จัดการร้านค้า สามารถเพิ่มลบหรือแก้ไข
                                สินค้าและโปรโมชันในร้านได้
                            </p>
                        </div>
                        <div className="basis-1/3">
                            <p className="text-[8rem] font-bold strokenumber">
                                03
                            </p>
                            <p className="text-[1.875rem] font-bold uppercase text-teal-600">
                                Shop Management
                            </p>
                            <p className="text-[1.5rem] font-extralight">
                                จัดการร้านค้า สามารถเพิ่มลบหรือแก้ไข
                                สินค้าและโปรโมชันในร้านได้
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4 flex-row items-center">
                        <div className="grow">
                            <div className="w-full h-[0.0625rem] bg-black"></div>
                            <hr />
                        </div>
                        <div className="grow-0">
                            <p className="uppercase text-[2.25rem] text-center max-sm:text-[1rem]">
                                advisor — KACHORNPON Hiranchotepaisan
                            </p>
                        </div>
                        <div className="grow">
                            <div className="w-full h-[0.0625rem] bg-black"></div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 mx-auto h-full">
                    <p className="mt-32 text-center capitalize font-bold text-[6rem] mb-9 max-sm:text-[4rem]">
                        Video
                    </p>
                    <div className="aspect-video bg-black mx-auto rounded-md ">
                        <iframe
                            width="100%"
                            height="100%"
                            src="https://www.youtube.com/embed/xOAGH2gbhOA"
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="mx-auto">
                        <div className="flex h-full mt-9 max-sm:flex-col">
                            <div className="w-1/2 max-sm:w-full">
                                <p className="text-[2.5rem] font-bold capitalize max-sm:text-center max-sm:text-[1.5rem]">
                                    Showreel
                                </p>
                            </div>
                            <div className="w-1/2 max-sm:w-full">
                                <p className="text-right ml-auto text-[2.5rem] font-bold capitalize max-sm:hidden max-sm:text-[0rem]">
                                    Thanatron (2023)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="flex gap-14 h-full mt-[5.25rem] max-sm:flex-col">
                            <div className="w-1/2 max-sm:w-full max-lg:text-center">
                                <div className="aspect-video bg-black mx-auto rounded-md">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/2jSVlBNpE_U"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="text-[2.5rem] font-bold capitalize mt-10 max-sm:text-[1.5rem]">
                                    Demo
                                </p>
                            </div>
                            <div className="w-1/2 max-sm:w-full max-sm:text-center">
                                <div className="aspect-video bg-black mx-auto rounded-md">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://www.youtube.com/embed/Z0QModZv_C8"
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                                <p className="mr-20 text-[2.5rem] font-bold capitalize mt-10 max-lg:mr-0 max-sm:text-[1.5rem]">
                                    Other
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-[0.0625rem] bg-black mx-auto mt-[5.12rem]"></div>
                    </div>

                    <AboutMe data={{}} />
                </div>
                <OtherProject data={{}} />
                {/* footer */}
            </MainLayout>
        </>
    );
}
