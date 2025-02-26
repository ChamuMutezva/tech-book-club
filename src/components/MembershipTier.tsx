const tiers = [
    {
        name: "Starter",
        price: "$19/month",
        features: ["1 book/month", "Online forums"],
        cta: "Subscribe now",
    },
    {
        name: "Pro",
        price: "$29/month",
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
        <section className="container mx-auto px-4 py-12 lg:py-24">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
                Membership options
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {tiers.map((tier) => (
                    <div className="card" key={tier.name}>
                        <div className="card-header">
                            <h3 className="card-title">{tier.name}</h3>
                            <p className="card-description">{tier.price}</p>
                        </div>
                        <div className="card-body">
                            <ul className="space-y-2">
                                {tier.features.map((feature) => (
                                    <li key={feature}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="card-footer">
                            <button type="button" className="w-full">
                                {tier.cta}
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
