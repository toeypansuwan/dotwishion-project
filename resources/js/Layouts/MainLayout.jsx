import React from "react";

const MainLayout = ({ children }) => {
    return (
        <>
            <header></header>
            <main>{children}</main>
            <footer>
                <div className="container mx-auto h-full mb-6">
                    <p className="uppercase text-center mt-10">our sponsor</p>

                    <a href="https://charmiss.co/" target="_blank">
                        <img
                            className="mx-auto w-[9.875rem] mt-12"
                            src="/image/logo/charmiss.svg"
                        />
                    </a>

                    <a
                        href="https://www.centralworld.co.th/en/home"
                        target="_blank"
                    >
                        <img
                            className="mx-auto w-[16.1875rem] mt-12"
                            src="/image/logo/cenwo.svg"
                        />
                    </a>
                    <div className="flex flex-row mt-20 gap-x-6 gap-y-8 items-center max-md:grid-cols-6 max-md:grid">
                        <div className="grow max-md:col-span-2">
                            <a
                                href="https://www.krungsrifinnovate.com/en/Home"
                                target="_blank"
                            >
                                <img
                                    className="mx-auto"
                                    src="/image/logo/krung.svg"
                                />
                            </a>
                        </div>
                        <div className="grow max-md:col-span-2">
                            <a href="https://ducklab.co.th/" target="_blank">
                                <img
                                    className="mx-auto"
                                    src="/image/logo/duck.svg"
                                />
                            </a>
                        </div>
                        <div className="grow max-md:col-span-2">
                            <a href="https://txppetro.com/" target="_blank">
                                <img
                                    className="mx-auto"
                                    src="/image/logo/txp.svg"
                                />
                            </a>
                        </div>
                        <div className="grow max-md:col-span-3">
                            <a href="https://www.merge.co.th/" target="_blank">
                                <img
                                    className="lg:mx-auto ml-auto"
                                    src="/image/logo/merge.svg"
                                />
                            </a>
                        </div>
                        <div className="grow max-md:col-span-3">
                            <a
                                href="https://www.digitopolisstudio.com/"
                                target="_blank"
                            >
                                <img
                                    className="lg:mx-auto"
                                    src="/image/logo/digito.svg"
                                />
                            </a>
                        </div>
                        <div className="grow max-md:col-span-3">
                            <a
                                href="https://www.facebook.com/hashtag/funcxextract"
                                target="_blank"
                            >
                                <img
                                    className="lg:mx-auto ml-auto"
                                    src="/image/logo/extract.svg"
                                />
                            </a>
                        </div>
                        <div className="grow max-md:col-span-3">
                            <a
                                href="https://funcslash.com/comeraam/"
                                target="_blank"
                            >
                                <img
                                    className="lg:mx-auto"
                                    src="/image/logo/comeram.svg"
                                />
                            </a>
                        </div>
                        <div className="grow max-md:col-span-full">
                            <a href="https://mod---co.com/" target="_blank">
                                <img
                                    className="mx-auto"
                                    src="/image/logo/modco.svg"
                                />
                            </a>
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
