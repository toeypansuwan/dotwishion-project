import { Link, Head } from "@inertiajs/react";
import { useEffect, useRef } from "react";

export default function Welcome({}) {
    const days = useRef();
    const hours = useRef();
    const minutes = useRef();
    const seconds = useRef();

    const SECOND = 1000;
    const MINUTE = SECOND * 60;
    const HOUR = MINUTE * 60;
    const DAY = HOUR * 24;
    const TARGET_TIMESTAMP = "July 10, 2023 00:00:00";

    const numberImages = {
        0: {
            url: "./image/number/number-d4-00.svg",
            base: "contain",
            md: "contain",
        },
        1: {
            url: "./image/number/number-d4-01.svg",
            base: "75%",
            md: "contain",
        },
        2: {
            url: "./image/number/number-d4-02.svg",
            base: "contain",
            md: "contain",
        },
        3: {
            url: "./image/number/number-d4-03.svg",
            base: "contain",
            md: "contain",
        },
        4: {
            url: "./image/number/number-d4-04.svg",
            base: "contain",
            md: "contain",
        },
        5: {
            url: "./image/number/number-d4-05.svg",
            base: "contain",
            md: "contain",
        },
        6: {
            url: "./image/number/number-d4-06.svg",
            base: "contain",
            md: "contain",
        },
        7: {
            url: "./image/number/number-d4-07.svg",
            base: "contain",
            md: "contain",
        },
        8: {
            url: "./image/number/number-d4-08.svg",
            base: "contain",
            md: "contain",
        },
        9: {
            url: "./image/number/number-d4-09.svg",
            base: "contain",
            md: "contain",
        },
    };
    const align = {
        0:'right',
        1:'left'
    }

    const countDown = () => {
        const now = new Date().getTime();
        const targer = new Date(TARGET_TIMESTAMP).getTime();
        const unixTimeLeft = targer - now;

        convertToImageNumber(days.current, Math.floor(unixTimeLeft / DAY));
        convertToImageNumber(
            hours.current,
            Math.floor((unixTimeLeft % DAY) / HOUR)
        );
        convertToImageNumber(
            minutes.current,
            Math.floor((unixTimeLeft % HOUR) / MINUTE)
        );
        convertToImageNumber(
            seconds.current,
            Math.floor((unixTimeLeft % MINUTE) / SECOND)
        );
    };

    const convertToImageNumber = (numberElement, number) => {
        // numberElement.innerHTML = "";
        let imageNumber = "";

        const fontNumber = number.toString();
        for (let i = 0; i < fontNumber.length; i++) {
            const digit = fontNumber[i];
            const imageUrl = numberImages[digit];

            if (fontNumber.length === 2) {
                if (imageUrl) {
                    numberElement.childNodes[
                        i
                    ].style.backgroundImage = `url('${imageUrl.url}')`;
                }
            } else {
                numberElement.childNodes[0].style.backgroundImage = `url('${numberImages[0].url}')`;
                if (imageUrl) {
                    numberElement.childNodes[1].style.backgroundImage = `url('${imageUrl.url}')`;
                }
            }
            numberElement.childNodes[i].className = `w-1/2 inline-block h-full bg-[length:${imageUrl.base}] md:bg-contain bg-no-repeat bg-${align[i]}`

            imageNumber += digit;
        }
        return imageNumber;
    };

    useEffect(() => {
        countDown();
        setInterval(countDown, SECOND);
    }, []);

    return (
        <>
            <Head title="Welcome" />
            <div className="h-screen overflow-hidden bg-[url('/image/bg-dotwishion-motion.jpeg')] bg-cover bg-bottom">
                <div className="md:p-10 p-3 h-full flex flex-col justify-between">
                    <div className="flex mb-3  justify-between">
                        <div className="gap-6 flex h-[3.8rem]  w-full lg:w-auto justify-between lg:justify-normal">
                            <a href="" className="block h-full">
                                <img
                                    src="/image/logo.svg"
                                    className="h-full"
                                    alt=""
                                />
                            </a>
                            <a
                                href="https://ict.su.ac.th/"
                                target="_blank"
                                className="block h-full"
                            >
                                <img
                                    src="/image/logo_silpakorn.svg"
                                    className="h-full hidden md:block"
                                    alt=""
                                />
                                <img
                                    src="/image/logo_silpakorn_sm.svg"
                                    className="h-full md:hidden"
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="max-w-[32.8rem] lg:block hidden">
                            <p className="uppercase text-white text-right text-base">
                                INTERACTIVE APPLICATION PROGRAMME •
                                iappsilpakorn
                                <br />
                                FACULTY OF INFORMATION AND COMMUNICATION
                                TECHNOLOGY
                                <br />
                                SILPAKORN UNIVERSITY
                            </p>
                        </div>
                    </div>
                    <div>
                        <div className="mx-auto max-w-[823px]">
                            <div className="bg-gradient-to-r from-transparent via-[rgba(217,217,217,0.50)] to-transparent backdrop-blur-sm shadow-sm md:px-12 px-2 md:py-6 py-2 border-[rgba(255,255,255,0.18)] border rounded-lg text-white text-center mb-6">
                                <h1 className="uppercase md:text-[2.5rem] font-bold text-[1.5rem] md:mb-0 mb-3 px-6 md:px-0">
                                    Something Big is Coming Soon!
                                </h1>
                                <p className="mb:px-6 px-0 uppercase">
                                    Our website is under construction, we are
                                    working very hard to giveyou the best
                                    experience with this one
                                </p>
                            </div>
                            <div className="flex max-w-[644px] gap-6 mx-auto">
                                <div className="w-1/4 text-center">
                                    <div ref={days} className="h-[4.3rem]">
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-01.svg')] bg-contain bg-no-repeat bg-right"></div>
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-04.svg')] bg-contain bg-no-repeat bg-left"></div>
                                    </div>
                                    <h2 className="inline-block w-full text-base md:text-4xl text-white drop-shadow-lg font-bold">
                                        Days
                                    </h2>
                                </div>
                                <div className="w-1/4 text-center">
                                    <div ref={hours} className="h-[4.3rem]">
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-01.svg')] bg-contain bg-no-repeat bg-right"></div>
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-04.svg')] bg-contain bg-no-repeat bg-left"></div>
                                    </div>
                                    <h2 className="inline-block w-full text-base md:text-4xl text-white drop-shadow-lg font-bold">
                                        Hours
                                    </h2>
                                </div>
                                <div className="w-1/4 text-center">
                                    <div ref={minutes} className="h-[4.3rem]">
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-01.svg')] bg-contain bg-no-repeat bg-right"></div>
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-04.svg')] bg-contain bg-no-repeat bg-left"></div>
                                    </div>
                                    <h2 className="inline-block w-full text-base md:text-4xl text-white drop-shadow-lg font-bold">
                                        Minutes
                                    </h2>
                                </div>
                                <div className="w-1/4 text-center">
                                    <div ref={seconds} className="h-[4.3rem]">
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-01.svg')] bg-contain bg-no-repeat bg-right"></div>
                                        <div className="w-1/2 inline-block h-full bg-[url('/image/number/number-d4-04.svg')] bg-contain bg-no-repeat bg-left"></div>
                                    </div>
                                    <h2 className="inline-block w-full text-base md:text-4xl text-white drop-shadow-lg font-bold">
                                        Seconds
                                    </h2>
                                </div>
                            </div>
                            <div className="flex place-content-center overflow-hidden w-full h-[20.5rem] md:mt-16 xl:-mt-8">
                                <video
                                    className="aspect-square  max-w-[800px] min-w-[600px] lg:max-w-[600px]"
                                    autoPlay
                                    disableRemotePlayback
                                    loop
                                    playsInline
                                    muted
                                >
                                    <source
                                        src="/image/balloon-non-bg.mp4"
                                        type='video/mp4; codecs="hvc1"'
                                    />
                                    <source
                                        src="/image/balloon-non-bg.webm"
                                        type="video/webm"
                                    />
                                </video>
                            </div>
                        </div>
                    </div>
                    <div className="">
                    <div className="absolute left-0 bottom-0 w-full md:p-10 p-3 flex justify-between items-end">
                        <div className="">
sascsacsas
                        </div>
                        <div className="relative">
                            <div className="xl:hidden block peer">
                                <img src="/image/icon/i-link.svg" alt="" />
                            </div>
                            <div className="flex  h-full gap-7 xl:relative absolute  left-1/2 -translate-x-1/2 w-full  xl:bg-transparent flex-col xl:flex-row">
                                <a href="" className="lg:block">
                                    <img className="xl:h-7 xl:w-7 md:w-[80%] mx-auto" src="/image/icon/i-fb.svg" alt="" />
                                </a>
                                <a href="" className="block">
                                    <img className="xl:h-7 xl:w-7 md:w-[80%] mx-auto" src="/image/icon/i-ig.svg" alt="" />
                                </a>
                                <a href="" className="block">
                                    <img className="xl:h-7 xl:w-7 md:w-[80%] mx-auto" src="/image/icon/i-tw.svg" alt="" />
                                </a>
                                <a href="" className="block">
                                    <img className="xl:h-7 xl:w-7 md:w-[80%] mx-auto" src="/image/icon/i-y.svg" alt="" />
                                </a>
                                <a href="" className="block">
                                    <img className="xl:h-7 xl:w-7 md:w-[80%] mx-auto" src="/image/icon/i-me.svg" alt="" />
                                </a>
                                <a href="" className="block">
                                    <img className="xl:h-7 xl:w-7 md:w-[80%] mx-auto" src="/image/icon/i-p.svg" alt="" />
                                </a>
                                <a href="" className="block">
                                    <img className="xl:h-7 xl:w-7 md:w-[80%] mx-auto" src="/image/icon/i-tk.svg" alt="" />
                                </a>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </>
    );
}
