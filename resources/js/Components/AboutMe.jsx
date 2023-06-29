import React from "react";

const AboutMe = () => {
    return (
        <div className="">
            <div className="relative my-32 max-w-[38rem] mx-auto">
                <div className=" absolute lg:-top-12 md:-top-20 -top-10 lg:-left-36 md:-left-16 -z-10">
                    <h1 className="md:text-[8rem] text-[4rem] font-bold stroke uppercase">
                        About
                    </h1>
                </div>
                <div className=" absolute md:bottom-24 md:-right-6 right-0 bottom-36 -z-10">
                    <h1 className="md:text-[8rem] text-[4rem] font-bold stroke uppercase">
                        Me
                    </h1>
                </div>
                <div className="flex items-center gap-6 justify-center mb-6">
                    <div className="md:flex flex-col gap-6 hidden">
                        <a
                            href=""
                            target="_blank"
                            class="flex justify-center items-center text-4xl text-white rounded-tl-full rounded-tr-full rounded-br-0 rounded-bl-full bg-gradient-to-b from-blue-600 to-indigo-900 w-24 h-24"
                        >
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                        <a
                            href=""
                            target="_blank"
                            class="flex justify-center items-center text-4xl text-white rounded-full bg-[#010D4F] w-24 h-24"
                        >
                            <i class="fa-brands fa-linkedin-in"></i>
                        </a>
                    </div>
                    <div className="border-2 p-5 md:w-[24.5rem] md:h-[21rem] w-[14.1rem] rounded-full">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="/image/photo.png"
                            alt=""
                        />
                    </div>
                    <div className="md:flex flex-col gap-6 hidden">
                        <a
                            href=""
                            target="_blank"
                            class="flex justify-center items-center text-4xl text-white rounded-full bg-[#010D4F] w-24 h-24"
                        >
                            <i class="fa-regular fa-user"></i>
                        </a>
                        <a
                            href=""
                            target="_blank"
                            class="flex justify-center items-center text-4xl text-white  rounded-tl-0 rounded-tr-full rounded-br-full rounded-bl-full bg-gradient-to-b from-indigo-900 to-blue-600 w-24 h-24"
                        >
                            <i class="fa-regular fa-address-card"></i>
                        </a>
                    </div>
                </div>
                <p className="text-center md:text-[1.5rem] text-[#2B6CCC] mb-6">
                    Design and Development of Physical and Sexual Crimes Alert
                    Application
                </p>
                <div className="flex gap-3 justify-between md:hidden">
                    <a
                        href=""
                        target="_blank"
                        class="flex justify-center items-center text-4xl text-white rounded-tl-full rounded-tr-full rounded-br-0 rounded-bl-full bg-gradient-to-b from-blue-600 to-indigo-900 w-16 h-16"
                    >
                        <i class="fa-regular fa-envelope"></i>
                    </a>
                    <a
                        href=""
                        target="_blank"
                        class="flex justify-center items-center text-4xl text-white rounded-full bg-[#010D4F] w-16 h-16"
                    >
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a
                        href=""
                        target="_blank"
                        class="flex justify-center items-center text-4xl text-white rounded-full bg-[#010D4F] w-16 h-16"
                    >
                        <i class="fa-regular fa-user"></i>
                    </a>
                    <a
                        href=""
                        target="_blank"
                        class="flex justify-center items-center text-4xl text-white  rounded-tl-0 rounded-tr-full rounded-br-full rounded-bl-full bg-gradient-to-b from-indigo-900 to-blue-600 w-16 h-16"
                    >
                        <i class="fa-regular fa-address-card"></i>
                    </a>
                </div>
            </div>
            <div className="relative py-5 bg-gradient-to-t from-indigo-900 to-blue-600">
                <h1>Other PROJECT</h1>

            </div>
        </div>
    );
};

export default AboutMe;
