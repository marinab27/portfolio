"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type StoryImage = {
    src: string;
    alt: string;
    aspect?: string;
    fit?: "cover" | "contain";
    position?: string;
};

type StoryScene = {
    id: string;
    layout: "single" | "duo" | "grid";
    images: StoryImage[];
};

type StorySection = {
    id: string;
    title: string;
    text?: string;
    scenes: StoryScene[];
};

const sections: StorySection[] = [
    /* =========================
       THE CHALLENGE
    ========================== */
    {
        id: "challenge",
        title: "The Challenge",
        text:
            "The challenge was to create a distinctive identity for the 2026 edition of Fujikina Madrid while remaining connected to both Fujifilm and the city hosting the event. The system needed to work consistently across very different formats, from digital communication and OOH to signage, merchandise and the event itself.",
        scenes: [
            {
                id: "challenge-main",
                layout: "single",
                images: [
                    {
                        src: "/projects/fujikina/challenge-01.jpg",
                        alt: "Fujikina Madrid 2026 identity applied to the exhibition space",
                        aspect: "4/3",
                        fit: "cover",
                        position: "center",
                    },
                ],
            },
        ],
    },

    /* =========================
       THE IDEA
    ========================== */
    {
        id: "idea",
        title: "The Idea",
        text:
            "The identity brings together two recognizable symbols: Madrid’s carnation and the rising sun, creating a visual connection between the city and Fujifilm’s Japanese heritage.",
        scenes: [
            {
                id: "idea-logo",
                layout: "single",
                images: [
                    {
                        src: "/projects/fujikina/idea-logo.jpg",
                        alt: "Fujikina Madrid 2026 visual identity and logo",
                        aspect: "4/3",
                        fit: "contain",
                        position: "center",
                    },
                ],
            },
            {
                id: "idea-key-visual",
                layout: "single",
                images: [
                    {
                        src: "/projects/fujikina/idea-campaign.jpg",
                        alt: "Fujikina Madrid 2026 campaign key visual",
                        aspect: "16/6",
                        fit: "contain",
                        position: "center",
                    },
                ],
            },
        ],
    },

    /* =========================
       VISUAL DIRECTION
    ========================== */
    {
        id: "visual-direction",
        title: "Visual Direction",
        text:
            "The concept evolved into a flexible visual system built around modular grids inspired by Madrid’s traditional corralas. This structure allowed the identity to adapt across formats while maintaining a recognizable visual language throughout the campaign.",
        scenes: [
            {
                id: "visual-ooh",
                layout: "duo",
                images: [
                    {
                        src: "/projects/fujikina/visual-marquesina.jpg",
                        alt: "Fujikina Madrid campaign on a street display",
                        aspect: "3/4",
                        fit: "contain",
                        position: "center",
                    },
                    {
                        src: "/projects/fujikina/visual-bus.jpg",
                        alt: "Fujikina Madrid campaign applied to a city bus",
                        aspect: "4/3",
                        fit: "contain",
                        position: "center",
                    },
                ],
            },
            {
                id: "visual-signage",
                layout: "single",
                images: [
                    {
                        src: "/projects/fujikina/visual-signage.jpg",
                        alt: "Fujikina Madrid event signage",
                        aspect: "2/3",
                        fit: "contain",
                        position: "center",
                    },
                ],
            },
        ],
    },

    /* =========================
       THE EXPERIENCE
    ========================== */
    {
        id: "experience",
        title: "The Experience",
        text:
            "The visual system extended across the entire event experience, from outdoor and digital communication to signage, merchandise and on-site applications, creating a consistent identity across every touchpoint.",
        scenes: [
            {
                id: "experience-stage",
                layout: "single",
                images: [
                    {
                        src: "/projects/fujikina/experience-stage.jpg",
                        alt: "Fujikina Madrid 2026 stage during the event",
                        aspect: "16/9",
                        fit: "contain",
                        position: "center",
                    },
                ],
            },
            {
                id: "experience-people",
                layout: "duo",
                images: [
                    {
                        src: "/projects/fujikina/experience-speaker.jpg",
                        alt: "Speaker at Fujikina Madrid 2026",
                        aspect: "3/2",
                        fit: "contain",
                        position: "center",
                    },
                    {
                        src: "/projects/fujikina/experience-tote.jpg",
                        alt: "Fujikina Madrid 2026 branded tote bag",
                        aspect: "3/2",
                        fit: "contain",
                        position: "center",
                    },
                ],
            },
            {
                id: "experience-space",
                layout: "duo",
                images: [
                    {
                        src: "/projects/fujikina/experience-crowd.jpg",
                        alt: "Visitors at Fujikina Madrid 2026",
                        aspect: "3/2",
                        fit: "contain",
                        position: "center",
                    },
                    {
                        src: "/projects/fujikina/experience-exhibition.jpg",
                        alt: "Photography exhibition at Fujikina Madrid 2026",
                        aspect: "3/2",
                        fit: "contain",
                        position: "center",
                    },
                ],
            },
        ],
    },
];

