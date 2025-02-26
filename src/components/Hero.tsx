import arrowDown from "/assets/images/icon-arrow-down.svg";
import avatars from "/assets/images/image-avatars.webp";
import star from "/assets/images/icon-star.svg";
import heroImageMobile from "/assets/images/image-hero-mobile.webp";
import heroImageTablet from "/assets/images/image-hero-tablet.webp";
import heroImageDesktop from "/assets/images/image-hero-desktop.webp";

export function Hero() {
    return (
        <section className="container mx-auto px-4 py-12 lg:py-24">
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                <div className="space-y-6">
                    <h1 className="text-4xl font-bold tracking-tight lg:text-6xl">
                        Join the ultimate tech book club
                    </h1>
                    <p className="text-lg text-muted-foreground">
                        Turn your reading time into learning time with fellow
                        tech enthusiasts. Get curated recommendations, join
                        vibrant discussions, and level up your skills one
                        chapter at a time.
                    </p>
                    <button type="button" className="gap-2">
                        Review membership options{" "}
                        <img src={arrowDown} alt="" className="inline-block" />
                    </button>
                    <div className="flex items-center gap-4">
                        <img src={avatars} alt="" width={150} height={50} />
                        <div className="space-y-1">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={star}
                                        alt=""
                                        width={20}
                                        height={20}
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                200+ developers joined already
                            </p>
                        </div>
                    </div>
                </div>
                <div className="relative aspect-video">
                    <picture>
                        <source
                            media="(min-width: 1024px)"
                            srcSet={heroImageDesktop}
                        />
                        <source
                            media="(min-width: 768px)"
                            srcSet={heroImageTablet}
                        />
                        <img
                            src={heroImageMobile || "/placeholder.svg"}
                            alt="Tech book club members reading and assisting each other"
                            className="object-cover rounded-lg"
                        />
                    </picture>
                </div>
            </div>
        </section>
    );
}
