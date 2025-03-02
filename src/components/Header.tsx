import bookTechLogo from "/assets/images/logo.svg";

export function Header() {
    return (
        <header className="container mx-auto px-[var(--space-2)] py-[var(--space-3)] max-w-[74rem]">
            <a href="/" aria-label="book tech club" className="inline-block">
                <img src={bookTechLogo || "/placeholder.svg"} alt="" />
            </a>
        </header>
    );
}
