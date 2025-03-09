import { useEffect, useState } from "react";
import check from "/assets/images/icon-check.svg";
const tiers = [
    {
        name: "Starter",
        price: "$19",
        features: ["1 book/month", "Online forums"],
        cta: "Subscribe now",
    },
    {
        name: "Pro",
        price: "$29",
        features: ["2 books/month", "Virtual meetups"],
        cta: "Subscribe now",
        featured: true, // Mark this tier as featured
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["Team access", "Private sessions"],
        cta: "Talk to us",
    },
];

export function MembershipTiers() {
    // Add state to track dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    // Check for dark mode on component mount and when it changes
    useEffect(() => {
        // Initial check
        setIsDarkMode(document.documentElement.classList.contains("dark"));

        // Set up an observer to watch for class changes on the html element
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === "class") {
                    setIsDarkMode(
                        document.documentElement.classList.contains("dark")
                    );
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        // Clean up
        return () => observer.disconnect();
    }, []);

    return (
        <section
            id="membership"
            className="container mx-auto px-4 sm:p-[var(--space-4)] py-12 lg:py-24 max-w-[61rem]"
        >
            <h2 className="text-preset-2 font-bold tracking-tight text-center mb-12 dark:text-white">
                Membership options
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {tiers.map((tier) => (
                    <div
                        className={`card flex flex-col gap-[var(--space-3)] p-6 border-[1px]
                                                          ${
                                                              tier.featured
                                                                  ? "border-[#ffe2d1] dark:border-amber-700 shadow-lg transform hover:-translate-y-2"
                                                                  : "border-[hsl(var(--neutral-200))] dark:border-gray-700 transform hover:-translate-y-1"
                                                          }
                             transition-all duration-300 rounded-2xl
                             ${(() => {
                                 if (tier.featured) {
                                     return isDarkMode
                                         ? "dark-gradient"
                                         : "light-gradient";
                                 } else {
                                     return isDarkMode ? "bg-gray-800" : "";
                                 }
                             })()} 
                             dark:text-white relative z-10
                            `}
                        key={tier.name}
                    >
                        <div className="flex flex-col gap-[var(--space-3)] card-header">
                            <h3 className={`card-title text-preset-4 `}>
                                {tier.name}
                            </h3>
                            <p className={`card-description text-preset-3`}>
                                {tier.price}
                                {tier.price !== "Custom" && (
                                    <span className={`text-preset-5`}>
                                        /month
                                    </span>
                                )}
                            </p>
                        </div>
                        <hr className={`border-[1px] my-2 mx-0`} />
                        <div className="card-body">
                            <ul className="space-y-2">
                                {tier.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-[var(--space-15)]"
                                    >
                                        <img
                                            src={check}
                                            alt=""
                                            className={`check dark:invert dark:brightness-10 dark:hue-rotate-10`}
                                        />
                                        <span className={`text-preset-5`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-footer mt-auto">
                            <button
                                type="button"
                                className={`w-full btn-secondary text-preset-6 uppercase 
                                ${
                                    tier.featured
                                        ? "bg-[hsl(var(--light-salmon-50))] text-[hsl(var(--neutral-900))]"
                                        : "bg-[hsl(var(--light-salmon-50))] border-2"
                                }
                                transition-all duration-300 hover:shadow-lg`}
                            >
                                {tier.cta}
                            </button>
                        </div>
                        {tier.featured && (
                            <div className="absolute inset-0 bg-gradient-to-br from-amber-200/20 via-transparent to-orange-200/20 dark:from-amber-700/20 dark:to-orange-700/20 rounded-2xl pointer-events-none z-[-1]" />
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}
