import AboutMe from "@/Components/AboutMe";
import OtherProject from "@/Components/OtherProject";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Creator({}) {
    return (
        <>
            <MainLayout>
                <div className="h-screen bg-[url('/image/bg-creator.png')] bg-no-repeat bg-cover">
                    <div className="container mx-auto md:px-20 px-6 h-full overflow-hidden relative">
                        <div className=" absolute xl:bottom-2 lg:bottom-[20%] bottom-[25%] md:left-16 left-2">
                            <h1 className="stroke xl:text-center xl:text-[8rem] lg:text-[10rem] text-[5rem] font-bold leading-none">
                                TRUCK&shy;ROUNDING
                            </h1>
                        </div>
                        <div className="flex h-full flex-wrap">
                            <div className="md:w-1/2  w-full lg:mt-12 md:mt-24 mt-3">
                                <div className="flex md:block items-center md:mt-0 mt-10 justify-between">
                                    <img
                                        className="md:w-26 md:h-26 w-20 h-20 md:mb-4"
                                        src="/image/circle.png"
                                    />
                                    <div className="">
                                        <h1 className="font-bold lg:text-[6rem] md:text-[4rem] text-[2.75rem] leading-tight mb-4">
                                            ฐิติวรรณ<br/>เฮงจำรัส
                                        </h1>
                                        <h1 className="md:text-[1.75rem] text-[1.5rem]">
                                            621310345
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="md:w-1/2 w-full">
                                <img
                                    src="/image/aommy.png"
                                    className="absolute max-w-[80rem] xl:w-[40rem] lg:w-[80rem] md:w-[50rem] w-[35rem] bottom-0 xl:left-3/4 lg:left-[62%] md:left-[65%] left-1/2 -translate-x-1/2"
                                />
                            </div>
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
