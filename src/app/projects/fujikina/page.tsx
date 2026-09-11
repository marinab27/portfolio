import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FujikinaStory from "@/components/projects/FujikinaStory";
import BackToTop from "@/components/BackToTop";
import InteractiveBackground from "@/components/InteractiveBackground";

export default function FujikinaPage() {
    return (
        <>
            <InteractiveBackground />

            <main className="relative z-10">
                <div className="px-5 py-6 md:px-10 lg:px-20 xl:px-32">
                    <Header />

                    {/* =========================
              PROJECT INTRO
          ========================== */}

                    <section className="pt-16 md:pt-20 lg:pt-24">
                        <h1
                            className="
                max-w-[1200px]
                text-[clamp(3.2rem,10vw,6.8rem)]
                font-normal
                leading-[0.92]
                tracking-[-0.05em]
              "
                        >
                            Fujikina Madrid 2026
                        </h1>

                        <p
                            className="
                mt-5
                max-w-[720px]
                text-base
                leading-[1.45]

                md:mt-6
                md:text-xl
              "
                        >
                            Visual identity and art direction for Fujifilm&apos;s annual
                            photography event in Madrid.
                        </p>

                        {/* PROJECT META */}
                        <div
                            className="
                mt-10
                grid
                grid-cols-2
                gap-x-6
                gap-y-8
                border-t
                border-[var(--line)]
                pt-6

                md:mt-12
                md:grid-cols-12
                md:gap-4
                md:pt-7
              "
                        >
                            {/* CLIENT */}
                            <div className="md:col-span-3">
                                <p className="mb-2 text-[10px] uppercase md:text-xs">
                                    Client
                                </p>

                                <p className="text-sm md:text-base">
                                    Fujifilm
                                </p>
                            </div>

                            {/* ROLE */}
                            <div className="md:col-span-3">
                                <p className="mb-2 text-[10px] uppercase md:text-xs">
                                    Role
                                </p>

                                <p className="text-sm leading-[1.35] md:text-base">
                                    Art Direction
                                    <br />
                                    Visual Identity
                                </p>
                            </div>

                            {/* YEAR */}
                            <div className="md:col-span-3">
                                <p className="mb-2 text-[10px] uppercase md:text-xs">
                                    Year
                                </p>

                                <p className="text-sm md:text-base">
                                    2026
                                </p>
                            </div>

                            {/* LOCATION */}
                            <div className="md:col-span-3">
                                <p className="mb-2 text-[10px] uppercase md:text-xs">
                                    Location
                                </p>

                                <p className="text-sm md:text-base">
                                    Madrid, Spain
                                </p>
                            </div>
                        </div>
                    </section>
                </div>

                {/* =========================
            PROJECT STORY
        ========================== */}

                <FujikinaStory />
            </main>

            <Footer />

            <BackToTop />
        </>
    );
}