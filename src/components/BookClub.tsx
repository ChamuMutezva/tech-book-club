import notAverageMobile from "/assets/images/image-not-average-mobile.webp";
import notAverageTablet from "/assets/images/image-not-average-tablet.webp";
import notAverageDesktop from "/assets/images/image-not-average-desktop.webp";

export function BookClub() {
    return (
        <section
            className="book-club px-4 py-6 lg:py-20 sm:p-8 flex flex-col 
            lg:flex-row lg:items-center gap-8 lg:gap-12 lg:px-0 max-w-[74rem] mx-auto"
        >
            <div className="book-club-content flex-1 flex flex-col gap-4 lg:gap-6 animate-slide-in-left">
                <h2 className="text-preset-2">
                    Not your average book{" "}
                    <span
                        className={`bg-[url("/assets/images/pattern-circle.png")] bg-contain bg-center bg-no-repeat`}
                    >
                        club
                    </span>
                </h2>
                <p className="text-preset-5 max-w-[40ch]">
                    Connect with a community that speaks your language - from
                    <span className="font-bold"> Python</span> to{" "}
                    <span className="font-bold"> TypeScript </span>
                    and everything in between. Our discussions blend technical
                    depth with practical applications.
                </p>
            </div>
            <div
                className="book-club-image flex-1 animate-slide-in-right
             relative before:content-[''] before:absolute before:bottom-[2rem] before:right-[2rem] before:w-[120px]
             before:h-[138px] md:before:bg-[url('/assets/images/logos-tech.svg')] before:bg-cover
                          before:bg-center before:z-[1]  lg:before:left-[-5rem]"
            >
                <picture>
                    <source
                        media="(min-width: 64rem)"
                        srcSet={notAverageDesktop}
                    />
                    <source
                        media="(min-width: 48rem)"
                        srcSet={notAverageTablet}
                    />
                    <img
                        className="book-club-image rounded-xl"
                        src={notAverageMobile}
                        alt="Tech book club members discussing a book"
                    />
                </picture>
            </div>
        </section>
    );
}
