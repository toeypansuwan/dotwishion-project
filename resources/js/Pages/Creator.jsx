import AboutMe from "@/Components/AboutMe";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Creator({}) {
    return (
        <>
            <MainLayout>
                <div className="h-screen bg-[url('/image/bg-creator.png')] bg-no-repeat bg-cover">
                    <div className="container mx-auto px-3 h-full">
                        <div className="flex h-full relative  overflow-hidden">
                            <div className="w-1/2">
                                <img
                                    className="w-[9.8125rem] h-[9.8125rem] mt-20 ml-20"
                                    src="/image/circle.png"
                                />
                                <h1 className="font-bold text-[6rem] w-[22.8125rem] leading-[6rem] ml-20 mt-10 bg-gradient-to-r from-indigo-950 to-sky-400 bg-clip-text text-transparent">
                                    ฐิติวรรณ เฮงจำรัส
                                </h1>
                                <h1 className="text-[1.5rem] ml-20 mt-5">
                                    621310345
                                </h1>
                            </div>
                            <div className="w-1/2 ">
                                <img
                                    src="/image/aommy.png"
                                    className="w-[47.0625rem] absolute bottom-0 left-2/4 z-10"
                                />
                            </div>
                            <h1 className="text-[11.25rem] absolute z-0 text-center text-stone-400/25 hyphens-none bottom-1 text-clip w-full stroke font-extrabold">
                                TRUCK&shy;ROUNDING
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto h-full">
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
                            <p className="mt-28 font-bold uppercase text-[2rem] text-indigo-950">
                                Animal Game
                            </p>
                            <p className="mt-10 text-blue-400 text-[1.875rem]">
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
                            <div className="flex mt-14">
                                <div className="w-[6rem] h-[6rem]">
                                    <img src="/image/htmlpic.png" />
                                </div>
                                <div className="w-[6rem] h-[6rem]">
                                    <img src="/image/htmlpic.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto h-full">
                    <p className="text-[2rem] mt-32">FUCTION</p>
                    <p className="text-[3rem] max-w-[41.1875rem] capitalize font-bold text-indigo-950">
                        functions available on the website.
                    </p>
                    <div className="flex flex-row gap-x-10 px-6 py-24 max-lg:flex-col max-lg:gap-y-10">
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
                            <p className="uppercase text-[2.25rem] text-center">
                                advisor — KACHORNPON Hiranchotepaisan
                            </p>
                        </div>
                        <div className="grow">
                            <div className="w-full h-[0.0625rem] bg-black"></div>
                        </div>
                    </div>
                </div>
                <div className="container mx-auto h-full">
                    <p className="mt-32 text-center capitalize font-bold text-[6rem] mb-9">
                        Video
                    </p>
                    <div className="h-[47.3125rem] bg-black mx-auto rounded-md max-lg:h-[21.4375rem]">
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
                        <div className="flex h-full mt-9">
                            <div className="w-1/2">
                                <p className="text-[2.5rem] font-bold capitalize">
                                    Showreel
                                </p>
                            </div>
                            <div className="w-1/2">
                                <p className="text-right ml-auto text-[2.5rem] font-bold capitalize">
                                    Thanatron (2023)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="flex gap-14 h-full mt-[5.25rem] max-lg:flex-col">
                            <div className="w-1/2 max-lg:w-full max-lg:text-center">
                                <div className="h-[21.4375rem] bg-black mx-auto rounded-md">
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
                                <p className="text-[2.5rem] font-bold capitalize mt-10">
                                    Demo
                                </p>
                            </div>
                            <div className="w-1/2 max-lg:w-full max-lg:text-center">
                                <div className="h-[21.4375rem] bg-black mx-auto rounded-md">
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
                                <p className="mr-20 text-[2.5rem] font-bold capitalize mt-10">
                                    Other
                                </p>
                            </div>
                        </div>

                        <div className="w-full h-[0.0625rem] bg-black mx-auto mt-[5.12rem]"></div>
                    </div>

                    <AboutMe data={{}} />
                </div>
                {/* footer */}
            </MainLayout>
        </>
    );
}
