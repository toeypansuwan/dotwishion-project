import React from "react";

const MainLayout = ({ children }) => {
    return (
        <>
            <header></header>
            <main>{children}</main>
            <footer>
                <div className="container mx-auto h-full mb-6">
                    <p className="uppercase text-center mt-10">our sponsor</p>
                    <img
                        className="mx-auto w-[9.875rem] mt-12"
                        src="/image/logo/charmiss.svg"
                    />

                    <img
                        className="mx-auto w-[16.1875rem] mt-12"
                        src="/image/logo/cenwo.svg"
                    />
                    <div className="flex flex-row mt-20 gap-x-6 gap-y-8 items-center max-md:grid-cols-6 max-md:grid">
                        <div className="grow max-md:col-span-2">
                            <img
                                className="mx-auto"
                                src="/image/logo/krung.svg"
                            />
                        </div>
                        <div className="grow max-md:col-span-2">
                            <img
                                className="mx-auto"
                                src="/image/logo/duck.svg"
                            />
                        </div>
                        <div className="grow max-md:col-span-2">
                            <img
                                className="mx-auto"
                                src="/image/logo/txp.svg"
                            />
                        </div>
                        <div className="grow max-md:col-span-3">
                            <img
                                className="lg:mx-auto ml-auto"
                                src="/image/logo/merge.svg"
                            />
                        </div>
                        <div className="grow max-md:col-span-3">
                            <img
                                className="lg:mx-auto"
                                src="/image/logo/digito.svg"
                            />
                        </div>
                        <div className="grow max-md:col-span-3">
                            <img
                                className="lg:mx-auto ml-auto"
                                src="/image/logo/extract.svg"
                            />
                        </div>
                        <div className="grow max-md:col-span-3">
                            <img
                                className="lg:mx-auto"
                                src="/image/logo/comeram.svg"
                            />
                        </div>
                        <div className="grow max-md:col-span-full">
                            <img
                                className="mx-auto"
                                src="/image/logo/modco.svg"
                            />
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
