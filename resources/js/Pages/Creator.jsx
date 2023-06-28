import { Head } from "@inertiajs/react";

export default function Creator({}) {
    return (
        <>
            <div className="h-screen bg-[url('/image/bg-creator.png')] bg-no-repeat bg-cover">
                <div className="container mx-auto px-3 h-full">
                    <div className="flex h-full relative  overflow-hidden">
                        <div className="w-1/2">
                            <img
                                className="w-[9.8125rem] h-[9.8125rem] mt-20 ml-20"
                                src="/image/circle.png"
                            />
                            <h1 className="font-bold text-[6rem] w-[22.8125rem] leading-[6rem] ml-20 mt-10">
                                ฐิติวรรณ เฮงจำรัส
                            </h1>
                            <h1 className="text-[1.5rem] ml-20 mt-5">
                                xxxxxxxx
                            </h1>
                        </div>
                        <div className="w-1/2 ">
                            <img
                                src="/image/aommy.png"
                                className="w-[47.0625rem] absolute bottom-0 left-2/4 z-10"
                            />
                        </div>
                        <h1 className="text-[11.25rem] absolute z-0 text-center text-stone-400/25 hyphens-none bottom-1 text-clip w-full">
                            TRUCK&shy;ROUNDING
                        </h1>
                    </div>
                </div>
            </div>
        </>
    );
}
