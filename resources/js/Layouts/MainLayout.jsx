import React from "react";

const MainLayout = ({children}) => {
    return (
        <>
            <header>
                
            </header>
            <main>
                {children}
            </main>
            <footer>
                <div className="container mx-auto h-full mb-6">
                    <img
                        className="mx-auto w-[9.875rem] mt-12"
                        src="/image/charmiss.png"
                    />
                    <img
                        className="mx-auto w-[16.1875rem] mt-12"
                        src="/image/cenwo.png"
                    />
                    <div class="flex flex-row mt-20 gap-4 items-center">
                        <div class="basis-1/12">
                            <img className="mx-auto" src="/image/Asset-1.png" />
                        </div>
                        <div class="basis-1/12">
                            <img className="mx-auto" src="/image/Asset-2.png" />
                        </div>
                        <div class="basis-2/12">
                            <img className="mx-auto" src="/image/Asset-3.png" />
                        </div>
                        <div class="basis-2/12">
                            <img className="mx-auto" src="/image/Asset-4.png" />
                        </div>
                        <div class="basis-2/12">
                            <img className="mx-auto" src="/image/Asset-5.png" />
                        </div>
                        <div class="basis-2/12">
                            <img className="mx-auto" src="/image/Asset-6.png" />
                        </div>
                        <div class="basis-2/12">
                            <img className="mx-auto" src="/image/Asset-7.png" />
                        </div>
                    </div>
                </div>
                <div className=" w-full h-[11.375rem] bg-black">
                    <p className="font-light text-white uppercase text-center pt-16">
                        Published by
                    </p>
                    <p className="font-light text-white text-center">
                        FACULTY OF INFORMATION AND COMMUNICATION TECHNOLOGY,
                        SILPAKORN UNIVERSITY
                    </p>
                </div>
            </footer>
        </>
    );
};

export default MainLayout;
