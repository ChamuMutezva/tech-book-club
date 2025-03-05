import star from "/assets/images/icon-star.svg";

export function Testimonials() {
    return (
        <section className="testimonials px-[var(--space-2)] py-[var(--space-3)] sm:p-[var(--space-4)]
        flex flex-col items-center justify-center gap-8">
            <div className="stars flex sm:justify-center">
                {[...Array(5)].map((_, index) => (
                    <img key={index} src={star || "/placeholder.svg"} alt="" />
                ))}
            </div>
            <h2 className="sm:text-center sr-only">Testimonials</h2>
            <div className="testimonial flex flex-col justify-center items-center gap-8">
                <p className="text-left lg:text-center text-preset-3mb max-w-[40ch]">
                    "This book club transformed my technical reading from a
                    solitary activity into an enriching community experience.
                    The discussions are gold!"
                </p>
                <p className="text-center">Sarah Chen, Software Architect</p>
            </div>
        </section>
    );
}
