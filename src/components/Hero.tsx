import heroImageMobile from "/assets/images/image-hero-mobile.webp";
import heroImageTablet from "/assets/images/image-hero-tablet.webp";
import heroImageDesktop from "/assets/images/image-hero-desktop.webp";
import arrowDown from "/assets/images/icon-arrow-down.svg";
import avatars from "/assets/images/image-avatars.webp";
import star from "/assets/images/icon-star.svg";

export function Hero() {
    return (
        <section className="hero mx-auto p-[var(--space-2)] sm:p-[var(--space-4)] lg:px-6 max-w-[74rem]">
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                {/* Content */}
                <div className="flex-1 flex flex-col gap-[var(--space-3)] text-center lg:text-left">
                    <h1
                        className="inline-block text-transparent bg-clip-text text-preset-1 text-left text-gradient max-w-[15ch]
                   "
                    >
                        Join the ultimate tech book club
                    </h1>
                    <p className="text-preset-5 max-w-[50ch] dark:text-gray-300">
                        Turn your reading time into learning time with fellow
                        tech enthusiasts. Get curated recommendations, join
                        vibrant discussions, and level up your skills one
                        chapter at a time.
                    </p>
                    <a
                        href="#membership"
                        className="btn-primary flex items-center justify-center uppercase gap-1 max-w-[24.25rem]
                        border-2 border-[hsl(var(--neutral-900))] text-[hsl(var(--neutral-900))]
                         dark:border-white dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
                    >
                        Review membership options <img src={arrowDown} alt="" />
                    </a>
                    <div className="ratings-container flex items-center gap-[var(--space-15)] justify-center lg:justify-start  max-w-[24.25rem]">
                        <div className="flex-[0_0_35%]">
                            <img src={avatars} alt="" className="max-w-full" />
                        </div>
                        <div className="ratings flex flex-col flex-grow items-baseline">
                            <div className="stars flex">
                                {[...Array(5)].map((_, index) => (
                                    <img key={index} src={star} alt="" />
                                ))}
                            </div>
                            <p className="text-left text-preset-7">
                                200+ developers joined already
                            </p>
                        </div>
                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 mt-12 lg:mt-0">
                    <picture className="block w-full">
                        <source
                            media="(min-width: 64rem)"
                            srcSet={heroImageDesktop}
                        />
                        <source
                            media="(min-width: 48rem)"
                            srcSet={heroImageTablet}
                        />
                        <img
                            className="w-full h-auto object-cover rounded-lg"
                            src={heroImageMobile}
                            alt="Tech book club members reading and assisting each other"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
