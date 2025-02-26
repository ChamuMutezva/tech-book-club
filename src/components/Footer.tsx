import arrowDown from "/assets/images/icon-arrow-down.svg";
import avatars from "/assets/images/image-avatars.webp";
import star from "/assets/images/icon-star.svg";

export function Footer() {
    return (
        <footer className="bg-muted/50 border-t">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-3xl mx-auto">
                    {/* CTA Section */}
                    <div className="text-center space-y-6 mb-12">
                        <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
                            Ready to debug your reading list?
                        </h2>
                        <div className="flex items-center gap-2">
                            <button type="button">
                                Review membership options
                            </button>
                            <img
                                src={arrowDown}
                                alt=""
                                className="transition-transform group-hover:translate-y-1"
                            />
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
                    <div className="text-center pt-6 border-t">
                        <p className="text-sm text-muted-foreground">
                            © 2024 - Tech Book Club
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
