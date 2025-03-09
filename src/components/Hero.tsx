import HeroBtn from "./HeroBtn";
import Ratings from "./Ratings";
import HeroImage from "./HeroImg";

export function Hero() {
    return (
        <section
            aria-label="Book Club Introduction"
            className="hero mx-auto p-4 sm:p-8 lg:px-6 max-w-[74rem]"
        >
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-12">
                {/* Content */}
                <div className="flex-1 flex flex-col gap-[var(--space-3)] text-center lg:text-left animate-fade-in-up">
                    <h1
                        className="text-transparent bg-clip-text text-preset-1 text-left text-gradient max-w-[15ch]
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
                    <HeroBtn />
                    <Ratings />
                </div>

                {/* Image */}
                <HeroImage />
            </div>
        </section>
    );
}
