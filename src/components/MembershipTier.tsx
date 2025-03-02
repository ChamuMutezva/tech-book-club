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
    },
    {
        name: "Enterprise",
        price: "Custom",
        features: ["Team access", "Private sessions"],
        cta: "Talk to us",
    },
];

export function MembershipTiers() {
    return (
        <section className="container mx-auto px-4 py-12 lg:py-24 max-w-[74rem]">
            <h2 className="text-preset-2 font-bold tracking-tight text-center mb-12">
                Membership options
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {tiers.map((tier, index) => (
                    <div
                        className={`card flex flex-col gap-[var(--space-3)] p-6 border-[1px] border-[hsl(var(--neutral-200))]  transform hover:-translate-y-1  rounded-2xl
                            ${
                                index === 1 &&
                                "bg-gradient-to-b from-[#faf5f3] to-[#e6d1df] border-[#ffe2d1] shadow-lg"
                            }`}
                        key={tier.name}
                    >
                        <div className="flex flex-col gap-[var(--space-3)] card-header">
                            <h3 className="card-title text-preset-4">
                                {tier.name}
                            </h3>
                            <p className="card-description text-preset-3">
                                {tier.price}
                                {tier.price !== "Custom" && (
                                    <span className="text-preset-5">
                                        /month
                                    </span>
                                )}
                            </p>
                        </div>
                        <hr className="border-[1px] border-[hsl(var(--neutral-200))] my-2 mx-0" />
                        <div className="card-body">
                            <ul className="space-y-2">
                                {tier.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex items-center gap-[var(--space-15)]"
                                    >
                                        <img src={check} alt="" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button
                                type="button"
                                className="w-full text-preset-6 uppercase bg-[hsl(var(--light-salmon-50))]"
                            >
                                {tier.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
