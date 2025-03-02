// import arrow from "/assets/images/pattern-arrow.svg";
export function Journey() {
    return (
        <section className={`journey px-[var(--space-2)] py-[var(--space-3)] flex flex-col gap-8 mx-auto max-w-[74rem]
        bg-[url("/assets/images/pattern-light-bg.svg")]`}
        >
            <h2>Your tech reading journey</h2>
            <ol className="flex flex-col md:flex-row lg:items-center gap-8 lg:gap-12">
                <li
                    className="flex flex-col items-start gap-2
                         relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[80px]
                         before:h-[33px] before:bg-[url('/assets/images/pattern-arrow.svg')] before:bg-cover
                          before:bg-center before:opacity-50 before:z-[-1] before:rotate-130 md:before:top-0 md:before:rotate-0"
                >
                    <span className="p-2 border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]">
                        1
                    </span>
                    <p>Choose your membership tier</p>
                </li>
                <li className="flex flex-col items-start gap-2
                         relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[80px]
                         before:h-[33px] before:bg-[url('/assets/images/pattern-arrow.svg')] before:bg-cover
                          before:bg-center before:opacity-50 before:z-[-1] before:rotate-130 md:before:top-0 md:before:rotate-0">
                    <span className="p-2 border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]">
                        2
                    </span>
                    <p>Get your monthly book selection</p>
                </li>
                <li className="flex flex-col items-start gap-2
                         relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[80px]
                         before:h-[33px] before:bg-[url('/assets/images/pattern-arrow.svg')] before:bg-cover
                          before:bg-center before:opacity-50 before:z-[-1] before:rotate-130 md:before:top-0 md:before:rotate-0">
                    <span className="p-2 border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]">
                        3
                    </span>
                    <p>Join our discussion forums</p>
                </li>
                <li className="flex flex-col items-start gap-2">
                    <span className="p-2 border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]">
                        4
                    </span>
                    <p>Attend exclusive meetups</p>
                </li>
            </ol>
        </section>
    );
}
