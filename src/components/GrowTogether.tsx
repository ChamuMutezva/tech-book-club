import readTogetherMobile from "/assets/images/image-read-together-mobile.webp";
import readTogetherTablet from "/assets/images/image-read-together-tablet.webp";
import readTogetherDesktop from "/assets/images/image-read-together-desktop.webp";

export function GrowTogether() {
    return (
        <section className="grow-together">
            <div className="grow-together-content">
                <h2>Read together, grow together</h2>
                <ul>
                    <li>
                        Monthly curated tech reads selected by industry experts
                    </li>
                    <li>
                        Virtual and in-person meetups for deep-dive discussions
                    </li>
                    <li>Early access to new tech book releases</li>
                    <li>Author Q&A sessions with tech thought leaders</li>
                </ul>
            </div>
            <div className="grow-together-image">
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
                        className="grow-together-image"
                        src={readTogetherMobile}
                        alt="Tech book club members reading together"
                    />
                </picture>
            </div>
        </section>
    );
}
