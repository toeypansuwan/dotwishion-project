import AboutMe from "@/Components/AboutMe";
import OtherProject from "@/Components/OtherProject";
import MainLayout from "@/Layouts/MainLayout";
import { Head } from "@inertiajs/react";

export default function Creator({projects,student,ziggy}) {
    const splitAndFormartTrim=(text)=>{
        const values = text.split(",").map((item) => item.trim());
        return values;
    }
    const convertToEmbeddedUrl = (youtubeUrl)=>{
        const embeddedUrl = youtubeUrl.replace("youtu.be", "www.youtube.com/embed");
        return embeddedUrl;
    }
    return (
        <>
        <Head title={`โปรเจ็ค ${student.project_nickname_th} - โดย ${student.full_name_th} ${student.sur_name_th}`}/>
            <MainLayout>
                <div className={`h-screen bg-no-repeat bg-cover bg-center border-b-2`} style={{backgroundImage:`url(${ziggy.url}/image/img_aboutme/${student.img_aboutme})`}}>
                    <div className="container mx-auto lg:px-20 px-6 h-full overflow-hidden relative py-4">
                        <div className="flex h-full flex-col justify-between">
                            <div className="lg:mt-6 md:mt-16 mt-3">
                                <div className="flex flex-col justify-between md:mt-0 mt-10">
                                    <div className="">
                                    <img
                                        className="lg:w-26 lg:h-26 md:w-32 md:h-32  w-20 h-20 mb-4 rounded-full object-cover text-white drop-shadow-lg"
                                        src={`/image/img_projecticon/${student.img_projecticon}`}
                                    />
                                    </div>
                                    <div className="">
                                        <h1 className="font-bold lg:text-[5rem] text-white drop-shadow-lg md:text-[2.5rem] text-[2.5rem] leading-tight uppercase">
                                        {student.project_nickname_en} 
                                        </h1>
                                        <h1 className="md:text-[3rem] text-white drop-shadow-lg text-[1.5rem] font-thin">
                                            {student.student_id} 
                                        </h1>
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h1 className="font-bold lg:text-[8rem] md:text-[7rem] text-[4rem] stroke leading-none uppercase">{student.project_nickname_en} </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container px-4 mx-auto h-full mb-32">
                    <p className="underline underline-offset-8 uppercase text-[2rem] text-center mt-24 mb-12">
                    {student.project_type} 
                    </p>
                    <div className="flex gap-4 max-lg:flex-col ">
                        <div className="w-1/2 max-lg:order-last max-lg:w-full h-full lg:h-[30rem]">
                            <img
                                src={`/image/img_projectpng/${student.img_projectpng}`}
                                className="h-full w-full object-contain mx-auto"
                            />
                        </div>
                        <div className="w-1/2 max-lg:w-full max-lg:text-center">
                            <p className=" font-bold uppercase text-[2rem] text-indigo-950 max-sm:text-[1.75rem]">
                            {student.project_nickname_en} 
                            </p>
                            <p className="mt-10 text-blue-400 text-[1.875rem] max-sm:text-[1.75rem]">
                            {student.project_name_en} 
                            </p>
                            <p className="font-extralight text-[1.875rem]">
                                {student.project_details}
                            </p>
                            <p className="mt-7 font-extralight text-[1rem]">
                                Design & Development — {student.full_name_en}
                            </p>
                            <div className="flex flex-wrap mt-5 gap-4">
                             {splitAndFormartTrim(student.project_stack_1).map((item,i)=>{
                                return (<div key={i} className="bg-[#E3E3E3] rounded-full px-4">#{item}</div>)
                             })}
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
                                {student.project_func_1}
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
                            {student.project_func_2}
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
                            {student.project_func_3}
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
                                advisor — {student.project_advisor}
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
                        {student.url_showreel?<iframe
                            width="100%"
                            height="100%"
                            src={convertToEmbeddedUrl(student.url_showreel)}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        ></iframe>:null}
                        
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
                                    {student.full_name_en} (2023)
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mx-auto">
                        <div className="flex gap-14 h-full mt-[5.25rem] max-sm:flex-col">
                            <div className="w-1/2 max-sm:w-full max-lg:text-center">
                                <div className="aspect-video bg-black mx-auto rounded-md">
                                    {
                                        student.url_demo?<iframe
                                        width="100%"
                                        height="100%"
                                        src={convertToEmbeddedUrl(student.url_demo)}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        allowFullScreen
                                    ></iframe>:null
                                    }
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
                                        src={convertToEmbeddedUrl(student.url_interview)}
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

                    <AboutMe student={student} />
                </div>
                <OtherProject projects={projects} ziggy={ziggy}/>
                {/* footer */}
            </MainLayout>
        </>
    );
}
