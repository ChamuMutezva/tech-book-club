import bookTechLogo from "/assets/images/logo.svg";

export function Header() {
    return (
        <header className="container mx-auto px-[var(--space-2)] py-[var(--space-3)] max-w-[74rem] sm:p-[var(--space-4)]">
            <a href="/" aria-label="book tech club" className="inline-block">
                <img  src={bookTechLogo} alt="" className="dark:invert dark:brightness-100 dark:hue-rotate-10" />
            </a>
        </header>
    );
}
