import heroImageMobile from "/assets/images/image-hero-mobile.webp";
import heroImageTablet from "/assets/images/image-hero-tablet.webp";
import heroImageDesktop from "/assets/images/image-hero-desktop.webp";

function HeroImg() {
    return (
        <div className="flex-1 mt-12 lg:mt-0 animate-scale-in">
            <picture className="block w-full">
                <source
                    media="(min-width: 64rem)"
                    srcSet={heroImageDesktop}
                    type="image/webp"
                />
                <source
                    media="(min-width: 48rem)"
                    srcSet={heroImageTablet}
                    type="image/webp"
                />
                <img
                    className="w-full h-auto object-cover rounded-lg"
                    src={heroImageMobile}
                    alt="Tech book club members reading and assisting each other"
                />
            </picture>
        </div>
    );
}

export default HeroImg;
