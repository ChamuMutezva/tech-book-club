import arrowUp from "/assets/images/icon-arrow-up.svg";
import avatars from "/assets/images/image-avatars.webp";
import star from "/assets/images/icon-star.svg";
import blueSky from "/assets/images/logo-bluesky.svg";
import linkedin from "/assets/images/logo-linkedin.svg";

export function Footer() {
    return (
        <footer className="bg-[hsl(var(--neutral-900))] text-[hsl(var(--neutral-0))] rounded-t-2xl">
            <div className="mx-auto px-4 py-12">
                <div className="mx-auto">
                    {/* CTA Section */}
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                            Ready to debug your reading list?
                        </h2>
                        <div className="flex items-center justify-center gap-2">
                            <button
                                type="button"
                                className="flex items-center justify-center border-2 border-[hsl(var(--neutral-0))]"
                            >
                                Review membership options{" "}
                                <img
                                    src={arrowUp}
                                    alt=""
                                    className="transition-transform group-hover:translate-y-1"
                                />
                            </button>
                        </div>
                    </div>

                    {/* Ratings Section */}
                    <div className="flex flex-col items-center justify-center gap-4 mb-12 md:flex-row">
                        <img
                            src={avatars}
                            alt="Member avatars"
                            className="rounded-full"
                        />
                        <div className="text-center md:text-left">
                            <div className="flex justify-center md:justify-start gap-1 mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <img
                                        key={i}
                                        src={star || "/placeholder.svg"}
                                        alt=""
                                    />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                200+ developers joined already
                            </p>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="text-center pt-6 border-t border-[hsl(var(--neutral-700))] flex justify-center">
                        <div
                            className=" w-full max-w-[74rem] flex flex-col md:flex-row 
                             items-center justify-center md:justify-between gap-4"
                        >
                            <p className="text-sm text-muted-foreground">
                                © 2024 - Tech Book Club
                            </p>
                            <div className="flex justify-center  items-center gap-4">
                                <a
                                    href="https://bluesky.com"
                                    className="text-muted-foreground hover:text-[hsl(var(--neutral-0))] transition-colors"
                                >
                                    <img src={blueSky} alt="" />
                                    <span className="sr-only">Bluesky</span>
                                </a>
                                <a
                                    href="https://linkedin.com"
                                    className="text-muted-foreground hover:text-[hsl(var(--neutral-0))] transition-colors"
                                >
                                    <img src={linkedin} alt="" />
                                    <span className="sr-only">LinkedIn</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