type ActiveScene = {
    sectionIndex: number;
    sceneIndex: number;
};

export default function FujikinaStory() {
    const storyRef = useRef<HTMLElement>(null);

    const [activeScene, setActiveScene] = useState<ActiveScene>({
        sectionIndex: 0,
        sceneIndex: 0,
    });

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                const sceneTriggers =
                    gsap.utils.toArray<HTMLElement>(".fujikina-scene-trigger");

                sceneTriggers.forEach((trigger) => {
                    const sectionIndex = Number(
                        trigger.dataset.sectionIndex,
                    );

                    const sceneIndex = Number(
                        trigger.dataset.sceneIndex,
                    );

                    ScrollTrigger.create({
                        trigger,
                        start: "top center",
                        end: "bottom center",

                        onEnter: () => {
                            setActiveScene({
                                sectionIndex,
                                sceneIndex,
                            });
                        },

                        onEnterBack: () => {
                            setActiveScene({
                                sectionIndex,
                                sceneIndex,
                            });
                        },
                    });
                });
            });

            return () => mm.revert();
        },
        {
            scope: storyRef,
        },
    );

    return (
        <section
            ref={storyRef}
            className="
        relative
        mt-14
        px-5

        md:mt-20
        md:px-10

        lg:mt-24
        lg:px-20

        xl:px-32
      "
        >
            {/* =========================
          DESKTOP / TABLET
      ========================== */}

            <div
                className="
          hidden
          grid-cols-12
          gap-6

          md:grid
          lg:gap-10
        "
            >
                {/* LEFT — STORY */}
                <div className="col-span-5 lg:col-span-4">
                    {sections.map((section, sectionIndex) => {
                        const sectionIsActive =
                            activeScene.sectionIndex === sectionIndex;

                        return (
                            <article
                                key={section.id}
                                className="relative"
                            >
                                {/* STICKY TEXT */}
                                <div
                                    className="
                    sticky
                    top-[28vh]
                    z-10
                    py-10
                  "
                                >
                                    <div
                                        className={`
                      max-w-[460px]

                      transition-[opacity,transform]
                      duration-500
                      ease-[cubic-bezier(0.22,1,0.36,1)]

                      ${sectionIsActive
                                                ? "translate-y-0 opacity-100"
                                                : "translate-y-2 opacity-30"
                                            }
                    `}
                                    >
                                        <p
                                            className="
                        mb-5
                        text-xs
                        uppercase
                        tracking-[-0.01em]
                      "
                                        >
                                            {section.title}
                                        </p>

                                        {section.text && (
                                            <p
                                                className="
                          text-base
                          leading-[1.45]
                          lg:text-lg
                        "
                                            >
                                                {section.text}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* SCROLL SPACE */}
                                <div>
                                    {section.scenes.map(
                                        (scene, sceneIndex) => (
                                            <div
                                                key={scene.id}
                                                data-section-index={sectionIndex}
                                                data-scene-index={sceneIndex}
                                                className="
                          fujikina-scene-trigger
                          min-h-[72vh]
                        "
                                            />
                                        ),
                                    )}
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* RIGHT — STICKY VISUAL */}
                <div className="col-span-7 lg:col-span-8">
                    <div
                        className="
              sticky
              top-8
              flex
              h-screen
              items-center
              py-8
            "
                    >
                        <div
                            className="
                relative
                h-[76vh]
                w-full
              "
                        >
                            {sections.map(
                                (section, sectionIndex) =>
                                    section.scenes.map(
                                        (scene, sceneIndex) => {
                                            const isActive =
                                                activeScene.sectionIndex === sectionIndex &&
                                                activeScene.sceneIndex === sceneIndex;

                                            return (
                                                <div
                                                    key={scene.id}
                                                    className={`
                            absolute
                            inset-0

                            transition-[opacity,transform]
                            duration-700
                            ease-[cubic-bezier(0.22,1,0.36,1)]

                            ${isActive
                                                            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                                                            : "pointer-events-none translate-y-2 scale-[0.985] opacity-0"
                                                        }
                          `}
                                                >
                                                    <StorySceneVisual scene={scene} />
                                                </div>
                                            );
                                        },
                                    ),
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* =========================
          MOBILE
      ========================== */}

            <div className="md:hidden">
                {sections.map((section) => (
                    <article
                        key={section.id}
                        className="
              border-t
              border-[var(--line)]
              py-14
            "
                    >
                        <p
                            className="
                mb-5
                text-[10px]
                uppercase
              "
                        >
                            {section.title}
                        </p>

                        {section.text && (
                            <p
                                className="
                  text-sm
                  leading-[1.5]
                "
                            >
                                {section.text}
                            </p>
                        )}

                        <div
                            className="
                mt-8
                space-y-5
              "
                        >
                            {section.scenes.map((scene) => (
                                <StorySceneVisual
                                    key={scene.id}
                                    scene={scene}
                                    mobile
                                />
                            ))}
                        </div>
                    </article>
                ))}
            </div>

            {/* =========================
          OUTCOME
      ========================== */}

            <FujikinaOutcome />
        </section>
    );
}

/* =========================================================
   OUTCOME
========================================================= */

function FujikinaOutcome() {
    const outcomeRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add(
                "(prefers-reduced-motion: no-preference)",
                () => {
                    const tl = gsap.timeline({
                        scrollTrigger: {
                            trigger: outcomeRef.current,
                            start: "top 75%",
                            once: true,
                        },
                    });

                    tl.from(".outcome-label", {
                        opacity: 0,
                        y: 12,
                        duration: 0.5,
                        ease: "power3.out",
                    });

                    tl.from(
                        ".outcome-stat",
                        {
                            opacity: 0,
                            y: 28,
                            duration: 0.75,
                            stagger: 0.1,
                            ease: "power3.out",
                        },
                        "-=0.2",
                    );

                    tl.from(
                        ".outcome-visual",
                        {
                            opacity: 0,
                            y: 24,
                            scale: 0.985,
                            duration: 0.9,
                            ease: "power3.out",
                        },
                        "-=0.35",
                    );
                },
            );

            return () => mm.revert();
        },
        {
            scope: outcomeRef,
        },
    );

    return (
        <div
            ref={outcomeRef}
            className="
        relative
        mt-16
        border-t
        border-[var(--line)]
        pt-8

        md:mt-24
        md:pt-10

        lg:mt-32
      "
        >
            {/* LABEL */}
            <p
                className="
          outcome-label
          text-[10px]
          uppercase
          md:text-xs
        "
            >
                The Outcome
            </p>

            {/* STATS */}
            <div
                className="
          mt-10
          grid
          grid-cols-1
          gap-y-9

          md:mt-14
          md:grid-cols-3
          md:gap-x-8
          md:gap-y-0

          lg:mt-16
        "
            >
                {/* GUESTS */}
                <div className="outcome-stat">
                    <p
                        className="
              text-[clamp(4.5rem,10vw,9rem)]
              font-normal
              leading-[0.82]
              tracking-[-0.055em]
            "
                    >
                        3,000
                    </p>

                    <p
                        className="
              mt-4
              text-[10px]
              uppercase
              md:text-xs
            "
                    >
                        Guests
                    </p>
                </div>

                {/* SPEAKERS */}
                <div className="outcome-stat">
                    <p
                        className="
              text-[clamp(4.5rem,10vw,9rem)]
              font-normal
              leading-[0.82]
              tracking-[-0.055em]
            "
                    >
                        16+
                    </p>

                    <p
                        className="
              mt-4
              text-[10px]
              uppercase
              md:text-xs
            "
                    >
                        Speakers
                    </p>
                </div>

                {/* WORKS */}
                <div className="outcome-stat">
                    <p
                        className="
              text-[clamp(4.5rem,10vw,9rem)]
              font-normal
              leading-[0.82]
              tracking-[-0.055em]
            "
                    >
                        200+
                    </p>

                    <p
                        className="
              mt-4
              text-[10px]
              uppercase
              md:text-xs
            "
                    >
                        Photographic works
                    </p>
                </div>
            </div>

            {/* FINAL VISUAL */}
            <div
                className="
          outcome-visual
          relative
          mt-14
          aspect-[16/9]
          w-full
          overflow-hidden

          md:mt-20
          lg:mt-24
        "
            >
                <Image
                    src="/projects/fujikina/outcome-01.jpg"
                    alt="Fujikina Madrid 2026 event"
                    fill
                    sizes="100vw"
                    className="object-cover"
                />
            </div>
        </div>
    );
}

/* =========================================================
   STORY VISUALS
========================================================= */

function StorySceneVisual({
    scene,
    mobile = false,
}: {
    scene: StoryScene;
    mobile?: boolean;
}) {
    /* =========================
        SINGLE
    ========================== */

    if (scene.layout === "single") {
        const image = scene.images[0];

        return (
            <ImageFrame
                image={image}
                mobile={mobile}
                fullHeight={!mobile}
            />
        );
    }

    /* =========================
        DUO
    ========================== */

    if (scene.layout === "duo") {
        return (
            <div
                className={`
          grid
          h-full
          items-center
          gap-4

          ${mobile
                        ? "grid-cols-1"
                        : "grid-cols-2"
                    }
        `}
            >
                {scene.images.map((image, index) => (
                    <div
                        key={image.src}
                        className={`
              flex
              h-full
              items-center

              ${!mobile && index === 1
                                ? "pt-14"
                                : ""
                            }
            `}
                    >
                        <ImageFrame
                            image={image}
                            mobile={mobile}
                        />
                    </div>
                ))}
            </div>
        );
    }

    /* =========================
        GRID
    ========================== */

    if (scene.layout === "grid") {
        return (
            <div
                className="
          grid
          h-full
          grid-cols-2
          gap-4
        "
            >
                {scene.images.map((image) => (
                    <ImageFrame
                        key={image.src}
                        image={image}
                        mobile={mobile}
                    />
                ))}
            </div>
        );
    }

    return null;
}

/* =========================================================
   IMAGE FRAME
========================================================= */

function ImageFrame({
    image,
    mobile = false,
    fullHeight = false,
}: {
    image: StoryImage;
    mobile?: boolean;
    fullHeight?: boolean;
}) {
    const fit =
        image.fit === "contain"
            ? "object-contain"
            : "object-cover";

    const aspectStyle =
        image.aspect
            ? {
                aspectRatio: image.aspect,
            }
            : undefined;

    return (
        <div
            className={`
        relative
        w-full
        overflow-hidden

        ${fullHeight
                    ? "h-full"
                    : ""
                }
      `}
            style={
                fullHeight
                    ? undefined
                    : aspectStyle
            }
        >
            <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes={
                    mobile
                        ? "100vw"
                        : "40vw"
                }
                className={fit}
                style={{
                    objectPosition:
                        image.position ?? "center",
                }}
            />
        </div>
    );
}