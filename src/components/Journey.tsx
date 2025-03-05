// import arrow from "/assets/images/pattern-arrow.svg";
export function Journey() {
    return (
        <section
            className={`journey px-[var(--space-2)] py-[var(--space-3)] sm:p-[var(--space-4)] lg:py-[var(--space-10)] 
                flex flex-col items-center gap-8 lg:gap-10 mx-auto max-w-[74rem]`}
        >
            <h2 className="text-[3.125rem] font-[900] text-center max-w-[15ch]">
                Your tech reading journey
            </h2>
            <ol className="flex flex-col md:flex-row lg:items-center gap-8 lg:gap-12">
                <li
                    className="flex flex-col items-start gap-4
                         relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[80px]
                         before:h-[33px] before:bg-[url('/assets/images/pattern-arrow.svg')] before:bg-cover
                          before:bg-center before:opacity-50 before:z-[-1] before:rotate-130 md:before:top-0 md:before:rotate-0"
                >
                    <span
                        className="border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]
                    text-2xl font-[700] w-10 h-10 flex items-center justify-center"
                    >
                        1
                    </span>
                    <p className="text-preset-6">Choose your membership tier</p>
                </li>
                <li
                    className="flex flex-col items-start gap-4
                         relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[80px]
                         before:h-[33px] before:bg-[url('/assets/images/pattern-arrow.svg')] before:bg-cover
                          before:bg-center before:opacity-50 before:z-[-1] before:rotate-130 md:before:top-0 md:before:rotate-0"
                >
                    <span
                        className="border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]
                     text-2xl font-[700] w-10 h-10 flex items-center justify-center"
                    >
                        2
                    </span>
                    <p className="text-preset-6">
                        Get your monthly book selection
                    </p>
                </li>
                <li
                    className="flex flex-col items-start gap-4
                         relative before:content-[''] before:absolute before:bottom-0 before:right-0 before:w-[80px]
                         before:h-[33px] before:bg-[url('/assets/images/pattern-arrow.svg')] before:bg-cover
                          before:bg-center before:opacity-50 before:z-[-1] before:rotate-130 md:before:top-0 md:before:rotate-0"
                >
                    <span
                        className="border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]
                     text-2xl font-[700] w-10 h-10 flex items-center justify-center"
                    >
                        3
                    </span>
                    <p className="text-preset-6">Join our discussion forums</p>
                </li>
                <li className="flex flex-col items-start gap-4">
                    <span
                        className="border-2 border-[hsl(var(--neutral-700))] rounded-[var(--radius-6)]
                     text-2xl font-[700] w-10 h-10 flex items-center justify-center"
                    >
                        4
                    </span>
                    <p className="text-preset-6">Attend exclusive meetups</p>
                </li>
            </ol>
        </section>
    );
}
