import readTogetherMobile from "/assets/images/image-read-together-mobile.webp";
import readTogetherTablet from "/assets/images/image-read-together-tablet.webp";
import readTogetherDesktop from "/assets/images/image-read-together-desktop.webp";
import check from "/assets/images/icon-check.svg";

export function GrowTogether() {
    return (
        <section
            className="grow-together mx-auto bg-[hsl(var(--neutral-0))] px-[var(--space-2)] py-[var(--space-3)]
        flex flex-col lg:flex-row-reverse lg:items-center lg:gap-12 max-w-[74rem]"
        >
            <div className="grow-together-content flex-1">
                <h2 className="text-preset-2">Read together, grow together</h2>
                <ul className="flex flex-col gap-[var(--space-3)] my-[var(--space-3)]">
                    <li className="text-preset-5 flex items-center gap-[var(--space-15)]">
                        <img src={check} alt="" />
                        <span>
                            Monthly curated tech reads selected by industry
                            experts
                        </span>
                    </li>
                    <li className="text-preset-5 flex items-center gap-[var(--space-15)]">
                        <img src={check} alt="" />
                        <span>
                            Virtual and in-person meetups for deep-dive
                            discussions
                        </span>
                    </li>
                    <li className="text-preset-5 flex items-center  gap-[var(--space-15)]">
                        <img src={check} alt="" />
                        <span>Early access to new tech book releases</span>
                    </li>
                    <li className="text-preset-5 flex items-center gap-[var(--space-15)]">
                        <img src={check} alt="" />
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
