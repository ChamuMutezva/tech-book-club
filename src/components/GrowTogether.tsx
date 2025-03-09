import readTogetherMobile from "/assets/images/image-read-together-mobile.webp";
import readTogetherTablet from "/assets/images/image-read-together-tablet.webp";
import readTogetherDesktop from "/assets/images/image-read-together-desktop.webp";
import check from "/assets/images/icon-check.svg";

export function GrowTogether() {
    return (
        <section
            className="grow-together mx-auto bg-[hsl(var(--neutral-0))] px-4 py-6 sm:p-8 lg:py-12
        flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12 max-w-[74rem] dark:bg-[hsl(var(--neutral-900))]"
        >
            <div className="grow-together-content flex-1">
                <h2 className="text-preset-2">Read together, grow together</h2>
                <ul className="flex flex-col gap-6 my-6">
                    <li className="text-preset-5 flex items-center gap-3 animate-fade-in">
                        <img
                            src={check}
                            alt=""
                            className="check dark:invert dark:brightness-10 dark:hue-rotate-10"
                        />
                        <span>
                            Monthly curated tech reads selected by industry
                            experts
                        </span>
                    </li>
                    <li className="text-preset-5 flex items-center gap-3">
                        <img
                            src={check}
                            alt=""
                            className="check dark:invert dark:brightness-10 dark:hue-rotate-10"
                        />
                        <span>
                            Virtual and in-person meetups for deep-dive
                            discussions
                        </span>
                    </li>
                    <li className="text-preset-5 flex items-center  gap-3">
                        <img
                            src={check}
                            alt=""
                            className="check dark:invert dark:brightness-10 dark:hue-rotate-10"
                        />
                        <span>Early access to new tech book releases</span>
                    </li>
                    <li className="text-preset-5 flex items-center gap-3">
                        <img
                            src={check}
                            alt=""
                            className="check dark:invert dark:brightness-10 dark:hue-rotate-10"
                        />
                        <span>
                            Author Q&A sessions with tech thought leaders
                        </span>
                    </li>
                </ul>
            </div>
            <div className="grow-together-image flex-1">
                <picture>
                    <source
                        media="(min-width: 64rem)"
                        srcSet={readTogetherDesktop}
                    />
                    <source
                        media="(min-width: 48rem)"
                        srcSet={readTogetherTablet}
                    />
                    <img
                        className="grow-together-image rounded-xl"
                        src={readTogetherMobile}
                        alt="Tech book club members reading together"
                    />
                </picture>
            </div>
        </section>
    );
}
