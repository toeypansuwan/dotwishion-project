import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from '@inertiajs/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

const OtherProject = ({ziggy,projects}) => {
    return (
        <>
            <div className="relative py-16 bg-gradient-to-t from-indigo-900 to-blue-600">
                <h1 className="text-center xl:text-[8rem] md:text-[5rem] text-[2rem] text-[rgba(255,255,255,0.21)] font-bold uppercase">
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
                    className="mySwiper"
                >
                   {projects.map(project=>{
                     return <SwiperSlide key={project.student_id}>
                     <Link href={route('projects.show',project.student_id)}>
                         <div className={`w-full aspect-square  bg-cover bg-center bg-no-repeat rounded-xl mb-3 `} style={{backgroundImage:`url(${ziggy.url}/image/img_aboutme/${project.img_aboutme})`}}></div>
                         <div className=" grid grid-cols-4 gap-4">
                             <div className=" col-span-1">
                                 <img src={`/image/img_projecticon/${project.img_projecticon}`} className="w-full aspect-square  object-cover rounded-full" alt="" />
                             </div>
                             <div className="col-span-3">
                             <h2 className="text-white text-[1.5rem] uppercase">
                                 Animal Game
                             </h2>
                             <p className="text-white text-[0.9rem] uppercase font-thin">
                                 Design & Development — Thanatron
                             </p>
                             </div>
                         </div>
                     </Link>
                 </SwiperSlide>
                   })}
                </Swiper>
            </div>
        </>
    );
};

export default OtherProject;
