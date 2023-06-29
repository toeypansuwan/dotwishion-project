import React from "react";

const AboutMe = () => {
    return (
        <div className="">
            <div className="relative my-32 max-w-[38rem] mx-auto">
                <div className=" absolute -top-12 -left-36 -z-10">
                <h1 className="text-[8rem] font-bold stroke uppercase">About</h1>
                </div>
                <div className=" absolute bottom-24 -right-6 -z-10">
                <h1 className="text-[8rem] font-bold stroke uppercase">Me</h1>
                </div>
                <div className="flex items-center gap-6 justify-center mb-6">
                    <div className="flex flex-col gap-6">
                        <div class="flex place-items-center rounded-tl-full rounded-tr-full rounded-br-0 rounded-bl-full bg-gradient-to-b from-blue-600 to-indigo-900 w-24 h-24"></div>
                        <div class="flex place-items-center rounded-full bg-[#010D4F] w-24 h-24"></div>
                    </div>
                    <div className="border-2 p-5 w-[24.5rem] h-[36.4rem] rounded-full">
                        <img
                            className="w-full h-full object-cover rounded-full"
                            src="/image/photo.png"
                            alt=""
                        />
                    </div>
                    <div className="flex flex-col gap-6">
                        <div class="flex place-items-center rounded-full bg-[#010D4F] w-24 h-24"></div>
                        <div class="flex place-items-center  rounded-tl-0 rounded-tr-full rounded-br-full rounded-bl-full bg-gradient-to-b from-indigo-900 to-blue-600 w-24 h-24"></div>
                    </div>
                </div>
                <p className="text-center text-[1.5rem] text-[#2B6CCC]">
                    Design and Development of Physical and Sexual Crimes Alert
                    Application
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
