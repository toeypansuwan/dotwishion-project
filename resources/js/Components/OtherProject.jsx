import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OtherProject = () => {
    return (
        <>
            <div className="relative py-16 bg-gradient-to-t from-indigo-900 to-blue-600">
                <h1 className="text-center xl:text-[8rem] md:text-[7rem] text-[4rem] text-[rgba(255,255,255,0.21)] font-bold uppercase">
                    Other PROJECT
                </h1>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    loop={true}
                    breakpoints={{
                        0:{
                            slidesPerView: 1.5,
                            spaceBetween: 20
                        },
                        390:{
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 40,
                        },
                        1024:{
                            slidesPerView: 4,
                            spaceBetween: 50,
                        }
                    }}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    className="mySwiper xl:-mt-24 lg:-mt-16"
                >
                    <SwiperSlide>
                        <a href="">
                            <div className="w-full xl:h-[28rem] lg:h-[20rem] md:h-[32rem] h-[26rem] bg-[url('/image/model.png')] bg-cover bg-center bg-no-repeat rounded-t-full mb-3 "></div>
                            <h2 className="text-white text-[1.5rem] uppercase">
                                Animal Game
                            </h2>
                            <p className="text-white text-[0.9rem] uppercase font-thin">
                                Design & Development — Thanatron
                            </p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="w-full xl:h-[28rem] lg:h-[20rem] md:h-[32rem] h-[26rem] bg-[url('/image/model.png')] bg-cover bg-center bg-no-repeat rounded-t-full mb-3 "></div>
                            <h2 className="text-white text-[1.5rem] uppercase">
                                Animal Game
                            </h2>
                            <p className="text-white text-[0.9rem] uppercase font-thin">
                                Design & Development — Thanatron
                            </p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="w-full xl:h-[28rem] lg:h-[20rem] md:h-[32rem] h-[26rem] bg-[url('/image/model.png')] bg-cover bg-center bg-no-repeat rounded-t-full mb-3 "></div>
                            <h2 className="text-white text-[1.5rem] uppercase">
                                Animal Game
                            </h2>
                            <p className="text-white text-[0.9rem] uppercase font-thin">
                                Design & Development — Thanatron
                            </p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="w-full xl:h-[28rem] lg:h-[20rem] md:h-[32rem] h-[26rem] bg-[url('/image/model.png')] bg-cover bg-center bg-no-repeat rounded-t-full mb-3 "></div>
                            <h2 className="text-white text-[1.5rem] uppercase">
                                Animal Game
                            </h2>
                            <p className="text-white text-[0.9rem] uppercase font-thin">
                                Design & Development — Thanatron
                            </p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="w-full xl:h-[28rem] lg:h-[20rem] md:h-[32rem] h-[26rem] bg-[url('/image/model.png')] bg-cover bg-center bg-no-repeat rounded-t-full mb-3 "></div>
                            <h2 className="text-white text-[1.5rem] uppercase">
                                Animal Game
                            </h2>
                            <p className="text-white text-[0.9rem] uppercase font-thin">
                                Design & Development — Thanatron
                            </p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="w-full xl:h-[28rem] lg:h-[20rem] md:h-[32rem] h-[26rem] bg-[url('/image/model.png')] bg-cover bg-center bg-no-repeat rounded-t-full mb-3 "></div>
                            <h2 className="text-white text-[1.5rem] uppercase">
                                Animal Game
                            </h2>
                            <p className="text-white text-[0.9rem] uppercase font-thin">
                                Design & Development — Thanatron
                            </p>
                        </a>
                    </SwiperSlide>
                    <SwiperSlide>
                        <a href="">
                            <div className="w-full xl:h-[28rem] lg:h-[20rem] md:h-[32rem] h-[26rem] bg-[url('/image/model.png')] bg-cover bg-center bg-no-repeat rounded-t-full mb-3 "></div>
                            <h2 className="text-white text-[1.5rem] uppercase">
                                Animal Game
                            </h2>
                            <p className="text-white text-[0.9rem] uppercase font-thin">
                                Design & Development — Thanatron
                            </p>
                        </a>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default OtherProject;
